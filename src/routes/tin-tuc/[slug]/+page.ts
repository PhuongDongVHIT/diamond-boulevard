export async function load({ params, fetch }: any) {
  const res = await fetch(
    `https://batdongsan.atservice.vn/wp/v2/posts?slug=${params.slug}&_embed`
  );

  const data = await res.json();

  if (!data.length) {
    throw new Error('Không tìm thấy bài viết');
  }

  return {
    post: data[0]
  };
}
