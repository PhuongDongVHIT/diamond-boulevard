<script lang="ts">
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';
  import { fade, slide } from 'svelte/transition';

  type MethodKey = 'hotrolaisuat' | 'giaingansongsong';
  let activeTab: MethodKey = $state('hotrolaisuat');

  const methods = {
    hotrolaisuat: {
      title: "Hỗ Trợ Lãi Suất",
      discount: "CHIẾT KHẤU 1%",
      steps: [
        { percentage: "30 TRIỆU", desc: "Ký hợp đồng đặt cọc" },
        { percentage: "21%", desc: "Ký hợp đồng mua bán" },
        { percentage: "49% NHGN", desc: "30 ngày kể từ đợt 1" },
        { percentage: "25% + 2% PBT", desc: "Bàn giao căn hộ" },
        { percentage: "5%", desc: "Bàn giao Giấy CNQSD" }
      ]
    },
    giaingansongsong: {
      title: "Giải Ngân Song Song",
      discount: "",
      steps: [
        { percentage: "30 TRIỆU", desc: "Ký hợp đồng đặt cọc" },
        { percentage: "10%", desc: "Ký hợp đồng mua bán" },
        { percentage: "35% NHGN\n<span class='text-sm text-amber-200/80 mt-1 block font-medium'>5% vốn tự có</span>", desc: "30 ngày kể từ đợt 1" },
        { percentage: "7% NHGN\n<span class='text-sm text-amber-200/80 mt-1 block font-medium'>3% vốn tự có</span>", desc: "60 ngày kể từ đợt 2" },
        { percentage: "7% NHGN\n<span class='text-sm text-amber-200/80 mt-1 block font-medium'>3% vốn tự có</span>", desc: "60 ngày kể từ đợt 3" },
        { percentage: "16% NHGN\n<span class='text-sm text-amber-200/80 mt-1 block font-medium'>9% vốn tự có</span>", desc: "Bàn giao căn hộ" },
        { percentage: "5%", desc: "Bàn giao Giấy CNQSD" }
      ]
    }
  };

  let currentData = $derived(methods[activeTab]);
</script>

<section class="py-32 bg-slate-950 relative overflow-hidden" id="payment">
  
  <div class="absolute inset-0 z-0">
    <!-- Diamond/crystal dark background simulation -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.8)_0%,rgba(2,6,23,1)_100%)] z-10"></div>
    <div class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] transform rotate-45"></div>
  </div>

  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
    <div class="text-center mb-16 gsap-reveal" use:fadeUp={{ y: 30 }}>
      <p class="text-[2rem] md:text-[2.5rem] font-signature text-amber-100/80 mb-[-10px] md:mb-[-15px] italic">Phương thức</p>
      <h2 class="text-4xl md:text-[4rem] font-black tracking-tight uppercase text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
        Thanh Toán
      </h2>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center gap-4 mb-16 gsap-reveal" use:fadeUp={{ y: 20, delay: 0.1 }}>
      <button 
        class="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 {activeTab === 'hotrolaisuat' ? 'bg-amber-400 text-slate-900 shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-105' : 'bg-white/5 text-amber-100/60 hover:bg-white/10 hover:text-amber-100 border border-white/10'}"
        onclick={() => activeTab = 'hotrolaisuat'}
      >
        Hỗ Trợ Lãi Suất
      </button>
      <button 
        class="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 {activeTab === 'giaingansongsong' ? 'bg-amber-400 text-slate-900 shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-105' : 'bg-white/5 text-amber-100/60 hover:bg-white/10 hover:text-amber-100 border border-white/10'}"
        onclick={() => activeTab = 'giaingansongsong'}
      >
        Giải Ngân Song Song
      </button>
    </div>

    <!-- Timeline Content -->
    <div class="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative min-h-[400px] flex flex-col justify-center">
      {#key activeTab}
        <div class="w-full relative py-8" in:fade={{duration: 400}}>
          
          <h3 class="text-center text-3xl md:text-5xl font-extrabold text-amber-300 uppercase tracking-wide mb-20 drop-shadow-md">
            {currentData.title}
          </h3>

          <!-- The Horizontal Line -->
          <div class="absolute top-[210px] md:top-[225px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent hidden md:block"></div>

          <!-- The Steps -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0 relative z-10 {currentData.steps.length > 5 ? 'md:grid-cols-7' : ''}">
            {#each currentData.steps as step, index}
              <div class="flex flex-col items-center text-center group relative pt-4 md:pt-0 pb-8 md:pb-0 border-b border-white/5 md:border-b-0">
                <!-- Data Point (Desktop Node) -->
                <div class="hidden md:flex w-4 h-4 bg-slate-900 border-[3px] border-amber-400 rounded-sm rotate-45 mb-8 z-10 shadow-[0_0_15px_rgba(251,191,36,0.6)] group-hover:bg-amber-400 transition-colors"></div>
                
                <!-- Content Top (Percentage) -->
                <div class="md:absolute md:bottom-full md:mb-12 font-bold text-amber-300 text-lg md:text-xl md:whitespace-nowrap min-h-[60px] flex flex-col justify-end">
                  {@html step.percentage}
                </div>
                
                <!-- Content Bottom (Description) -->
                <div class="mt-2 md:mt-8 text-sm md:text-[0.8rem] lg:text-[0.9rem] font-medium text-blue-100/80 uppercase tracking-widest max-w-[140px] px-2 leading-relaxed h-[60px]">
                  {step.desc}
                </div>
              </div>
            {/each}
          </div>

          <!-- Discount if exists -->
          {#if currentData.discount}
            <div class="mt-24 text-center" in:slide>
              <h4 class="text-4xl md:text-6xl font-black text-amber-300 tracking-wider drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                {currentData.discount}
              </h4>
            </div>
          {/if}

        </div>
      {/key}
    </div>

  </div>
</section>
