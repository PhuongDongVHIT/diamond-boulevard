<script lang="ts">
  const stats = [
    { label: "Căn hộ", value: "683", unit: "Căn" },
    { label: "Chiều cao", value: "30", unit: "Tầng nổi" },
    { label: "Hầm xe", value: "02", unit: "Tầng hầm" },
    { label: "Bàn giao", value: "II/2026", unit: "Bàn giao" },
  ];

  const projectInfo = [
    {
      label: "Chủ đầu tư",
      value: "Công ty Cổ phần Tổng Công ty Tecco Miền Nam",
    },
    {
      label: "Đơn vị triển khai",
      value: "Datxanh Services - Công ty Cổ phần DXMD Việt Nam",
    },
    {
      label: "Vị trí",
      value:
        "Mặt tiền Quốc lộ 13, phường Thuận Giao và Hưng Định, thành phố Thuận An, tỉnh Bình Dương, gần AEON Mall",
    },
    {
      label: "Quy mô",
      value: "01 khối chung cư gồm 30 tầng nổi, 02 tầng hầm, 01 tầng kỹ thuật",
    },
  ];
</script>

<section class="py-12 md:py-16">
  <div
    class="max-w-8xl mx-auto px-6 md:px-8 grid grid-cols-1 gap-14 items-center"
  >
    <!-- Left Content -->
    <div>
      <div class="w-full md:grid md:grid-cols-2 gap-4 md:gap-16">
        <div>
          <h2
            class="text-3xl md:text-6xl font-extrabold tracking-tight leading-tight font-playfair italic"
          >
            Tổng Quan <br> Diamond Boulevard
          </h2>

          <div class="space-y-4 py-4">
            {#each projectInfo as item}
              <div class="border-b  pb-4">
                <p
                  class="text-xs md:text-xs uppercase tracking-[1px] text-text-secondary mb-1"
                >
                  {item.label}
                </p>
                <p
                  class="text-base md:text-base font-medium  leading-relaxed"
                >
                  {item.value}
                </p>
              </div>
            {/each}
          </div>
        </div>

        <p
          class="text-base md:text-4xl  max-w-2xl text-justify"
        >
          Diamond Boulevard là dự án căn hộ cao tầng nổi bật tại cửa ngõ phía
          Đông TP.HCM, sở hữu vị trí chiến lược ngay mặt tiền Quốc lộ 13 — tuyến
          giao thông huyết mạch kết nối trực tiếp Bình Dương và trung tâm thành
          phố.
        </p>
      </div>
      <!-- Stats -->
    </div>

    <!-- Right Image -->
    <div
      class="relative w-full h-full flex items-center justify-center min-h-[400px] lg:min-h-[600px]"
    >
      <div class="flex flex-col items-center">
        <div class="flex flex-wrap gap-10 md:gap-20 py-6 md:py-10 text-center">
          {#each stats as stat}
            <div class="flex flex-col border-l-2 px-4 md:px-10">
              <span
                class="text-3xl md:text-6xl font-extrabold text-white leading-none tracking-tight"
              >
                {stat.value}
              </span>
              <span
                class="text-xs md:text-sm lg:text-lg font-bold  mt-1"
              >
                {stat.unit}
              </span>
            </div>
          {/each}
        </div>
        <img
          src="/images/tecco-tan-an-can-ho-diamond-boulevard.webp"
          alt="Tổng quan dự án Diamond Boulevard"
          class="w-full h-auto rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>
