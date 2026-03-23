<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import gsap from "gsap";

  const images = [
    "/images/ban-cong-can-ho-diamond-boulevard.webp",
    "/images/noi-khu-can-ho-diamond-boulevard.webp",
    "/images/noi-khu-can-ho-diamond-boulevard-1.webp",
    "/images/noi-khu-can-ho-diamond-boulevard-tan-an.webp",
    "/images/tecco-tan-an-can-ho-diamond-boulevard.webp",
    "/images/can-ho-diamond-boulevard-goc-nhin-3.webp",
    "/images/can-ho-diamond-boulevard-goc-nhin-4.webp",
    "/images/chan-de-can-ho-diamond-boulevard.webp",
    "/images/can-ho-diamond-boulevard-goc-nhin-1.webp"
  ];

  let imageRefs: HTMLImageElement[] = [];

  function randomBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  onMount(() => {
    if (!browser) return;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2
    });

    tl.set(imageRefs, {
      opacity: 0,
      scale: 0.7
    });

    imageRefs.forEach((img, index) => {
      tl.to(
        img,
        {
          opacity: 1,
          scale: randomBetween(0.9, 1.1),
          x: randomBetween(-500, 500),
          y: randomBetween(-250, 250),
          rotate: randomBetween(-20, 20),
          duration: 1.4,
          ease: "power3.out"
        },
        index * 0.4
      );
    });

    tl.to(imageRefs, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.1
    });
  });
</script>

<div class="relative w-full h-[800px] overflow-hidden flex items-center justify-center">
  {#each images as image, index}
    <img
      bind:this={imageRefs[index]}
      src={image}
      alt=""
      class="absolute w-[280px] md:w-[400px] rounded-3xl shadow-2xl object-cover"
    />
  {/each}
</div>