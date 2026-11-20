import type { APIRoute } from 'astro';

const ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services/', priority: '0.95', changefreq: 'weekly' },
  { path: '/care-package/', priority: '0.95', changefreq: 'weekly' },
  { path: '/element-builder/', priority: '0.9', changefreq: 'weekly' },
  { path: '/about/', priority: '0.8', changefreq: 'monthly' },
  { path: '/how-to/', priority: '0.75', changefreq: 'monthly' },
  { path: '/user-guide/', priority: '0.75', changefreq: 'monthly' },
  { path: '/faq/', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact/', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy/', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-condition/', priority: '0.3', changefreq: 'yearly' },
  { path: '/copyright/', priority: '0.3', changefreq: 'yearly' },
  { path: '/sitemap/', priority: '0.4', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];
  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>https://t3element.com${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
