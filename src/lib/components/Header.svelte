<script lang="ts">
  import { fade } from 'svelte/transition';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      isScrolled = window.scrollY > 40;
    });
  }

  function formatMenuText(text: string) {
    return text;
  }
</script>

<header class="fixed top-0 left-0 w-full z-[1000] px-4 md:px-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] {isScrolled ? 'top-4 md:top-6' : 'top-4'}">
  <!-- Dynamic Island / Floating Pill Container -->
  <div class="mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] {isScrolled ? 'max-w-4xl rounded-full glass' : 'max-w-7xl rounded-[2rem] bg-transparent'} relative flex justify-between items-center py-4 px-6 md:px-8">
    
    <!-- Logo -->
    <a href="/" class="flex flex-col items-start gap-0 transition-transform duration-300 hover:opacity-80">
      <img src="/logo.png" class="w-12 h-full" alt="" srcset="">
    </a>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center gap-10">
      <a href="/tong-quan" class="text-[0.9rem] font-medium text-text-color/80 hover:text-text-color transition-colors tracking-wide">Tổng Quan</a>
      <a href="/mat-bang" class="text-[0.9rem] font-medium text-text-color/80 hover:text-text-color transition-colors tracking-wide">Mặt Bằng</a>
      <a href="/tien-ich" class="text-[0.9rem] font-medium text-text-color/80 hover:text-text-color transition-colors tracking-wide">Tiện Ích</a>
      <a href="/tin-tuc" class="text-[0.9rem] font-medium text-text-color/80 hover:text-text-color transition-colors tracking-wide">Tin tức</a>
      <a href="/thu-vien" class="text-[0.9rem] font-medium text-text-color/80 hover:text-text-color transition-colors tracking-wide">Thư viện</a>
      <a href="/lien-he" class="text-[0.9rem] font-medium text-text-color/80 hover:text-text-color transition-colors tracking-wide">Liên Hệ</a>
    </nav>

    <!-- Call to Action -->
    <div class="hidden md:block">
      <a href="lien-he" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-[0.85rem] tracking-wide transition-all duration-300 bg-text-color text-bg-color hover:scale-105 shadow-[0_4px_14px_rgba(0,0,0,0.1)]">
        Đăng ký tư vấn
      </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-[1001]" onclick={() => isMobileMenuOpen = !isMobileMenuOpen} aria-label="Toggle Menu">
      <span class="w-6 h-0.5 bg-text-color transition-all duration-300 ease-out {isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}"></span>
      <span class="w-6 h-0.5 bg-text-color transition-all duration-300 ease-out {isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
      <span class="w-6 h-0.5 bg-text-color transition-all duration-300 ease-out {isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}"></span>
    </button>
  </div>
</header>

<!-- Mobile Menu Overlay -->
{#if isMobileMenuOpen}
  <div class="fixed inset-0 z-[999] glass" transition:fade={{duration: 300}}>
    <div class="flex flex-col items-center justify-center h-full w-full gap-8">
      <a href="/" class="text-3xl font-bold tracking-tight text-text-color" onclick={() => isMobileMenuOpen = false}>Tổng Quan</a>
      <a href="/tong-quan" class="text-3xl font-bold tracking-tight text-accent" onclick={() => isMobileMenuOpen = false}>Khám Phá</a>
      <a href="/mat-bang" class="text-3xl font-bold tracking-tight text-text-color" onclick={() => isMobileMenuOpen = false}>Mặt Bằng</a>
      <a href="/tien-ich" class="text-3xl font-bold tracking-tight text-text-color" onclick={() => isMobileMenuOpen = false}>Tiện Ích</a>
      <a href="/lien-he" class="text-3xl font-bold tracking-tight text-text-color" onclick={() => isMobileMenuOpen = false}>Liên Hệ</a>
      <a href="#" class="mt-8 px-8 py-4 rounded-full font-bold text-lg bg-text-color text-bg-color" onclick={() => isMobileMenuOpen = false}>
        Đăng ký tư vấn
      </a>
    </div>
  </div>
{/if}
