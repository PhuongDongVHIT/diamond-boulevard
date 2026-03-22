<script lang="ts">
  let { showCta = false } = $props();
  const amenities = [
    "Cổng chào",
    "Chốt an ninh",
    "Đường xuống hầm",
    "Đường nội bộ",
    "Tiểu cảnh sân vườn",
    "Lối xuống hầm giữ xe",
    "Đài phun nước",
    "Sảnh đón",
    "Nhà trẻ",
    "Khu thương mại",
    "Ban quản lý",
    "Lối lên",
    "Khu BBQ",
    "Hồ bơi trẻ em",
    "Hồ bơi",
    "Pool Lounge",
    "Phòng thay đồ",
    "Đường dạo bộ",
    "Công viên nội khu",
    "Khu thể thao ngoài trời",
  ];
</script>

<section class="relative py-16 md:py-24 lg:py-32 bg-bg-secondary overflow-hidden">
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-accent-light blur-[60px] opacity-60 pointer-events-none z-0"
  ></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
    <div
      class="relative w-full h-full flex flex-col justify-center min-h-[400px] lg:min-h-[600px]"
    >
      <img
        src="/images/khong-chu-mat-bang-tang-tien-ich-diamond-boulevard.webp"
        alt="Mặt Bằng Tầng 02 - Diamond Boulevard"
        class="w-full h-auto rounded-2xl"
      />
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
    >
      {#each amenities as amenity, i}
        <div
          class="flex items-center gap-2 md:gap-4 bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 p-3 md:p-4 rounded-xl border border-border-color shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-md hover:border-accent/40 group cursor-pointer"
        >
          <span
            class="text-xl md:text-2xl font-black text-white opacity-30 group-hover:opacity-60 transition-opacity"
            >{(i + 1).toString().padStart(2, "0")}</span
          >
          <span class="font-bold text-sm md:text-base text-text-color tracking-tight leading-tight"
            >{amenity}</span
          >
        </div>
      {/each}
    </div>
  </div>
</section>
