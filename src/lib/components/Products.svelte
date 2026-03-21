<script>
  import { fadeUp } from '$lib/actions/gsap';

  const products = [
    {
      id: "signature",
      title: "Biệt thự Signature",
      subtitle: "6 Phòng ngủ | 1,100 m²",
      desc: "Một kỳ quan kiến trúc đặc trưng bởi các tầng lầu đan xen, mô hình không gian mở và buồng trưng bày siêu xe riêng tư. Dành riêng cho những chủ nhân tìm kiếm không gian sống đẳng cấp.",
      features: ["Rạp Chiếu Phim Riêng", "Hồ Bơi Vô Cực", "Nhà Thông Minh Hiện Đại"],
      align: "left"
    },
    {
      id: "penthouse",
      title: "Bộ Sưu Tập Penthouse",
      subtitle: "4 Phòng ngủ | 800 m²",
      desc: "Ngự trị tại những tầng cao nhất, các căn Penthouse mang đến tầm nhìn 360 độ tuyệt mỹ, thiết kế trần thông tầng và sân thượng riêng biệt với các sảnh yến tiệc sang trọng.",
      features: ["Thang Máy Riêng", "Sân Thượng Dành Riêng", "Bếp Trưởng Đẳng Cấp"],
      align: "right"
    }
  ];
</script>

<section class="py-32 bg-bg-color">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center mb-24 gsap-reveal" use:fadeUp={{ y: 30 }}>
      <h2 class="text-4xl md:text-[3rem] font-extrabold tracking-tight">Bộ Sưu Tập <span class="text-accent">Tinh Hoa</span></h2>
      <p class="text-[1.15rem] text-text-secondary mt-4">Khám phá các dòng sản phẩm kiệt tác trong đợt ra mắt độc quyền này.</p>
    </div>

    <div class="flex flex-col gap-32">
      {#each products as product}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center gsap-reveal" use:fadeUp={{ y: 40, duration: 0.8 }}>
          <div class="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden relative p-8 flex items-center justify-center bg-white/70 dark:bg-slate-900/75 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)] {product.align === 'right' ? 'lg:order-2' : ''}">
            <div class="w-full h-full relative bg-gradient-to-br from-bg-secondary to-bg-color rounded-2xl shadow-[inset_0_0_30px_rgba(0,0,0,0.05)] overflow-hidden">
              <div class="absolute bottom-0 left-[20%] w-[60%] h-[70%] bg-text-color opacity-5 rounded-t-sm"></div>
              <div class="absolute bottom-0 left-[40%] w-[50%] h-[40%] bg-accent opacity-10 rounded-t-sm"></div>
            </div>
          </div>
          <div class="{product.align === 'right' ? 'lg:order-1' : ''}">
            <h4 class="text-[0.95rem] text-accent uppercase tracking-[2px] mb-4 font-bold">{product.subtitle}</h4>
            <h3 class="text-[2.5rem] text-text-color mb-6 leading-[1.2] font-extrabold">{product.title}</h3>
            <p class="text-[1.1rem] text-text-secondary leading-relaxed mb-8">{product.desc}</p>
            
            <ul class="flex flex-col gap-4 mb-10 list-none p-0">
              {#each product.features as feature}
                <li class="flex items-center gap-4 text-[1.05rem] text-text-color font-medium">
                  <span class="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_var(--accent-color)]"></span>
                  {feature}
                </li>
              {/each}
            </ul>
            <button class="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold transition-all bg-accent text-white text-[1.05rem] shadow-[0_4px_14px_rgba(239,101,34,0.3)] hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(239,101,34,0.4)]">Xem Thông Số Kỹ Thuật</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
