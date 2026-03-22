<script lang="ts">

  const stats = [
    { label: 'Căn hộ', value: '683', unit: 'Căn' },
    { label: 'Chiều cao', value: '30', unit: 'Tầng nổi' },
    { label: 'Hầm xe', value: '02', unit: 'Tầng hầm' }
  ];

  const projectInfo = [
    {
      label: 'Chủ đầu tư',
      value: 'Công ty Cổ phần Tổng Công ty Tecco Miền Nam'
    },
    {
      label: 'Đơn vị triển khai',
      value: 'Datxanh Services - Công ty Cổ phần DXMD Việt Nam'
    },
    {
      label: 'Vị trí',
      value:
        'Mặt tiền Quốc lộ 13, phường Thuận Giao và Hưng Định, thành phố Thuận An, tỉnh Bình Dương, gần AEON Mall'
    },
    {
      label: 'Quy mô',
      value:
        '01 khối chung cư gồm 30 tầng nổi, 02 tầng hầm, 01 tầng kỹ thuật'
    }
  ];
</script>

<section class="py-32 bg-bg-color">
  <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    <!-- Left Content -->
    <div>
      <h2 class="text-4xl md:text-[3.2rem] font-extrabold tracking-tight leading-tight">
        Tổng Quan <span class="text-accent">Diamond Boulevard</span>
      </h2>

      <p class="text-[1.15rem] text-text-color my-8 leading-relaxed">
        Diamond Boulevard là dự án căn hộ cao tầng nổi bật tại cửa ngõ phía Đông
        TP.HCM, sở hữu vị trí chiến lược ngay mặt tiền Quốc lộ 13 — tuyến giao thông
        huyết mạch kết nối trực tiếp Bình Dương và trung tâm thành phố.
      </p>

      <div class="space-y-5">
        {#each projectInfo as item}
          <div class="border-b border-border-color pb-4">
            <p class="text-sm uppercase tracking-[1px] text-text-secondary mb-1">
              {item.label}
            </p>
            <p class="text-[1.05rem] font-medium text-text-color leading-relaxed">
              {item.value}
            </p>
          </div>
        {/each}
      </div>

      <!-- Stats -->

    </div>

    <!-- Right Image -->
    <div
      class="relative w-full h-full flex items-center justify-center min-h-[400px] lg:min-h-[600px]"
    >
      <div class="flex flex-col items-center">
            <div class="flex flex-wrap gap-10 pt-10 pb-2 text-center">
        {#each stats as stat}
          <div class="flex flex-col">
            <span class="text-5xl font-extrabold text-accent leading-none tracking-tight">
              {stat.value}
            </span>
            <span class="text-[1rem] font-bold text-text-color mt-1">
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