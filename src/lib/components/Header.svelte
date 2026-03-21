<script>
  let isScrolled = $state(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      isScrolled = window.scrollY > 20;
    });
  }
</script>

<header class="fixed top-0 left-0 w-full z-[1000] transition-all duration-300 py-6 border-b border-transparent {isScrolled ? '!py-4 backdrop-blur-md bg-bg-color/80 border-border-color shadow-sm dark:bg-bg-color/90' : ''}">
  <div class="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
    <a href="/" class="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-text-color">
      <span class="text-accent">Diamond</span>
      <span>Boulevard</span>
    </a>
    <nav class="hidden md:flex gap-8">
      <a href="/" class="font-medium text-[0.95rem] text-text-color relative group">Trang chủ
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="/properties" class="font-medium text-[0.95rem] text-text-color relative group">Bất động sản
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="#about" class="font-medium text-[0.95rem] text-text-color relative group">Giới thiệu
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a href="#contact" class="font-medium text-[0.95rem] text-text-color relative group">Liên hệ
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>
    </nav>
    <a href="/properties" class="hidden md:inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-150 bg-accent text-white shadow-[0_4px_14px_rgba(239,101,34,0.3)] hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(239,101,34,0.4)]">Xem danh sách</a>
  </div>
</header>
