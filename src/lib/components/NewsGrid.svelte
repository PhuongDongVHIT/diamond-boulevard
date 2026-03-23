<script lang="ts">
  type Post = {
    slug: string;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    _embedded?: {
      "wp:featuredmedia"?: {
        source_url: string;
      }[];
    };
  };

  const { posts } = $props<{ posts: Post[] }>();

  const getImage = (post: Post) =>
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/fallback.jpg";
</script>

<section class="py-12 md:py-16">
  <div class="max-w-8xl mx-auto px-6 lg:px-10">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-6xl font-playfair italic font-bold tracking-tight mb-4"
        >
          Tin tức Diamond Boulevard
        </h1>
        <p class="text-lg">Cập nhật thông tin dự án mới nhất</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each posts as post}
          <a href={`/tin-tuc/${post.slug}`} class="group block">
            <article
              class="overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div class="relative overflow-hidden">
                <img
                  src={getImage(post)}
                  alt={post.title.rendered}
                  loading="lazy"
                  class="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div class="p-6">
                <h3
                  class="text-xl font-semibold leading-snug mb-3 line-clamp-2 group-hover:text-orange-500 transition"
                >
                  {@html post.title.rendered}
                </h3>

                <div
                  class="flex items-center gap-2 text-white underline font-medium text-sm"
                >
                  <span>Xem chi tiết</span>
                  <span class="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
