<script lang="ts">
  import { images, type ImageItem } from "$lib/actions/load-images";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  import { onMount } from "svelte";

  let active = $state("all");

  const tabs = [
    { key: "all", label: "Tất cả" },
    { key: "can-ho", label: "Căn hộ" },
    { key: "mat-bang", label: "Mặt bằng" },
    { key: "tien-ich", label: "Tiện ích" },
    { key: "vi-tri", label: "Vị trí" },
  ];

  let filtered = $derived(
    active === "all" ? images : images.filter((i) => i.category === active),
  );

  onMount(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => lightbox.destroy();
  });
</script>

<section class="pt-20">
  <div class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-8 text-center">Thư viện hình ảnh</h2>

    <!-- Tabs -->
    <div class="flex flex-wrap justify-center gap-3 mb-10">
      {#each tabs as t}
        <button
          onclick={() => (active = t.key)}
          class={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
        ${
          active === t.key
            ? "bg-black text-white scale-105"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        >
          {t.label}
        </button>
      {/each}
    </div>

    <!-- Gallery -->
    <div id="gallery" class="grid grid-cols-2 md:grid-cols-3 gap-4">
      {#each filtered as img}
        <a
          href={img.src}
          data-pswp-width="1600"
          data-pswp-height="900"
          target="_blank"
          rel="noreferrer"
          class="group relative overflow-hidden rounded-md block"
        >
          <img
            src={img.src}
            alt={img.title}
            loading="lazy"
            class="w-full h-[280px] object-cover transition duration-500 group-hover:scale-110"
          />

          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"
          ></div>
        </a>
      {/each}
    </div>
  </div>
</section>
