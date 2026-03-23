export async function GET() {
  const pages = [
    '/',
    '/tong-quan',
    '/vi-tri',
    '/mat-bang',
    '/tien-ich',
    '/phap-ly',
    '/thu-vien',
    '/tin-tuc'
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `
<url>
  <loc>https://diamondboulevard.xyz${p}</loc>
</url>`).join('')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
