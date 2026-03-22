<script lang="ts">
  import { fadeUp } from '$lib/actions/gsap';
  import { fade, slide } from 'svelte/transition';

  type Method = {
    key: string;
    title: string;
    discount: string;
    img: string;
  };

  const methods: Method[] = [
    {
      key: 'hotrolaisuat',
      title: 'PHƯƠNG THỨC THANH TOÁN HỖ TRỢ LÃI SUẤT',
      discount: 'CHIẾT KHẤU 1%',
      img: '/images/diamond-boulecvard-phuong-thuc-thanh-toan-1.webp'
    },
    {
      key: 'giaingansongsong',
      title: 'PHƯƠNG THỨC THANH TOÁN',
      discount: 'GIẢI NGÂN SONG SONG',
      img: '/images/diamond-boulecvard-phuong-thuc-thanh-toan-2.webp'
    },
    {
      key: 'chiadeu',
      title: 'PHƯƠNG THỨC THANH TOÁN',
      discount: '1% MỖI THÁNG',
      img: '/images/diamond-boulecvard-phuong-thuc-thanh-toan-3.webp'
    },
    {
      key: 'chuan',
      title: 'PHƯƠNG THỨC THANH TOÁN CHUẨN',
      discount: 'CHIẾT KHẤU 2%',
      img: '/images/diamond-boulecvard-phuong-thuc-thanh-toan-4.webp'
    }
  ];

  let activeTab = $state(methods[0].key);

  let currentData = $derived(
    methods.find((item) => item.key === activeTab) ?? methods[0]
  );
</script>

<section class="py-32 bg-slate-950 relative overflow-hidden" id="payment">
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.8)_0%,rgba(2,6,23,1)_100%)] z-10"></div>
    <div class="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] transform rotate-45"></div>
  </div>

  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
    <div class="text-center mb-16 gsap-reveal" use:fadeUp={{ y: 30 }}>
      <p class="text-[2rem] md:text-[2.5rem] font-signature text-amber-100/80 mb-[-10px] md:mb-[-15px] italic">
        Phương thức
      </p>
      <h2 class="text-4xl md:text-[4rem] font-black tracking-tight uppercase text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
        Thanh Toán
      </h2>
    </div>

    <!-- Tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-16 gsap-reveal" use:fadeUp={{ y: 20, delay: 0.1 }}>
      {#each methods as method}
        <button
          class="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300
          {activeTab === method.key
            ? 'bg-amber-400 text-slate-900 shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-105'
            : 'bg-white/5 text-amber-100/60 hover:bg-white/10 hover:text-amber-100 border border-white/10'}"
          onclick={() => activeTab = method.key}
        >
          {method.title}
        </button>
      {/each}
    </div>

    <!-- Content -->
    <div class="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-4 shadow-2xl relative min-h-[400px] flex flex-col justify-center">
      {#key activeTab}
        <div class="w-full relative py-8" in:fade={{ duration: 400 }}>
          <div class="absolute top-[210px] md:top-[225px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent hidden md:block"></div>

          <img
            src={currentData.img}
            class="w-full h-full rounded-xl"
            alt={currentData.title}
          />

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