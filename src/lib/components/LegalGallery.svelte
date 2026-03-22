<script lang="ts">
  import { imageLaws } from "$lib/actions/load-images";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  import { onMount } from "svelte";

  onMount(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#legal-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => lightbox.destroy();
  });
</script>

<!-- Gallery -->
<div
  id="legal-gallery"
  class="grid grid-cols-1 md:grid-cols-2 gap-5"
>
  {#each imageLaws as img}
    <a
      href={img.src}
      data-pswp-width="1600"
      data-pswp-height="900"
      target="_blank"
      rel="noreferrer"
      class="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-xl"
    >
      <div class="overflow-hidden">
        <img
          src={img.src}
          alt={img.title}
          loading="lazy"
          class="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <!-- overlay -->
      <div
        class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"
      ></div>

      <!-- title -->
      <div
        class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
      >
        <p class="text-white font-medium text-sm md:text-base">
          {img.title}
        </p>
      </div>
    </a>
  {/each}
</div>
