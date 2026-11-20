export const CRM_ENDPOINTS = {
  contact: 'contact',
  newsletter: 'newsletter',
  demo: 'demo',
} as const;

export interface CrmResult {
  ok: boolean;
  code?: string;
  message: string;
}

export async function postToCrm(
  action: string,
  payload: Record<string, string>
): Promise<CrmResult> {
  try {
    const res = await fetch('/api/crm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        ...payload,
      }),
    });

    const data = await res.json().catch(() => ({}));
    const msgObj = data?.message ?? data;
    let statusText =
      typeof msgObj === 'string'
        ? msgObj
        : msgObj?.status || msgObj?.message || '';

    // Parse Frappe _server_messages if present
    if (!statusText && typeof data?._server_messages === 'string') {
      try {
        const arr = JSON.parse(data._server_messages);
        const first = typeof arr?.[0] === 'string' ? JSON.parse(arr[0]) : arr?.[0];
        if (first?.message) statusText = first.message;
      } catch {
        // ignore parse fallback
      }
    }

    if (!res.ok) {
      return {
        ok: false,
        message: statusText || `Request failed (${res.status}). Please try again.`,
      };
    }

    if (statusText === 'already_subscribed' || data?.already_subscribed || msgObj?.already_subscribed) {
      return {
        ok: true,
        code: 'already_subscribed',
        message: 'You are already subscribed to T3element updates.',
      };
    }

    if (statusText === 'already_requested' || data?.already_requested || msgObj?.already_requested) {
      return {
        ok: true,
        code: 'already_requested',
        message: 'A demo has already been requested for this email. We will reach out shortly.',
      };
    }

    return {
      ok: true,
      code: 'success',
      message: 'Submitted successfully.',
    };
  } catch {
    return {
      ok: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
