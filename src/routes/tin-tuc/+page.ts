export async function load({ fetch }: any) {
  const res = await fetch(
    'https://batdongsan.atservice.vn/wp/v2/posts?_embed'
  );

  const posts = await res.json();

  return {
    posts
  };
}
