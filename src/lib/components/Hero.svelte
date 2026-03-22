<script lang="ts">
  
  let searchQuery = $state('');

  function handleSearch(e: Event) {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/properties?location=${encodeURIComponent(searchQuery)}`;
    }
  }
</script>

<section class="relative min-h-[90vh] flex items-center bg-[url('/images/hero.png')] bg-cover bg-center bg-fixed">
  <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
  <div class="relative z-10 text-slate-50 w-full max-w-7xl mx-auto px-6 md:px-8">
    <div class="max-w-[700px] " >
      <h1 class="text-slate-50 mb-6 text-4xl md:text-[4.5rem] font-extrabold tracking-tight leading-[1.1]">Căn Hộ Cao Cấp <br><span class="text-accent">Mặt Tiền QL 13</span></h1>
      <p class="text-[1.25rem] mb-12 text-slate-300 max-w-[500px] leading-relaxed">Trải nghiệm phong cách sống đô thị hiện đại và năng động, nơi mọi tiện nghi và kết nối giao thông đều nằm trong tầm tay của bạn.</p>
      
      <form class="flex flex-col md:flex-row p-2 md:p-4 rounded-2xl md:rounded-[1rem] gap-2 md:gap-4 bg-white/10 backdrop-blur-md border border-white/20" onsubmit={handleSearch}>
        <div class="flex-1 flex items-center gap-4 px-4 py-2 border-b border-white/10 md:border-none mb-2 md:mb-0">
          <svg class="text-slate-300 min-w-6 min-h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input 
            type="text" 
            placeholder="Tìm theo vị trí, loại bất động sản hoặc ID" 
            class="w-full bg-transparent border-none text-white text-[1.1rem] outline-none font-sans placeholder-slate-400"
            bind:value={searchQuery}
          />
        </div>
        <button type="submit" class="px-8 py-4 text-[1.1rem] rounded-full font-semibold transition-all bg-accent text-white shadow-[0_4px_14px_rgba(239,101,34,0.3)] hover:bg-accent-hover hover:-translate-y-0.5 whitespace-nowrap">Tìm Kiếm</button>
      </form>
    </div>
  </div>
</section>
