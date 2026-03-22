export async function load({ fetch }: any) {
  try {
    const res = await fetch(
      'https://batdongsan.atservice.vn/wp/v2/posts?_embed',
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );

    if (!res.ok) {
      throw new Error('API failed');
    }

    const posts = await res.json();

    return {
      posts
    };
  } catch (err) {
    console.error(err);

    return {
      posts: []
    };
  }
}