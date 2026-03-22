<script lang="ts">
const { data } = $props();
const post = data.post;
</script>

<svelte:head>
  <title>{post.title.rendered}</title>
  <meta
    name="description"
    content={post.excerpt.rendered.replace(/<[^>]*>/g, '')}
  />
</svelte:head>

<section class="bg-white min-h-screen py-16">
  <div class="max-w-4xl mx-auto px-6">

    <img
      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/fallback.jpg'}
      alt={post.title.rendered}
      class="w-full h-[450px] object-cover rounded-2xl mb-10 shadow-lg"
    />

    <h1 class="text-4xl font-bold leading-tight mb-6">
      {@html post.title.rendered}
    </h1>

    <div class="text-slate-500 mb-8">
      {new Date(post.date).toLocaleDateString('vi-VN')}
    </div>

    <article class="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:font-bold prose-p:text-slate-700">
      {@html post.content.rendered}
    </article>

    <div class="mt-12">
      <a
        href="/tin-tuc"
        class="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition"
      >
        ← Quay lại tin tức
      </a>
    </div>

  </div>
</section>
