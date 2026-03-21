<script>
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';
  const locations = [
    { name: "Sân Golf Sông Bé", distance: "2 phút", icon: "⛳" },
    { name: "AEON Mall Bình Dương", distance: "5 phút", icon: "🛍️" },
    { name: "Trung Tâm Thủ Dầu Một", distance: "10 phút", icon: "🏙️" },
    { name: "Landmark 81 (TP.HCM)", distance: "20 phút", icon: "🌆" },
  ];

  function handleImageError(e) {
    const target = e.currentTarget;
    if (target) {
      target.style.display = 'none';
      if (target.nextElementSibling) {
        target.nextElementSibling.style.display = 'flex';
      }
    }
  }
</script>

<section class="py-32 bg-bg-color relative overflow-hidden">
  <div class="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,var(--accent-light)_0%,transparent_70%)] rounded-full z-0 opacity-40 pointer-events-none"></div>
  
  <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center relative z-10">
    <div class="gsap-reveal" use:fadeUp={{ x: -40, y: 0 }}>
      <h2 class="text-4xl md:text-[3rem] font-extrabold tracking-tight leading-tight">Mặt Tiền <br><span class="text-accent">Quốc Lộ 13</span></h2>
      <p class="text-[1.15rem] text-text-secondary my-8 leading-relaxed">
        Tọa lạc tại mặt tiền Đại lộ Bình Dương - tuyến đường huyết mạch của khu vực, Diamond Boulevard mang thiết kế hiện đại với hệ sinh thái giao thương đẳng cấp và tầm nhìn Panorama đắt giá bậc nhất hướng về Sân Golf và Landmark 81.
      </p>
      
      <div class="flex flex-col gap-6 pt-4" use:staggerFadeUp={{ x: -30, y: 0, stagger: 0.1 }}>
        {#each locations as loc}
          <div class="flex items-center gap-6 py-4 border-b border-border-color gsap-reveal">
            <span class="text-2xl bg-bg-secondary w-[50px] h-[50px] rounded-full flex items-center justify-center border border-border-color shadow-sm">{loc.icon}</span>
            <span class="text-[1.1rem] font-semibold text-text-color min-w-[200px]">{loc.name}</span>
            <div class="flex-grow flex justify-end">
              <span class="bg-accent-light text-accent border border-accent/20 shadow-[0_2px_10px_rgba(239,101,34,0.1)] px-4 py-1.5 rounded-full font-bold text-[0.9rem] tracking-[0.5px] whitespace-nowrap">{loc.distance}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="h-[450px] lg:h-[600px] gsap-reveal relative mt-8 lg:mt-0" use:fadeUp={{ x: 40, y: 0, delay: 0.2 }}>
      <div class="w-full h-full rounded-[1.5rem] relative overflow-hidden p-3 md:p-4 border border-border-color bg-white/70 dark:bg-slate-900/75 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
        <div class="w-full h-full rounded-xl bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center border border-border-color">
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img src="/images/location.jpg" alt="Vị trí Diamond Boulevard" class="w-full h-full object-cover opacity-80" onerror={handleImageError} />
          <!-- Placeholder map graphic if image not found -->
          <div class="hidden flex-col items-center justify-center text-text-secondary w-full h-full bg-[radial-gradient(circle_at_center,var(--border-color)_1px,transparent_1px)] bg-[size:20px_20px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            <p class="text-lg">Tải ảnh bản đồ vị trí</p>
            <code class="mt-2 text-sm bg-bg-color px-2 py-1 rounded">static/images/location.jpg</code>
          </div>
        </div>
        
        <div class="absolute bg-white dark:bg-slate-800 border-[3px] border-accent w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-xl text-3xl font-black text-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div class="absolute inset-0 bg-accent rounded-full -z-10 opacity-40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          D
        </div>
      </div>
    </div>
  </div>
</section>
