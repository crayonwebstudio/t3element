# t3element

T3element website, Astro 5 with the Node adapter (SSR), live at https://t3element.com.

## Run

```sh
npm ci
npm run build
npm run preview
```

The production server listens on `HOST` / `PORT` (defaults `0.0.0.0` / `4321`).

## Environment

Copy `.env.example` to `.env` and fill in the values. Never commit `.env`.

- `PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET`, `TURNSTILE_HOSTNAMES`: Cloudflare Turnstile for the contact, newsletter and demo forms (`/api/crm`).
- `DISCORD_WEBHOOK_URL`: optional Discord notification for form submissions.

## Forms

`/api/crm` verifies Turnstile server side, then forwards contact, newsletter and demo submissions to the ERPNext endpoints on manager.woodwolfdigital.com.

## Deploy

Dockerfile build, Coolify on the Crayon server, domain https://t3element.com.
