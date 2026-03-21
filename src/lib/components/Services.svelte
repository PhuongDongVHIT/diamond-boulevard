<script>
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';
  const services = [
    {
      title: 'Đại Diện Người Mua',
      description: 'Khám phá thị trường xa xỉ thông qua các chuyên gia đại lý của chúng tôi. Chúng tôi sẽ đàm phán quyết liệt để đảm bảo bạn tìm được bất động sản hoàn hảo với chi phí tối ưu.',
      icon: 'key'
    },
    {
      title: 'Dịch Vụ Bán Hàng',
      description: 'Chiến lược tiếp thị độc quyền đưa bất động sản của bạn tiếp cận mạng lưới người mua có giá trị ròng cao trên toàn cầu. Chúng tôi xử lý mọi chi tiết từ dàn cảnh đến lúc chốt tỷ lệ.',
      icon: 'home'
    },
    {
      title: 'Danh Mục Ưu Tiên',
      description: 'Tiếp cận hồ sơ và danh mục các bất động sản không công khai. Chúng tôi tôn trọng quyền riêng tư và đảm bảo mang lại những giao dịch kín đáo cho những ngôi nhà siêu sang.',
      icon: 'lock'
    }
  ];
</script>

<section class="py-32 bg-bg-color relative overflow-hidden">
  <div class="absolute -top-[100px] -left-[10vw] w-[600px] h-[600px] bg-[radial-gradient(circle,var(--accent-light)_0%,transparent_70%)] rounded-full z-0 opacity-50 pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
    <div class="text-center mb-20 max-w-[600px] mx-auto gsap-reveal" use:fadeUp={{ y: 30, duration: 1 }}>
      <h2 class="text-4xl md:text-[3rem] font-extrabold tracking-tight">Dịch Vụ <span class="text-accent">Tinh Tế</span></h2>
      <p class="text-[1.15rem] text-text-secondary mt-4">Giải pháp bất động sản thiết kế riêng cho những khách hàng khắt khe nhất thế giới.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10" use:staggerFadeUp={{ y: 40, stagger: 0.1 }}>
      {#each services as service}
        <div class="p-8 md:p-12 rounded-[1.5rem] transition-all duration-300 flex flex-col h-full border border-border-color bg-gradient-to-br from-bg-color to-bg-secondary hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-accent-light gsap-reveal">
          <div class="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_20px_var(--accent-light)]">
            {#if service.icon === 'key'}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
            {:else if service.icon === 'home'}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            {/if}
          </div>
          <h3 class="text-2xl font-bold mb-4 text-text-color">{service.title}</h3>
          <p class="text-[1.05rem] text-text-secondary leading-relaxed mb-8 flex-grow">{service.description}</p>
          <a href="/contact" class="font-semibold text-accent flex items-center gap-2 mt-auto w-max group">Tìm hiểu thêm <span class="transition-transform duration-150 group-hover:translate-x-1">→</span></a>
        </div>
      {/each}
    </div>
  </div>
</section>
