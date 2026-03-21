<script>
  import { fadeUp } from '$lib/actions/gsap';
  const stats = [
    { label: "Sản phẩm", value: "683", unit: "Căn" },
    { label: "Tiện ích nội khu", value: "20+", unit: "Mục" },
    { label: "Bàn giao", value: "Q4", unit: "2027" },
  ];
</script>

<section class="py-32 bg-bg-color">
  <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
    <div class="gsap-reveal" use:fadeUp={{ x: -40, y: 0, duration: 1 }}>
      <h2 class="text-4xl md:text-[3rem] font-extrabold tracking-tight">Tầm <span class="text-accent">Nhìn</span></h2>
      <p class="text-[1.3rem] font-medium text-text-color my-8 leading-relaxed">
        Định nghĩa lại tinh hoa của lối sống đô thị hiện đại. Diamond Boulevard tự hào mang đến một tổ hợp căn hộ sang trọng kết hợp cùng không gian sống xanh và đa tiện ích đặc quyền.
      </p>
      <p class="text-[1.1rem] text-text-secondary mb-12 leading-relaxed">
        Với thiết kế tinh xảo tập trung vào việc tối ưu không gian và ánh sáng mặt trời, tầm nhìn Panorama đắt giá bao trọn Landmark 81 và Sân Golf. Diamond Boulevard chính là biểu tượng phồn vinh mới tại trung tâm thành phố.
      </p>
      
      <div class="flex flex-wrap gap-12 pt-8 border-t border-border-color">
        {#each stats as stat}
          <div class="flex flex-col">
            <span class="text-5xl font-extrabold text-accent leading-none tracking-tight">{stat.value}</span>
            <span class="text-[1.1rem] font-bold text-text-color mt-1">{stat.unit}</span>
            <span class="text-sm text-text-secondary uppercase tracking-[1px] mt-2">{stat.label}</span>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="relative w-full h-full min-h-[400px] lg:min-h-[600px] gsap-reveal" use:fadeUp={{ x: 40, y: 0, duration: 1, delay: 0.2 }}>
      <div class="absolute inset-0 rounded-[1.5rem] bg-gradient-to-tr from-bg-secondary to-blue-600/10 shadow-[inner_0_0_50px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 [background-image:repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.02)_10px,rgba(0,0,0,0.02)_20px)]"></div>
        <div class="relative z-10 bg-white/70 dark:bg-slate-900/75 backdrop-blur-md border border-white/20 dark:border-white/5 py-8 px-12 rounded-2xl flex flex-col items-center gap-6 shadow-[0_4px_30px_rgba(0,0,0,0.05)] cursor-pointer transition-transform duration-300 hover:scale-105">
          <div class="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_10px_25px_var(--accent-light)]">
            <svg viewBox="0 0 24 24" fill="none" class="w-8 h-8 ml-1.5">
              <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
            </svg>
          </div>
          <span class="font-semibold tracking-[1px] uppercase text-text-color">Xem Video Dự Án</span>
        </div>
      </div>
    </div>
  </div>
</section>
