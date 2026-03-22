<script lang="ts">
  import AmenitiesList from "$lib/components/Amenities.svelte";

  function handleImageError(e: Event) {
    const target = e.currentTarget as HTMLElement;
    if (target) {
      target.style.display = "none";
      if (target.nextElementSibling) {
        (target.nextElementSibling as HTMLElement).style.display = "flex";
      }
    }
  }

  const title =
    "Tiện Ích Nội Khu Diamond Boulevard | Sơ Đồ & Chi Tiết 30+ Hạng Mục";
  const desc =
    "Khám phá bản đồ 30+ tiện ích nội khu đẳng cấp tại Diamond Boulevard: Hồ bơi, Công viên, Khu BBQ, Rạp chiếu phim, Phòng Gym & Yoga tối ưu trải nghiệm sống.";
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
  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-20 text-center">
    <nav
      class="flex justify-center text-xs md:text-sm font-medium text-amber-300 mb-6 uppercase tracking-wider"
    >
      <a href="/" class="hover:text-white transition-colors">Trang Chủ</a>
      <span class="mx-2 opacity-50">/</span>
      <span class="text-white">Tiện Ích</span>
    </nav>
    <h1
      class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-6 drop-shadow-lg leading-tight"
    >
      <span class="text-accent underline decoration-4 underline-offset-8"
        >Tiện Ích</span
      >
    </h1>
    <p
      class="text-base md:text-[1.15rem] lg:text-[1.25rem] text-slate-300 max-w-2xl mx-auto leading-relaxed"
    >
      Sở hữu chuỗi 30+ tiện ích nội khu chuẩn resort ngay tại tầng trệt và khối
      đế, Diamond Boulevard mang đến trải nghiệm sống hoàn mỹ mỗi ngày.
    </p>
  </div>
</section>
<!-- Standard Amenities List Component reused -->
<AmenitiesList />
