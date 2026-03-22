<script>
  import LegalGallery from "$lib/components/LegalGallery.svelte";
</script>

<section class="py-24 bg-slate-950 relative overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 z-0">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_40%)]"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px]"
    ></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
    <!-- Header -->
    <div class="text-center mb-14">
      <p class="text-amber-300 italic text-2xl mb-2">Hồ sơ pháp lý</p>

      <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">
        Thư Viện <span class="text-amber-300">Pháp Lý</span>
      </h2>

      <p class="mt-5 text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Cập nhật đầy đủ các hồ sơ pháp lý quan trọng của dự án nhằm mang đến sự
        minh bạch và an tâm cho khách hàng.
      </p>
    </div>

    <LegalGallery />
  </div>
</section>
