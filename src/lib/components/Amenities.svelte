<script lang="ts">
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';
  let { showCta = false } = $props();
  const amenities = [
    "Cổng chào", "Chốt an ninh", "Đường xuống hầm", "Đường nội bộ",
    "Tiểu cảnh sân vườn", "Lối xuống hầm giữ xe", "Đài phun nước", "Sảnh đón",
    "Nhà trẻ", "Khu thương mại", "Ban quản lý", "Lối lên",
    "Khu BBQ", "Hồ bơi trẻ em", "Hồ bơi", "Pool Lounge",
    "Phòng thay đồ", "Đường dạo bộ", "Công viên nội khu", "Khu thể thao ngoài trời"
  ];
</script>

<section class="relative py-32 bg-bg-secondary overflow-hidden">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-accent-light blur-[60px] opacity-60 pointer-events-none z-0"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center max-w-[650px] mx-auto mb-20 gsap-reveal" use:fadeUp={{ y: 30, duration: 1 }}>
      <h2 class="text-4xl md:text-[3rem] font-extrabold tracking-tight">Tiện Ích <span class="text-accent">Đỉnh Cao</span></h2>
      <p class="text-[1.15rem] text-text-secondary mt-4 leading-relaxed">Trải nghiệm phong cách sống nghỉ dưỡng mỗi ngày với các tiện ích đẳng cấp thế giới phục vụ mọi nhu cầu của bạn.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16" use:staggerFadeUp={{ y: 20, stagger: 0.03 }}>
      {#each amenities as amenity, i}
        <div class="flex items-center gap-4 bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 p-4 rounded-xl border border-border-color shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-md hover:border-accent/40 gsap-reveal group">
          <span class="text-2xl font-black text-accent opacity-30 group-hover:opacity-60 transition-opacity">{(i + 1).toString().padStart(2, '0')}</span>
          <span class="font-bold text-text-color tracking-tight leading-tight">{amenity}</span>
        </div>
      {/each}
    </div>

    {#if showCta}
      <div class="flex justify-center mt-12 gsap-reveal" use:fadeUp={{ y: 20 }}>
        <a href="/tien-ich" class="inline-flex items-center justify-center px-10 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/40 hover:-translate-y-1">
          Khám Phá Chi Tiết Tiện Ích
        </a>
      </div>
    {/if}
  </div>
</section>
