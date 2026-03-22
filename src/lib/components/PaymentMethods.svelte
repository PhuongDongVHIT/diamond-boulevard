<script lang="ts">
  
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

<section class="py-16 relative overflow-hidden" id="payment">
  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
    <div class="text-center mb-16 " >
      <p class="text-[2rem] md:text-[2.5rem] font-signature text-black mb-[-10px] md:mb-[-15px] italic">
        Phương thức
      </p>
      <h2 class="text-4xl md:text-[4rem] font-black tracking-tight uppercase text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
        Thanh Toán
      </h2>
    </div>

    <!-- Tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-8 " >
      {#each methods as method}
        <button
          class="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300
          {activeTab === method.key
            ? 'bg-amber-400 text-slate-900 shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-105'
            : 'bg-white/5 text-black hover:bg-white/10 hover:text-amber-100 border border-white/10'}"
          onclick={() => activeTab = method.key}
        >
          {method.title}
        </button>
      {/each}
    </div>

    <!-- Content -->
    <div class="p-8 md:p-4 relative min-h-[400px] flex flex-col justify-center">
      {#key activeTab}
        <div class="w-full relative py-2" in:fade={{ duration: 400 }}>
          <div class="absolute top-[210px] md:top-[225px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent hidden md:block"></div>

          <img
            src={currentData.img}
            class="w-full h-full rounded-xl"
            alt={currentData.title}
          />
        </div>
      {/key}
    </div>
  </div>
</section>