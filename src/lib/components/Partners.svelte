<script>
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';
</script>

<section class="py-32 bg-bg-color relative overflow-hidden border-b border-border-color">
  <div class="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,var(--bg-secondary)_0%,var(--bg-color)_60%)]"></div>
  
  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
    <div class="text-center mb-20 gsap-reveal" use:fadeUp={{ y: 30 }}>
      <div class="inline-flex items-center justify-center p-4 bg-white/5 border border-border-color rounded-2xl mb-8 shadow-sm">
         <svg class="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l4.5 4.5l-4.5 4.5M12 2v9m-7.5 4.5L9 20M4.5 15.5H12M19.5 15.5l-4.5 4.5M19.5 15.5H12"/></svg>
      </div>
      <h2 class="text-3xl md:text-[2.5rem] font-bold tracking-widest text-text-color uppercase">
        Đối Tác Chiến Lược
      </h2>
    </div>

    <!-- Developers Row -->
    <div class="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 mb-24 gsap-reveal" use:staggerFadeUp={{ y: 40, stagger: 0.2 }}>
      <!-- Chủ đầu tư -->
      <div class="flex flex-col items-center group">
        <span class="text-sm font-bold text-text-secondary uppercase tracking-[2px] mb-8">Chủ đầu tư</span>
        <div class="bg-white px-10 py-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex items-center justify-center h-[120px] w-[260px]">
          <span class="text-3xl font-black text-[#FBBF24] uppercase tracking-tighter flex items-center gap-2">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22V8l8-6l8 6v14h-4V12h-8v10H4z"/></svg>
            TECCO
          </span>
        </div>
      </div>

      <!-- Đơn vị triển khai -->
      <div class="flex flex-col items-center group">
        <span class="text-sm font-bold text-text-secondary uppercase tracking-[2px] mb-8">Đơn vị triển khai dự án</span>
        <div class="bg-white px-10 py-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center h-[120px] w-[260px]">
          <span class="text-2xl font-black text-[#0369a1] uppercase mb-1">
            DATXANH
          </span>
          <span class="text-sm font-bold text-slate-500 uppercase tracking-widest">SERVICES</span>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="flex items-center justify-center mb-16 opacity-50 gsap-reveal" use:fadeUp={{ y: 0, duration: 1 }}>
      <div class="h-[1px] w-1/4 bg-border-color"></div>
      <span class="text-xs font-bold text-text-secondary uppercase tracking-[3px] mx-6">Ngân hàng đồng hành</span>
      <div class="h-[1px] w-1/4 bg-border-color"></div>
    </div>

    <!-- Banks Row -->
    <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 gsap-reveal pb-10" use:staggerFadeUp={{ y: 30, stagger: 0.1 }}>
      <!-- Vietcombank -->
      <div class="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all h-[80px]">
         <span class="text-xl font-bold text-[#16a34a] flex items-center gap-2 tracking-tight"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4l1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z"/></svg> Vietcombank</span>
      </div>
      
      <!-- VietinBank -->
      <div class="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all h-[80px]">
         <span class="text-xl font-bold text-[#0284c7] flex items-center gap-1 tracking-tighter"><span class="text-red-500 text-2xl mr-1">V</span> VietinBank</span>
      </div>

      <!-- AGRIBANK -->
      <div class="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all h-[80px]">
         <span class="text-xl font-black text-[#b91c1c] uppercase tracking-normal">AGRIBANK</span>
      </div>

      <!-- PUBLIC BANK -->
      <div class="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all h-[80px]">
         <span class="text-xl font-black text-slate-800 uppercase flex items-center gap-2">
            <svg class="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
            PUBLIC BANK
         </span>
      </div>

      <!-- TPBank -->
      <div class="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all h-[80px]">
         <span class="text-xl font-bold text-[#9333ea] italic flex items-center gap-2 tracking-tighter">
            <svg class="w-8 h-8 text-[#a855f7]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
            TPBank
         </span>
      </div>
    </div>

  </div>
</section>
