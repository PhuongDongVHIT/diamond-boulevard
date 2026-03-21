<script lang="ts">
  import { onMount } from 'svelte';
  import { fadeUp } from '$lib/actions/gsap';

  let { items = [
    {
      id: 1,
      title: "Biệt thự Signature",
      subtitle: "Sang trọng & Đẳng cấp Vượt trội",
      imageUrl: "/images/hero.png"
    },
    {
      id: 2,
      title: "Penthouse Hướng Biển",
      subtitle: "Trải nghiệm Đường chân trời",
      imageUrl: "/images/property_1.png"
    },
    {
      id: 3,
      title: "Dinh thự Kính Hiện đại",
      subtitle: "Tuyệt tác Kiến trúc",
      imageUrl: "/images/property_2.png"
    },
    {
      id: 4,
      title: "Khu Bất Động Sản Riêng Tư",
      subtitle: "Độc quyền Tối thượng",
      imageUrl: "/images/hero.png"
    }
  ], autoplay = true, interval = 5000 } = $props();

  let currentIndex = $state(0);
  let timer: any;
  let rotation = $state(0);
  let containerWidth = $state(1200);

  let theta = $derived(360 / items.length);
  let tz = $derived(Math.round((containerWidth / 2) / Math.tan(Math.PI / items.length)));

  function next() {
    currentIndex = (currentIndex + 1) % items.length;
    rotation -= theta;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    rotation += theta;
  }

  function goTo(index: number) {
    let diff = index - currentIndex;
    if (diff === 0) return;
    
    let half = items.length / 2;
    if (diff > half) diff -= items.length;
    if (diff < -half) diff += items.length;
    
    rotation -= diff * theta;
    currentIndex = index;
  }

  onMount(() => {
    containerWidth = window.innerWidth;
    const updateWidth = () => containerWidth = window.innerWidth;
    window.addEventListener('resize', updateWidth);

    if (autoplay) {
      timer = setInterval(next, interval);
    }
    return () => {
      window.removeEventListener('resize', updateWidth);
      if (timer) clearInterval(timer);
    };
  });
</script>

<div class="relative w-screen h-screen overflow-hidden bg-bg-color gsap-reveal" use:fadeUp={{ y: 50, duration: 1 }}>
  <div class="w-screen h-screen relative [transform-style:preserve-3d]" style="perspective: {tz * 2 + 1000}px;">
    <div class="absolute w-full h-full [transform-style:preserve-3d] transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]" style="transform: translateZ({-tz}px) rotateY({rotation}deg)">
      {#each items as item, i}
        <div 
          class="absolute inset-0 w-screen h-screen bg-cover bg-center flex items-center justify-center [backface-visibility:hidden] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" 
          style="transform: rotateY({i * theta}deg) translateZ({tz}px); background-image: url('{item.imageUrl}')"
        >
          <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-[#0f172a]/20"></div>
          <div class="relative z-20 text-center text-slate-50 max-w-[800px] px-8 transition-all duration-600 ease-out {i === currentIndex ? 'opacity-100 translate-y-0 scale-100 delay-[600ms]' : 'opacity-0 translate-y-5 scale-90'}">
            <h2 class="text-xl md:text-[1.25rem] uppercase tracking-[3px] text-accent mb-4 font-semibold">{item.subtitle}</h2>
            <h1 class="text-4xl md:text-[4rem] font-extrabold mb-8 leading-[1.1]">{item.title}</h1>
            <button class="px-10 py-4 rounded-full font-semibold uppercase tracking-wider text-[1.1rem] transition-all bg-accent text-white shadow-[0_4px_14px_rgba(239,101,34,0.3)] hover:bg-accent-hover hover:-translate-y-0.5 mt-4">Khám phá Bất động sản</button>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-8 z-30 pointer-events-none">
    <button class="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white/20 hover:scale-105" aria-label="Previous slide" onclick={prev}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <button class="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white/20 hover:scale-105" aria-label="Next slide" onclick={next}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
  </div>

  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
    {#each items as _, i}
      <button 
        class="w-3 h-3 rounded-full border-2 transition-all p-0 cursor-pointer {i === currentIndex ? 'bg-white border-white scale-125' : 'bg-transparent border-white/50'}" 
        onclick={() => goTo(i)}
        aria-label="Go to slide {i + 1}"
      ></button>
    {/each}
  </div>
</div>
