import type { APIRoute } from 'astro';

export const prerender = false;

const ENDPOINTS: Record<string, string> = {
  contact: 'https://manager.woodwolfdigital.com/api/method/submit_contact_form',
  newsletter: 'https://manager.woodwolfdigital.com/api/method/subscribe_newsletter',
  demo: 'https://manager.woodwolfdigital.com/api/method/request_demo',
};

const DISCORD_WEBHOOK_URL =
  import.meta.env.DISCORD_WEBHOOK_URL ||
  process.env.DISCORD_WEBHOOK_URL ||
  '';

async function notifyDiscord(action: string, payload: Record<string, unknown>, crmResponse: string) {
  if (!DISCORD_WEBHOOK_URL) return;

  const titles: Record<string, string> = {
    contact: 'New Contact Form Submission (t3element.com)',
    newsletter: 'New Newsletter Subscription (t3element.com)',
    demo: 'New Demo Request (t3element.com)',
  };

  const fields = [
    payload.name ? { name: 'Name', value: String(payload.name), inline: true } : null,
    payload.email ? { name: 'Email', value: String(payload.email), inline: true } : null,
    payload.topic ? { name: 'Topic', value: String(payload.topic), inline: true } : null,
    payload.message ? { name: 'Message', value: String(payload.message).slice(0, 1000), inline: false } : null,
    { name: 'CRM Status', value: crmResponse.slice(0, 200) || 'OK', inline: false },
  ].filter(Boolean);

  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'T3element Notifier',
        embeds: [
          {
            title: titles[action] || 'New T3element Form Submission',
            color: 0xf7931e,
            fields,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
  } catch {
    // Non-blocking: Discord failure should not fail the user's CRM submission
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const body = await request.json();
    const action = typeof body?.action === 'string' ? body.action : '';
    const targetUrl = ENDPOINTS[action];

    if (!targetUrl) {
      return new Response(JSON.stringify({ message: 'Invalid form action.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Canonical Server-Side Cloudflare Turnstile siteverify
    const token = body?.['cf-turnstile-response'];
    const secret =
      import.meta.env.TURNSTILE_SECRET ||
      process.env.TURNSTILE_SECRET ||
      '';
    const rawHostnames =
      import.meta.env.TURNSTILE_HOSTNAMES ||
      process.env.TURNSTILE_HOSTNAMES ||
      't3element.com,www.t3element.com,localhost,127.0.0.1';
    const expectedHostnames = new Set(
      rawHostnames
        .split(',')
        .map((hostname: string) => hostname.trim())
        .filter(Boolean)
    );

    if (
      typeof token !== 'string' ||
      token.length === 0 ||
      token.length > 2048 ||
      !secret ||
      expectedHostnames.size === 0
    ) {
      return new Response(JSON.stringify({ message: 'Turnstile verification required.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const clientIp =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      clientAddress ||
      '';

    let verifyResult: { success?: boolean; action?: string; hostname?: string };
    try {
      const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        signal: AbortSignal.timeout(10_000),
        body: new URLSearchParams({
          secret,
          response: token,
          ...(clientIp ? { remoteip: clientIp } : {}),
        }),
      });
      if (!r.ok) throw new Error(`siteverify ${r.status}`);
      verifyResult = await r.json();
    } catch {
      return new Response(JSON.stringify({ message: 'Turnstile verification failed.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (
      !verifyResult.success ||
      verifyResult.action !== action ||
      (verifyResult.hostname && !expectedHostnames.has(verifyResult.hostname))
    ) {
      return new Response(JSON.stringify({ message: 'Turnstile verification rejected.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { action: _ignored, 'cf-turnstile-response': _tok, ...payload } = body;

    const upstream = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        website: 't3element.com',
      }),
    });

    const text = await upstream.text();

    if (upstream.ok) {
      await notifyDiscord(action, payload, text);
    }

    return new Response(text || '{}', {
      status: upstream.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(
      JSON.stringify({ message: 'Unable to reach CRM server. Please try again.' }),
      {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
