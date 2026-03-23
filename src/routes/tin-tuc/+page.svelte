<script lang="ts">
  const { data } = $props();
  const posts = data.posts;
</script>

<section class="py-16 min-h-screen">
  <div class="max-w-7xl mx-auto px-6">

    <div class="text-center mb-14">
      <h1 class="text-4xl md:text-6xl font-playfair italic font-bold mb-3">Tin tức Diamon Boulevard</h1>
      <p class="text-slate-600">Thông tin dự án mới nhất</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {#each posts as post}
        <a href={"/tin-tuc/" + post.slug}>
          <article class="bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">

            <img
              src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/fallback.jpg'}
              alt={post.title.rendered}
              class="w-full h-60 object-cover"
            />

            <div class="p-6">
              <h2 class="text-xl font-bold mb-3 line-clamp-2">
                {@html post.title.rendered}
              </h2>

              <div class="text-slate-600 text-sm line-clamp-3 mb-4">
                {@html post.excerpt.rendered}
              </div>

              <span class="text-white underline font-semibold">
                Xem chi tiết →
              </span>
            </div>

          </article>
        </a>
      {/each}

    </div>

  </div>
</section>