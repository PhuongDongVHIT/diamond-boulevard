<script lang="ts">
  import FloorPlanComponent from "$lib/components/FloorPlan.svelte";

  function handleImageError(e: Event) {
    const target = e.currentTarget as HTMLElement;
    if (target) {
      target.style.display = "none";
      if (target.nextElementSibling) {
        (target.nextElementSibling as HTMLElement).style.display = "flex";
      }
    }
  }

  const title = "Mặt Bằng Căn Hộ Diamond Boulevard | Thiết Kế Tầng 02 & 03-30";
  const desc =
    "Chi tiết mặt bằng tầng và thiết kế từng loại căn hộ tại dự án Diamond Boulevard Bình Dương. Xem trực quan bản vẽ kiến trúc các dòng Studio, 2PN, 3PN với diện tích tối ưu.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="article" />
</svelte:head>

<!-- Page Header Overlay -->
<section class="relative py-12 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-20 text-center">
    <h1
      class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-6 drop-shadow-lg"
    >
      Mặt Bằng <br> <span
        class="font-playfair italic"
        >Dianmond Boulevard</span
      >
    </h1>
  </div>
</section>

<!-- High-Res Floor Plans Display (SEO Driven) -->
<section class="py-24 ">
  <div class="max-w-[1400px] mx-auto px-6 md:px-8">
    <!-- Floor 2 -->
    <div class="mb-32">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="md:w-1/3">
          <h2
            class="text-4xl font-extrabold  uppercase tracking-tight mb-6 border-l-4 border-accent pl-4"
          >
            Mặt Bằng<br />Tầng 02
          </h2>
          <p
            class="text-lg text-text-secondary leading-relaxed mb-6 text-justify"
          >
            Tầng 02 là tầng đặc quyền với mật độ căn hộ thấp, tích hợp không
            gian <strong>Sinh Hoạt Cộng Đồng (SHCĐ)</strong> và khu
            <strong>Thương Mại Dịch Vụ (TMDV)</strong>. Cư dân tại Tầng 02 thừa
            hưởng sự yên tĩnh và dễ dàng tiếp cận ngay lập tức với các tiện ích
            khối đế tiện lợi.
          </p>
          <ul class="space-y-3 font-medium /80">
            <li class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-yellow-400"></span> Studio (CH-07)
            </li>
            <li class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-stone-300"></span> Căn hộ 2PN 1WC
              (CH-08, CH-10)
            </li>
            <li class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-cyan-200"></span> Căn hộ 2PN 2WC
              (CH-01, CH-02...)
            </li>
            <li class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-orange-300"></span> Căn hộ 3PN
              (CH-04)
            </li>
          </ul>
        </div>

        <div
          class="md:w-2/3 bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img
            src="/images/mat-bang-tang-2-diamond-boulevard.webp"
            alt="Mặt Bằng Tầng 02 - Diamond Boulevard"
            class="w-full h-auto"
            onerror={handleImageError}
          />
          <div
            class="hidden flex-col items-center justify-center p-12 text-slate-400 text-center w-full min-h-[300px]"
          >
            Vui lòng cập nhật ảnh <code class="text-white"
              >mat-bang-tang-2-diamond-boulevard.webp</code
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Floor 3-30 -->
    <div class="">
      <div class="flex flex-col md:flex-row-reverse gap-12 items-center">
        <div class="md:w-1/3">
          <h2
            class="text-4xl font-extrabold  uppercase tracking-tight mb-6 border-l-4 border-accent pl-4"
          >
            Mặt Bằng<br />Tầng 03 - 30
          </h2>
          <p
            class="text-lg text-text-secondary leading-relaxed mb-6 text-justify"
          >
            Mặt bằng tầng điển hình từ 03 đến Tầng 30 được phân bố xuất sắc với
            lõi thang máy trung tâm và hành lang thông gió tự nhiên chữ H. Mật
            độ không gian đảm bảo sự đối lưu không khí tối đa. Tầm nhìn panorama
            toàn cảnh Sân Golf Sông Bé và trung tâm Landmark 81 cực kỳ thoáng
            đãng.
          </p>
        </div>

        <div
          class="md:w-2/3 bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img
            src="/images/mat-bang-tang-3-30-diamond-boulevard.webp"
            alt="Mặt Bằng Tầng 03 đến 30 - Diamond Boulevard"
            class="w-full h-auto"
            onerror={handleImageError}
          />
          <div
            class="hidden flex-col items-center justify-center p-12 text-slate-400 text-center w-full min-h-[300px]"
          >
            Vui lòng cập nhật ảnh <code class="text-white"
              >mat-bang-tang-3-30-diamond-boulevard.webp</code
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Standard Floor Plan Component reused for interactive layouts -->
<FloorPlanComponent />

<!-- SEO Content Block for Conversion -->
<section class="py-24 bg-bg-secondary border-t ">
  <div class="max-w-4xl mx-auto px-6 md:px-8 text-center">
    <h2 class="text-3xl font-bold  mb-6">
      Liên Hệ Để Nhận Bảng Giá Chi Tiết
    </h2>
    <p class="text-lg text-text-secondary leading-relaxed mb-10">
      Mỗi thiết kế căn hộ mở ra một giải pháp không gian hoàn mỹ cho gia đình
      bạn. Hãy đăng ký ngay để nhận file bản vẽ CAD, ảnh 3D phân giải cao và
      bảng cập nhật thiết kế MỚI NHẤT từ Chủ đầu tư Tecco.
    </p>
  </div>
</section>
