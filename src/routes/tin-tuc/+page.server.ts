export async function load() {
  try {
    const res = await fetch(
      'https://batdongsan.atservice.vn/wp-json/wp/v2/posts?_embed'
    );

    if (!res.ok) {
      throw new Error('Không lấy được dữ liệu');
    }

    const posts = await res.json();

    return {
      posts
    };
  } catch (error) {
    console.error(error);

    return {
      posts: []
    };
  }
}