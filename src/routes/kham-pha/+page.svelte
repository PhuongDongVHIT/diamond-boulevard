<script lang="ts">
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';

  function handleImageError(e: Event) {
    const target = e.currentTarget as HTMLElement;
    if (target) {
      target.style.display = 'none';
      if (target.nextElementSibling) {
        (target.nextElementSibling as HTMLElement).style.display = 'flex';
      }
    }
  }

  const title = "Diamond Boulevard | Khám Phá Tâm Điểm Tinh Hoa";
  const desc = "Căn hộ mặt tiền QL13 cạnh AEON Mall. Trải nghiệm không gian sống với 30+ tiện ích nội khu, 2 tầng hầm và vị trí đắc địa tại trái tim Đông Bắc TP.HCM.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
</svelte:head>

<!-- HERO SECTION (can-ho-mat-tien-ql13.jpg) -->
<!-- Apple uses fullscreen locked imagery with massive text appearing -->
<section class="relative h-screen min-h-[800px] w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white">
  <!-- Dynamic Image Background -->
  <div class="absolute inset-0 z-0">
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="/images/can-ho-mat-tien-ql13.jpg" alt="Phối cảnh Căn hộ mặt tiền" class="w-full h-full object-cover opacity-60 object-center transition-transform duration-[20s] hover:scale-105" onerror={handleImageError} />
    <div class="hidden flex-col items-center justify-center p-12 text-slate-400 w-full h-full text-center border-4 border-dashed border-slate-700 m-8 rounded-[3rem]">
       <strong class="text-3xl mb-4">can-ho-mat-tien-ql13.jpg</strong>
       <p class="text-lg">Vui lòng cung cấp hình ảnh phối cảnh tổng thể toà nhà mặt tiền.</p>
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
  </div>

  <div class="relative z-10 text-center max-w-5xl px-6" use:fadeUp={{ y: 50, duration: 1.5 }}>
    <p class="text-lg md:text-3xl font-semibold tracking-widest text-white/90 uppercase mb-4 drop-shadow-md">Tâm Điểm Giao Thương</p>
    <h1 class="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[1] drop-shadow-2xl">
      MẶT TIỀN QL 13<br>
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#f56c22] to-[#ffb854]">CẠNH AEON MALL</span>
    </h1>
    <p class="mt-6 md:mt-8 text-xl md:text-4xl font-medium text-white/80 max-w-3xl mx-auto leading-tight drop-shadow">
      Sự thanh lịch vượt thời gian hội tụ cùng tầm nhìn panorama vô cực.
    </p>
  </div>
  
  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10 text-white/50">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
  </div>
</section>

<!-- TỌA ĐỘ 1: TRÁI TIM ĐÔNG BẮC (trai-tim-dong-bac.jpg) -->
<!-- Classic Apple side-by-side sticky-like section -->
<section class="py-40 bg-bg-color overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="flex flex-col lg:flex-row items-center gap-20">
      <div class="lg:w-1/2 z-10" use:fadeUp={{y: 50}}>
        <h2 class="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black tracking-tighter leading-tight mb-6 lg:mb-8 text-text-color">Trái Tim<br><span class="text-[#86868b]">Đông Bắc<br>TP.HCM</span></h2>
        <p class="text-xl md:text-2xl font-medium text-text-secondary leading-relaxed mb-10 max-w-lg">
          Vị trí chiến lược độc tôn kết nối 3 thành phố mũi nhọn nền kinh tế. Diamond Boulevard thiết lập một tâm điểm sống đỉnh cao.
        </p>
      </div>
      <div class="lg:w-1/2 w-full" use:fadeUp={{y: 60, delay: 0.2}}>
        <div class="rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] glass p-2 relative group w-full aspect-square">
           <!-- svelte-ignore a11y_img_redundant_alt -->
           <img src="/images/trai-tim-dong-bac.jpg" alt="Trái tim Đông Bắc HCMC" class="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105" onerror={handleImageError} />
           <div class="hidden flex-col items-center justify-center text-slate-400 w-full h-full text-center bg-slate-100 dark:bg-slate-800 rounded-[2.5rem]">
             <strong>trai-tim-dong-bac.jpg</strong>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TỌA ĐỘ 2: ĐẮC ĐỊA, TÂM ĐIỂM (toa-do-dac-dia.jpg) -->
<section class="py-40 bg-black text-white overflow-hidden relative">
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img src="/images/toa-do-dac-dia.jpg" alt="Bản đồ tọa độ đắc địa" class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" onerror={handleImageError} />
  
  <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center max-w-4xl mx-auto mb-16 md:mb-20" use:fadeUp={{y: 40}}>
      <h2 class="text-5xl md:text-[6rem] lg:text-[7rem] font-black tracking-tighter leading-[1] mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#86868b]">
        Tọa Độ Đắc Địa.
      </h2>
      <p class="text-xl md:text-3xl text-white/70 font-medium">Tâm điểm giao thương, kiến tạo sức bật bền vững cho tương lai.</p>
    </div>

    <!-- Apple style translucent cards for features -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8" use:staggerFadeUp={{y: 30, stagger: 0.1}}>
      <div class="glass !bg-white/10 !border-white/20 p-10 rounded-[2.5rem] backdrop-blur-3xl hover:!bg-white/20 transition-all">
        <h3 class="text-2xl font-bold mb-4 text-[#f56c22]">Mặt Lộ</h3>
        <p class="text-lg text-white/80 leading-relaxed">Tọa lạc ngay mặt tiền Quốc lộ 13 - Trục huyết mạch kết nối trọng điểm.</p>
      </div>
      <div class="glass !bg-white/10 !border-white/20 p-10 rounded-[2.5rem] backdrop-blur-3xl hover:!bg-white/20 transition-all">
        <h3 class="text-2xl font-bold mb-4 text-[#f56c22]">Cận Trạm</h3>
        <p class="text-lg text-white/80 leading-relaxed">Sát cạnh trạm Metro C7 của tuyến Metro Thủ Dầu Một - TPHCM.</p>
      </div>
      <div class="glass !bg-white/10 !border-white/20 p-10 rounded-[2.5rem] backdrop-blur-3xl hover:!bg-white/20 transition-all">
        <h3 class="text-2xl font-bold mb-4 text-[#f56c22]">Lõi Công Nghiệp</h3>
        <p class="text-lg text-white/80 leading-relaxed">Kề cận các KCN lớn mạnh nhất vùng: VSIP 1, Việt Hương, Sóng Thần.</p>
      </div>
    </div>
  </div>
</section>

<!-- TIỆN ÍCH NỘI KHU (tien-ich-noi-khu.jpg) -->
<section class="py-24 md:py-40 bg-bg-secondary text-text-color">
  <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center">
    <div class="text-center mb-16 md:mb-20" use:fadeUp={{y: 40}}>
      <h2 class="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black tracking-tighter leading-[1.1] text-text-color drop-shadow-sm mb-2">30+ Tiện Ích</h2>
      <p class="text-2xl md:text-[3rem] font-bold text-[#f56c22]">Nội khu sang trọng. 02 tầng hầm.</p>
    </div>

    <div class="w-full relative rounded-[3rem] overflow-hidden glass p-4 shadow-2xl" use:fadeUp={{y: 60}}>
      <div class="rounded-[2.5rem] overflow-hidden relative">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src="/images/tien-ich-noi-khu.jpg" alt="Tiện ích nội khu" class="w-full object-cover min-h-[600px] hover:scale-105 transition-transform duration-[10s]" onerror={handleImageError} />
        <div class="hidden flex-col items-center justify-center text-slate-400 w-full min-h-[400px] md:min-h-[600px] text-center bg-slate-100 dark:bg-slate-800 absolute inset-0">
           <strong>tien-ich-noi-khu.jpg</strong>
        </div>
        
        <!-- Overlay text glass -->
        <div class="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-auto max-w-lg glass !bg-bg-color/70 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-white/40 shadow-xl backdrop-blur-3xl">
          <p class="text-[0.95rem] md:text-xl font-medium text-text-color leading-relaxed">
            Mỗi tiện ích đều được bố trí khoa học. Từ không gian sống đến dịch vụ giải trí đều hướng tới sự thuận tiện, để mỗi ngày đều trọn vẹn và liền mạch.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TIỆN ÍCH NGOẠI KHU BENTO GRID (tien-ich-ngoai-khu.jpg) -->
<!-- Apple Bento Grid Layout -->
<section class="py-24 md:py-40 bg-bg-color text-text-color">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center mb-16 md:mb-20" use:fadeUp={{y: 40}}>
      <p class="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-400 dark:to-gray-100 uppercase tracking-[0.2em] mb-4">Ngoại Khu Đủ Đầy</p>
      <h2 class="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black tracking-tighter leading-[1] mb-6">Mọi Trải Nghiệm.<br class="hidden md:block">Trong Tầm Tay.</h2>
      <p class="text-lg md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Từ mua sắm, học tập diện rộng đến chăm sóc sức khoẻ toàn diện, sự tiện nghi gắn với nhịp sống năng động.</p>
    </div>

    <!-- The Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 auto-rows-[250px] md:auto-rows-[350px]" use:staggerFadeUp={{y: 50, stagger: 0.1}}>
      
      <!-- Lớn: Hình ảnh minh hoạ chung -->
      <div class="md:col-span-2 md:row-span-2 rounded-[2.5rem] glass overflow-hidden relative group">
         <img src="/images/tien-ich-ngoai-khu.jpg" alt="Ngoại khu tổng thể" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror={handleImageError} />
         <div class="hidden flex-col items-center justify-center text-slate-400 w-full h-full text-center bg-slate-100 dark:bg-slate-800 absolute inset-0">
           <strong>tien-ich-ngoai-khu.jpg</strong>
         </div>
      </div>

      <!-- Bento 1: Giáo Dục -->
      <div class="md:col-span-2 rounded-[2.5rem] bg-bg-secondary p-10 flex flex-col justify-end group hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-[#f56c22] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
        <h3 class="text-3xl font-bold mb-3">Giáo Dục Tinh Hoa</h3>
        <p class="text-text-secondary font-medium">Làng ĐH Quốc Gia, ĐH Việt Đức, CĐ VN-Singapore...</p>
      </div>

      <!-- Bento 2: Thương Mại -->
      <div class="rounded-[2.5rem] bg-bg-secondary p-8 flex flex-col justify-end group hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        <h3 class="text-3xl font-bold mb-3 text-[#0071e3]">Thương Mại</h3>
        <p class="text-[0.95rem] text-text-secondary font-medium leading-relaxed">AEON Mall kế cận, Lotte Mart, Giga Mall Thủ Đức.</p>
      </div>

      <!-- Bento 3: Y Tế -->
      <div class="rounded-[2.5rem] bg-bg-secondary p-8 flex flex-col justify-end group hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
        <h3 class="text-3xl font-bold mb-3 text-red-500">Y Tế Quốc Tế</h3>
        <p class="text-[0.95rem] text-text-secondary font-medium leading-relaxed">BV Quốc tế Columbia Asia, BV Becamex, Hạnh Phúc.</p>
      </div>

    </div>
  </div>
</section>

<!-- Call to action block -->
<section class="py-24 md:py-32 bg-bg-color border-t border-border-color">
  <div class="max-w-4xl mx-auto px-6 text-center" use:fadeUp={{y: 30}}>
    <h2 class="text-4xl md:text-5xl font-extrabold mb-8 md:mb-10 leading-tight">Bắt đầu kỷ nguyên mới<br>của giới tinh hoa.</h2>
    <a href="/#contact" class="inline-flex py-4 md:py-5 px-10 md:px-12 bg-text-color text-bg-color rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl">Đăng Ký Khám Phá Trực Tiếp</a>
  </div>
</section>
