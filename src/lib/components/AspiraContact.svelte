<script>
  import { fadeUp } from '$lib/actions/gsap';
  // AspiraContact.svelte
</script>

<section class="relative pt-24 min-h-[800px] bg-[url('/images/placeholder.jpg')] bg-center bg-cover bg-no-repeat bg-bg-color">
  <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
  
  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
    <div class="flex flex-col lg:flex-row rounded-[1.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.3)] mb-16 gsap-reveal" use:fadeUp={{ y: 50, duration: 1.2 }}>
      
      <!-- Left Side (Orange) -->
      <div class="flex-1 bg-accent text-white py-16 px-8 md:px-12 flex flex-col">
        <h2 class="text-[2.5rem] md:text-[3rem] font-extrabold leading-[1.1] mb-12 uppercase">DỰ ÁN<br>THE ASPIRA</h2>
        
        <div class="flex flex-col gap-6 mb-auto">
          <div class="flex items-start gap-4 text-[1.05rem] font-medium">
            <span class="text-xl">📞</span>
            <p>0936 35 68 35</p>
          </div>
          <div class="flex items-start gap-4 text-[1.05rem] font-medium">
            <span class="text-xl">📍</span>
            <p>Đường Nguyễn Thị Minh Khai/2, Phường Tân Đông Hiệp,<br>TP Hồ Chí Minh</p>
          </div>
          <div class="flex items-start gap-4 text-[1.05rem] font-medium">
            <span class="text-xl">✉️</span>
            <p>info@diamondboulevard.vn</p>
          </div>
        </div>

        <div class="mt-12 w-full h-[200px] bg-[#e5e5e5] rounded-lg relative overflow-hidden">
          <div class="absolute inset-0 [background-image:repeating-linear-gradient(0deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px),repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">📍</div>
          <div class="absolute bottom-1 right-2 text-xs font-bold text-gray-600">Google Maps</div>
        </div>
      </div>

      <!-- Right Side (Glass Form) -->
      <div class="flex-[1.2] py-16 px-8 md:px-12 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl">
        <h2 class="text-[2rem] md:text-[2.5rem] font-extrabold text-text-color mb-2">Đăng ký tư vấn</h2>
        <p class="text-base text-text-secondary mb-8 max-w-[400px] leading-relaxed">Hãy để lại lời nhắn để đội ngũ của chúng tôi tư vấn chi tiết và đồng hành cùng bạn.</p>

        <h3 class="text-2xl font-extrabold text-center text-text-color mb-8 uppercase">LIÊN HỆ TƯ VẤN</h3>

        <form class="flex flex-col gap-5">
          <input type="text" placeholder="Họ tên" class="w-full px-6 py-5 rounded-full border border-border-color bg-white dark:bg-bg-secondary text-text-color font-sans text-base outline-none transition-shadow focus:shadow-[0_0_0_2px_var(--accent-light)] focus:border-accent">
          <input type="tel" placeholder="Số điện thoại" class="w-full px-6 py-5 rounded-full border border-border-color bg-white dark:bg-bg-secondary text-text-color font-sans text-base outline-none transition-shadow focus:shadow-[0_0_0_2px_var(--accent-light)] focus:border-accent">
          <input type="email" placeholder="Email" class="w-full px-6 py-5 rounded-full border border-border-color bg-white dark:bg-bg-secondary text-text-color font-sans text-base outline-none transition-shadow focus:shadow-[0_0_0_2px_var(--accent-light)] focus:border-accent">
          <input type="text" placeholder="Loại căn cần tư vấn" class="w-full px-6 py-5 rounded-full border border-border-color bg-white dark:bg-bg-secondary text-text-color font-sans text-base outline-none transition-shadow focus:shadow-[0_0_0_2px_var(--accent-light)] focus:border-accent">
          <textarea placeholder="Nội dung tư vấn" class="w-full px-6 py-5 rounded-[1rem] border border-border-color bg-white dark:bg-bg-secondary text-text-color font-sans text-base outline-none transition-shadow focus:shadow-[0_0_0_2px_var(--accent-light)] focus:border-accent resize-none" rows="4"></textarea>
          
          <button type="button" class="w-full mt-2 text-[1.1rem] py-5 inline-flex items-center justify-center rounded-full font-bold transition-all bg-accent text-white shadow-[0_4px_14px_rgba(239,101,34,0.3)] hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(239,101,34,0.4)]">Đăng ký nhận Báo giá</button>
        </form>
      </div>
      
    </div>
  </div>
  
  <div class="bg-accent text-white py-6 relative z-10 w-full mt-auto">
    <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row justify-between items-center text-[0.9rem] font-medium gap-4 lg:gap-0 text-center lg:text-left">
      <div>
        <strong>DIAMOND BOULEVARD</strong> 2026 Diamond Boulevard. Bản quyền đã được bảo hộ.
      </div>
      <div>
        Địa chỉ: Đường Nguyễn Thị Minh Khai/2, Phường Tân Đông Hiệp, TP Hồ Chí Minh
      </div>
      <div>
        Email: info@diamondboulevard.vn
      </div>
    </div>
  </div>
</section>
