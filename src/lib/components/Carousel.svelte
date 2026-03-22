<script lang="ts">
  import { onMount } from "svelte";

  let {
    items = [
      {
        id: 1,
        title: "",
        subtitle: "",
        imageUrl: "/images/tecco-tan-an-can-ho-diamond-boulevard.webp",
      },
      {
        id: 2,
        title: "",
        subtitle: "",
        imageUrl: "/images/khu-shop-housecan-ho-diamond-boulevard.webp",
      },
      {
        id: 3,
        title: "",
        subtitle: "",
        imageUrl: "/images/ban-cong-can-ho-diamond-boulevard.webp",
      },
      {
        id: 4,
        title: "",
        subtitle: "",
        imageUrl: "/images/can-ho-diamond-boulevard-goc-nhin-4.webp",
      },
      {
        id: 5,
        title: "",
        subtitle: "",
        imageUrl: "/images/noi-khu-can-ho-diamond-boulevard-1.webp",
      },
      {
        id: 6,
        title: "",
        subtitle: "",
        imageUrl: "/images/noi-khu-can-ho-diamond-boulevard.webp",
      },
    ],
    autoplay = true,
    interval = 5000,
  } = $props();

  let currentIndex = $state(0);
  let timer: any;

  function next() {
    currentIndex = (currentIndex + 1) % items.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
  }

  function goTo(index: number) {
    currentIndex = index;
  }

  onMount(() => {
    if (autoplay) {
      timer = setInterval(next, interval);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  });
</script>

<div class="relative w-screen h-screen overflow-hidden bg-bg-color">
  {#each items as item, i}
    <div
      class="absolute inset-0 w-screen h-screen bg-cover bg-center flex items-end justify-center transition-opacity duration-1000 ease-in-out {i ===
      currentIndex
        ? 'opacity-100 z-10'
        : 'opacity-0 z-0 pointer-events-none'}"
      style="background-image: url('{item.imageUrl}')"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-[#0f172a]/20"
      ></div>
      <div
        class="relative z-20 text-center text-slate-50 max-w-[800px] px-8 transition-all duration-1000 ease-out pb-20 {i ===
        currentIndex
          ? 'opacity-100 translate-y-0 scale-100 delay-[300ms]'
          : 'opacity-0 translate-y-5 scale-95'}"
      >
        <h2
          class="text-sm md:text-base uppercase tracking-[3px] text-accent mb-3 md:mb-4 font-semibold"
        >
          {item.subtitle}
        </h2>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-[1.1]">
          {item.title}
        </h1>
        <button
          class="px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold uppercase tracking-wider text-xs md:text-sm transition-all bg-accent text-white bg-white/20 backdrop-blur-2xl shadow-[0_4px_14px_rgba(0,0,0,0.3)] hover:bg-accent-hover hover:-translate-y-0.5 mt-2 lg:mt-4"
          >Liên hệ tư vấn</button
        >
      </div>
    </div>
  {/each}

  <div
    class="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-8 z-30 pointer-events-none"
  >
    <button
      class="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white/20 hover:scale-105"
      aria-label="Previous slide"
      onclick={prev}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><polyline points="15 18 9 12 15 6"></polyline></svg
      >
    </button>
    <button
      class="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white/20 hover:scale-105"
      aria-label="Next slide"
      onclick={next}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><polyline points="9 18 15 12 9 6"></polyline></svg
      >
    </button>
  </div>

  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
    {#each items as _, i}
      <button
        class="w-3 h-3 rounded-full border-2 transition-all p-0 cursor-pointer {i ===
        currentIndex
          ? 'bg-white border-white scale-125'
          : 'bg-transparent border-white/50'}"
        onclick={() => goTo(i)}
        aria-label="Go to slide {i + 1}"
      ></button>
    {/each}
  </div>
</div>
