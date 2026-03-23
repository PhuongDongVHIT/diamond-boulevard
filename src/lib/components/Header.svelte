<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);

  const menuItems = [
    { label: 'Tổng Quan', href: '/tong-quan' },
    { label: 'Mặt Bằng', href: '/mat-bang' },
    { label: 'Tiện Ích', href: '/tien-ich' },
    { label: 'Tin tức', href: '/tin-tuc' },
    { label: 'Thư viện', href: '/thu-vien' },
    { label: 'Liên Hệ', href: '/lien-he' }
  ];

  function handleScroll() {
    isScrolled = window.scrollY > 40;
  }
</script>

<svelte:window on:scroll={handleScroll} />
<header
  class="fixed top-0 left-0 w-full z-[1000] px-4 md:px-8 transition-all duration-700 font-playfair
  {isScrolled ? 'top-4 md:top-6' : 'top-4'}"
>
  <div
    class="mx-auto transition-all duration-700
    {isScrolled
      ? 'max-w-4xl rounded-full glass shadow-xl py-2'
      : 'max-w-8xl rounded-[2rem] bg-transparent'}
    relative flex justify-between items-center py-2 px-6 md:px-8"
  >
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3">
      <img src="/logo.png" class="w-8 md:w-10" alt="logo" />
    </a>

    <!-- Desktop -->
    <nav class="hidden md:flex items-center gap-8">
      {#each menuItems as item}
        <a
          href={item.href}
          class="text-sm md:text-base font-medium tracking-wide hover:text-orange-500 transition"
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <!-- CTA -->
    <div class="hidden md:block">
      <a
        href="/lien-he"
        class="px-5 py-2 rounded-full bg-text-color text-bg-color font-semibold text-sm hover:scale-105 transition"
      >
        Đăng ký tư vấn
      </a>
    </div>

    <!-- Mobile Toggle -->
    <button
      class="md:hidden w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center"
      onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
      aria-label="Toggle menu"
    >
      <div class="relative w-6 h-5">
        <span class="absolute left-0 top-0 w-full h-0.5 bg-black transition {isMobileMenuOpen ? 'rotate-45 top-2' : ''}"></span>
        <span class="absolute left-0 top-2 w-full h-0.5 bg-black transition {isMobileMenuOpen ? 'opacity-0' : ''}"></span>
        <span class="absolute left-0 top-4 w-full h-0.5 bg-black transition {isMobileMenuOpen ? '-rotate-45 top-2' : ''}"></span>
      </div>
    </button>
  </div>
</header>

{#if isMobileMenuOpen}
  <div
    class="fixed inset-0 z-[999] bg-black/70 backdrop-blur-xl"
    transition:fade
  >
    <div
      class="flex flex-col justify-center items-center h-full gap-8"
      transition:fly={{ y: -20, duration: 400 }}
    >
      {#each menuItems as item}
        <a
          href={item.href}
          class="text-3xl font-semibold text-white hover:text-orange-400 transition"
          onclick={() => (isMobileMenuOpen = false)}
        >
          {item.label}
        </a>
      {/each}

      <a
        href="/lien-he"
        class="mt-6 px-8 py-4 rounded-full bg-white text-black font-bold"
        onclick={() => (isMobileMenuOpen = false)}
      >
        Đăng ký tư vấn
      </a>
    </div>
  </div>
{/if}