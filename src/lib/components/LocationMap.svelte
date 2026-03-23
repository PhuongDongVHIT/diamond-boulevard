<script lang="ts">
  const highlights = [
    {
      title: "Mặt lộ",
      desc: "Tọa lạc ngay mặt tiền Quốc lộ 13 - trục huyết mạch kết nối trọng điểm giữa Bình Dương và TP.HCM.",
      icon: "🛣️",
    },
    {
      title: "Cận trạm",
      desc: "Cạnh trạm Metro C7 thuộc tuyến Metro Thủ Dầu Một - TP.HCM, đón đầu giao thông tương lai.",
      icon: "🚇",
    },
    {
      title: "Lõi khu công nghiệp",
      desc: "Liền kề các khu công nghiệp lớn như VSIP 1, Việt Hương, Sóng Thần.",
      icon: "🏭",
    },
    {
      title: "Trong phố",
      desc: "Nằm giữa trung tâm sầm uất khu vực Đông Bắc TP.HCM, gần AEON Mall Bình Dương.",
      icon: "🏙️",
    },
  ];

  function handleImageError(e: any) {
    const target = e.currentTarget;
    if (target) {
      target.style.display = "none";
      if (target.nextElementSibling) {
        target.nextElementSibling.style.display = "flex";
      }
    }
  }
</script>

<section class="py-12 md:py-16 relative overflow-hidden">
  <div
    class="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,var(--accent-light)_0%,transparent_70%)] rounded-full z-0 opacity-40 pointer-events-none"
  ></div>

  <div
    class="max-w-8xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-7 gap-4 md:gap-14 items-center relative z-10"
  >
    <!-- Right Image -->
    <div class="col-span-2">
      <h2
        class="text-3xl sm:text-4xl md:text-6xl font-extrabold italic tracking-tight leading-tight font-playfair"
      >
        Toạ Độ Đắc Địa <br />
        <span class="text-white">Tâm Điểm Giao Thương</span>
      </h2>

      <p class="text-base md:text-lg text-text-secondary my-4 leading-relaxed">
        Diamond Boulevard sở hữu vị trí trung tâm đích thực — nơi giao thương,
        nhịp sống và giá trị đầu tư hội tụ, kiến tạo sức bật bền vững cho tương
        lai.
      </p>
    </div>
    <div class="h-[450px] lg:h-[600px] relative col-span-3">
      <div class="w-full h-full relative overflow-hidden">
        <div class="w-full h-full rounded-xl overflow-hidden">
          <img
            src="/images/vi-tri-diamond-boulevard.webp"
            alt="Vị trí Diamond Boulevard"
            class="w-full h-full object-cover"
            onerror={handleImageError}
          />

          <div
            class="hidden flex-col items-center justify-center text-text-secondary w-full h-full bg-[radial-gradient(circle_at_center,var(--border-color)_1px,transparent_1px)] bg-[size:20px_20px]"
          >
            <p>Không tìm thấy ảnh vị trí</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Left Content -->
    <div class="col-span-2">
      <div class="flex flex-col gap-2 md:gap-4 pt-4 text-sm md:text-base">
        {#each highlights as item}
          <div class="flex gap-4 py-4 border-b ">
            <div
              class="w-[52px] h-[52px] bg-bg-secondary border-b  flex items-center justify-center text-2xl shrink-0"
            >
              {item.icon}
            </div>

            <div>
              <p class="text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
