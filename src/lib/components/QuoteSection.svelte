<script>
  import { fadeUp } from '$lib/actions/gsap';

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

<section class="relative py-40 flex items-center bg-bg-color overflow-hidden">
  <!-- Background Image with Parallax effect -->
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-t from-bg-color via-bg-color/80 to-transparent z-10"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-bg-color/90 via-bg-color/40 to-transparent z-10"></div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="/images/quote-bg.jpg" alt="Panorama Diamond Boulevard" class="w-full h-full object-cover scale-105" onerror={handleImageError} />
    <div class="hidden flex-col items-center justify-center w-full h-full bg-slate-800 text-white/50">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      <span class="text-xl">Vui lòng tải ảnh <strong>quote-bg.jpg</strong> vào static/images/</span>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-20 w-full">
    <div class="max-w-4xl gsap-reveal" use:fadeUp={{ y: 50, duration: 1.2 }}>
      <div class="relative bg-white/5 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl md:rounded-[2rem] p-8 md:p-14 lg:p-16 border-t border-l border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        
        <!-- Large Quote Icon -->
        <div class="absolute -top-10 -left-6 md:-top-16 md:-left-12 text-accent/80 opacity-60">
          <svg class="w-24 h-24 md:w-36 md:h-36" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        </div>

        <div class="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] rounded-full"></div>

        <p class="text-[1.3rem] md:text-[1.8rem] lg:text-[2rem] font-medium leading-[1.6] text-white relative z-10 text-justify tracking-wide">
          Tất cả tiện nghi và không gian sống đều hội tụ tại <span class="text-accent font-bold">Diamond Boulevard</span> nơi mỗi cư dân dễ dàng kết nối với cuộc sống hàng ngày, từ sinh hoạt, học tập đến giải trí. Diamond Boulevard mang đến một tổ ấm tiện nghi, gọn gàng, nơi niềm vui và sự thuận tiện luôn song hành trong từng khoảnh khắc của gia đình.
        </p>
      </div>
    </div>
  </div>
</section>
