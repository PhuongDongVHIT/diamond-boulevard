<script>
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';

  function handleImageError(e) {
    const target = e.currentTarget;
    if (target) {
      target.style.display = 'none';
      if (target.nextElementSibling) {
        target.nextElementSibling.style.display = 'flex';
      }
    }
  }

  function handleBgError(e) {
    const target = e.currentTarget;
    if (target) target.style.display = 'none';
  }
</script>

<section class="py-32 bg-bg-secondary relative overflow-hidden">
  <!-- Glowing orbs background -->
  <div class="absolute inset-0 bg-[url('/images/legal-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-20 z-0" onerror={handleBgError}></div>
  <div class="absolute top-1/4 -left-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center relative z-10">
    <div class="gsap-reveal" use:fadeUp={{ x: -40, y: 0, duration: 1 }}>
      <h2 class="text-5xl md:text-[4rem] font-extrabold tracking-tight uppercase leading-[1.1] text-text-color mb-8">
        Pháp Lý<br>
        <span class="text-accent font-signature text-6xl md:text-[5rem] capitalize leading-[0.5] block mt-4">Hoàn Thiện</span>
      </h2>
      
      <p class="text-[1.25rem] md:text-[1.4rem] text-text-secondary leading-[1.8] text-justify font-medium mt-12 bg-white/40 dark:bg-slate-900/40 p-6 md:p-8 rounded-2xl border-l-[4px] border-accent shadow-sm backdrop-blur-sm">
        Dự án đã được cấp phép huy động vốn theo hình thức bán nhà ở hình thành trong tương lai theo quyết định số <strong class="text-text-color">2443/SXD-QLN</strong>, chính thức cất nóc vào <strong class="text-text-color">20/6/2025</strong>, dự kiến bàn giao vào <strong class="text-accent text-[1.4rem]">Quý II/2026</strong>.
      </p>
    </div>

    <div class="relative h-[500px] md:h-[600px] flex items-center justify-center gsap-reveal perspective-[1000px]" use:fadeUp={{ x: 40, y: 0, duration: 1, delay: 0.2 }}>
      <!-- Document Pages -->
      <div class="relative w-full h-full flex items-center justify-center gap-4 md:gap-8">
        
        <!-- Document 1 -->
        <div class="w-[45%] aspect-[1/1.4] bg-white rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200 transform transition-transform duration-500 hover:-translate-y-4 hover:rotate-2 hover:scale-105 overflow-hidden z-10">
           <!-- svelte-ignore a11y_img_redundant_alt -->
           <img src="/images/legal-doc-1.jpg" alt="Văn bản pháp lý 1" class="w-full h-full object-cover" onerror={handleImageError} />
           <!-- Dummy doc if image empty -->
           <div class="hidden flex-col items-center justify-center w-full h-full text-slate-400 p-8 text-center bg-slate-50">
             <div class="w-3/4 h-2 bg-slate-200 mb-6 mx-auto"></div>
             <div class="w-full h-1 bg-slate-200 mb-2"></div>
             <div class="w-full h-1 bg-slate-200 mb-2"></div>
             <div class="w-5/6 h-1 bg-slate-200 mb-2"></div>
             <div class="w-full h-1 bg-slate-200 mb-2"></div>
             <div class="w-4/6 h-1 bg-slate-200 mb-8"></div>
             <div class="w-16 h-16 rounded-full border-4 border-red-200 ml-auto mr-12 mt-auto mb-10 opacity-50 flex items-center justify-center font-bold text-red-300 text-xs transform -rotate-12">MỘC ĐỎ</div>
           </div>
        </div>

        <!-- Document 2 -->
        <div class="w-[45%] aspect-[1/1.4] bg-white rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200 transform transition-transform duration-500 hover:-translate-y-4 hover:-rotate-2 hover:scale-105 overflow-hidden z-20 mt-12 md:mt-24">
           <!-- svelte-ignore a11y_img_redundant_alt -->
           <img src="/images/legal-doc-2.jpg" alt="Văn bản pháp lý 2" class="w-full h-full object-cover" onerror={handleImageError} />
           <!-- Dummy doc if image empty -->
           <div class="hidden flex-col items-center justify-center w-full h-full text-slate-400 p-8 text-center bg-slate-50">
             <div class="w-3/4 h-2 bg-slate-200 mb-6 mx-auto"></div>
             <div class="w-full h-1 bg-slate-200 mb-2"></div>
             <div class="w-full h-1 bg-slate-200 mb-2"></div>
             <div class="w-5/6 h-1 bg-slate-200 mb-2"></div>
             <div class="w-full h-1 bg-slate-200 mb-2"></div>
             <div class="w-4/6 h-1 bg-slate-200 mb-8"></div>
             <div class="w-16 h-16 rounded-full border-4 border-red-200 ml-auto mr-12 mt-auto mb-10 opacity-50 flex items-center justify-center font-bold text-red-300 text-[10px] transform -rotate-12">CHỮ KÝ</div>
           </div>
        </div>

      </div>
    </div>
  </div>
</section>
