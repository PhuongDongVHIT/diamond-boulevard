<script lang="ts">
  import AmenitiesList from '$lib/components/Amenities.svelte';
  import { fadeUp } from '$lib/actions/gsap';

  function handleImageError(e: Event) {
    const target = e.currentTarget as HTMLElement;
    if (target) {
      target.style.display = 'none';
      if (target.nextElementSibling) {
        (target.nextElementSibling as HTMLElement).style.display = 'flex';
      }
    }
  }

  const title = "Tiện Ích Nội Khu Diamond Boulevard | Sơ Đồ & Chi Tiết 30+ Hạng Mục";
  const desc = "Khám phá bản đồ 30+ tiện ích nội khu đẳng cấp tại Diamond Boulevard: Hồ bơi, Công viên, Khu BBQ, Rạp chiếu phim, Phòng Gym & Yoga tối ưu trải nghiệm sống.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="article" />
</svelte:head>

<!-- Page Header Overlay -->
<section class="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10"></div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="/images/quote-bg.jpg" alt="Background" class="w-full h-full object-cover blur-sm opacity-50" />
  </div>
  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-20 text-center">
    <nav class="flex justify-center text-xs md:text-sm font-medium text-amber-300 mb-6 uppercase tracking-wider">
      <a href="/" class="hover:text-white transition-colors">Trang Chủ</a>
      <span class="mx-2 opacity-50">/</span>
      <span class="text-white">Tiện Ích</span>
    </nav>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-6 drop-shadow-lg leading-tight">
      Hệ Sinh Thái <span class="text-accent underline decoration-4 underline-offset-8">Tiện Ích</span>
    </h1>
    <p class="text-base md:text-[1.15rem] lg:text-[1.25rem] text-slate-300 max-w-2xl mx-auto leading-relaxed">
      Sở hữu chuỗi 30+ tiện ích nội khu chuẩn resort ngay tại tầng trệt và khối đế, Diamond Boulevard mang đến trải nghiệm sống hoàn mỹ mỗi ngày.
    </p>
  </div>
</section>

<!-- Master Plan Image Section -->
<section class="py-20 bg-bg-color border-b border-border-color">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center mb-12 gsap-reveal" use:fadeUp={{ y: 30 }}>
      <h2 class="text-3xl font-extrabold text-text-color tracking-tight">Sơ Đồ Phân Bố Tiện Ích Tầng Trệt</h2>
      <p class="text-text-secondary mt-2">Được bố trí khoa học, tối ưu không gian xanh và không gian sinh hoạt cộng đồng</p>
    </div>

    <div class="bg-white dark:bg-slate-900/60 p-3 md:p-8 rounded-2xl shadow-xl border border-border-color gsap-reveal" use:fadeUp={{ y: 40, delay: 0.2 }}>
      <div class="w-full aspect-auto rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center relative min-h-[300px] md:min-h-[500px] border border-slate-200 dark:border-slate-800">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src="/images/tien-ich-tong-the.jpg" alt="Sơ đồ tiện ích tổng thể Diamond Boulevard" class="w-full h-auto object-contain drop-shadow-sm" onerror={handleImageError} />
        
        <!-- Placeholder -->
        <div class="hidden flex-col items-center justify-center p-12 text-slate-400 w-full h-full text-center">
            <svg class="w-20 h-20 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <p class="text-xl font-bold text-slate-500 mb-2">Chưa có ảnh Sơ đồ Tiện ích</p>
            <p>Vui lòng lưu ảnh mặt bằng vòng cung tiện ích với tên <br><code class="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-accent">static/images/tien-ich-tong-the.jpg</code></p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Standard Amenities List Component reused -->
<AmenitiesList />

<!-- SEO Content Block for Conversion -->
<section class="py-24 bg-bg-secondary">
  <div class="max-w-4xl mx-auto px-6 md:px-8 text-center gsap-reveal" use:fadeUp={{ y: 30 }}>
    <h2 class="text-3xl font-bold text-text-color mb-6">Sống Chuẩn Phong Cách Chuyên Gia</h2>
    <p class="text-lg text-text-secondary leading-relaxed mb-10">
      Diamond Boulevard không chỉ là nơi để ở, mà là không gian sống xanh với hàng loạt tiện ích chăm sóc sức khoẻ toàn diện: <strong class="text-text-color">Hồ bơi vô cực rộng lớn</strong>, khu <strong class="text-text-color">Pool Lounge</strong> sang trọng, công viên dạo bộ rợp bóng mát, cùng tổ hợp <strong class="text-text-color">Khu thương mại (TMDV)</strong> nhộn nhịp. Một bước chạm đến mọi tiện nghi xa xỉ.
    </p>
    <a href="/#contact" class="inline-flex items-center justify-center px-10 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/40 hover:-translate-y-1">
      Đăng Ký Tham Quan Thực Tế
    </a>
  </div>
</section>
