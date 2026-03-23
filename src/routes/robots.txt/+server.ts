export function GET() {
  return new Response(`
User-agent: *
Allow: /

Sitemap: https://diamondboulevard.xyz/sitemap.xml
`, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}