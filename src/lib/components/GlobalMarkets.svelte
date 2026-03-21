<script>
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';
  const markets = [
    {
      id: 'ny',
      name: 'New York',
      description: 'Penthouse với tầm nhìn công viên trung tâm và nhà phố lịch sử.',
      colorStart: '#0f172a',
      colorEnd: '#1e293b'
    },
    {
      id: 'la',
      name: 'Los Angeles',
      description: 'Dinh thự kính hiện đại và các khu phức hợp của giới siêu sao.',
      colorStart: '#1e3a8a',
      colorEnd: '#172554'
    },
    {
      id: 'miami',
      name: 'Miami',
      description: 'Biệt thự hướng biển và tháp căn hộ siêu sang.',
      colorStart: '#064e3b',
      colorEnd: '#022c22'
    },
    {
      id: 'dubai',
      name: 'Dubai',
      description: 'Tuyệt tác kiến trúc và khu nghỉ dưỡng biển đảo độc quyền.',
      colorStart: '#451a03',
      colorEnd: '#290f02'
    }
  ];
</script>

<section class="py-32 bg-bg-color">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center max-w-[700px] mx-auto mb-20 gsap-reveal" use:fadeUp={{ y: 30, duration: 1 }}>
      <h2 class="text-4xl md:text-[3rem] font-extrabold tracking-tight leading-tight">Tầm Vóc Quốc Tế, <br/><span class="text-accent">Chuyên Môn Địa Phương</span></h2>
      <p class="text-[1.15rem] text-text-secondary mt-4 leading-relaxed">Chúng tôi hoạt động tại những thị trường bất động sản độc quyền nhất thế giới, cung cấp quyền tiếp cận liền mạch với các bất động sản tinh hoa toàn cầu.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" use:staggerFadeUp={{ y: 40, stagger: 0.1 }}>
      {#each markets as market}
        <a href={`/markets/${market.id}`} class="relative h-[380px] rounded-[1.5rem] overflow-hidden no-underline text-white flex flex-col justify-end p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-border-color bg-text-color group gsap-reveal" style="--gradient-start: {market.colorStart}; --gradient-end: {market.colorEnd};">
          <div class="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-85 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 z-10"></div>
          <div class="absolute -inset-[50%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)] z-20 transition-transform duration-[800ms] ease-in-out scale-80 -translate-x-[10%] -translate-y-[10%] group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none"></div>
          <div class="relative z-30 transition-transform duration-300 group-hover:-translate-y-1">
            <h3 class="text-[2rem] font-bold mb-2 text-white">{market.name}</h3>
            <p class="text-white/80 text-[1.05rem] mb-6 leading-relaxed line-clamp-2">{market.description}</p>
            <div class="inline-flex items-center gap-2 font-semibold text-[0.95rem] uppercase tracking-[1px] text-white">Khám phá Thị trường <span class="transition-transform duration-150 group-hover:translate-x-1">→</span></div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
