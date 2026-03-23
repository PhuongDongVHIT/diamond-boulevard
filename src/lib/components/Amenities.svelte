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

<section class="relative py-12 md:py-16 bg-bg-secondary overflow-hidden">
    <div class="pb-4 md:pb-8">
      <h2
        class="text-3xl sm:text-4xl md:text-6xl font-extrabold italic tracking-tight leading-tight font-playfair text-center"
      >
        Tiện ích <br /> Diamond Boulevard
      </h2>
    </div>
  <div class="relative z-10 max-w-8xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
    <div
      class="relative w-full h-full flex flex-col justify-center lg:min-h-[600px] col-span-2"
    >
      <img
        src="/images/khong-chu-mat-bang-tang-tien-ich-diamond-boulevard.webp"
        alt="Mặt Bằng Tầng 02 - Diamond Boulevard"
        class="w-full h-auto rounded-2xl"
      />
    </div>

    <div
      class="grid grid-cols-2 gap-8"
    >
      {#each amenities as amenity, i}
        <div
          class="flex items-center gap-2 transition-all duration-300 px-2 group cursor-pointer border-b"
        >
          <span
            class="text-xl md:text-2xl font-black text-white opacity-30 group-hover:opacity-60 transition-opacity"
            >{(i + 1).toString().padStart(2, "0")}</span
          >
          <span class="font-bold text-sm md:text-base  tracking-tight leading-tight"
            >{amenity}</span
          >
        </div>
      {/each}
    </div>
  </div>
</section>
