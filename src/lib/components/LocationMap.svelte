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

<section class="py-32 bg-bg-color relative overflow-hidden">
  <div
    class="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,var(--accent-light)_0%,transparent_70%)] rounded-full z-0 opacity-40 pointer-events-none"
  ></div>

  <div
    class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-14 items-center relative z-10"
  >
    <!-- Right Image -->
    <div class="h-[450px] lg:h-[600px] relative">
      <div
        class="w-full h-full rounded-[1.5rem] relative overflow-hidden p-3 md:p-4 border border-border-color bg-white/70 dark:bg-slate-900/75 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.05)]"
      >
        <div
          class="w-full h-full rounded-xl overflow-hidden border border-border-color"
        >
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

        <!-- Marker -->
        <div
          class="absolute bg-white dark:bg-slate-800 border-[3px] border-accent w-[64px] h-[64px] rounded-full flex items-center justify-center shadow-xl text-3xl font-black text-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div
            class="absolute inset-0 bg-accent rounded-full -z-10 opacity-40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"
          ></div>
          D
        </div>
      </div>
    </div>

    <!-- Left Content -->
    <div class="">
      <h2
        class="text-4xl md:text-[3rem] font-extrabold tracking-tight leading-tight"
      >
        Toạc Độ Đắc Địa <br />
        <span class="text-accent">Tâm Điểm Giao Thương</span>
      </h2>

      <p class="text-[1.15rem] text-text-secondary my-4 leading-relaxed">
        Diamond Boulevard sở hữu vị trí trung tâm đích thực — nơi giao thương,
        nhịp sống và giá trị đầu tư hội tụ, kiến tạo sức bật bền vững cho tương
        lai.
      </p>

      <div class="flex flex-col gap-5 pt-4">
        {#each highlights as item}
          <div class="flex gap-4 py-4 border-b border-border-color">
            <div
              class="w-[52px] h-[52px] rounded-full bg-bg-secondary border border-border-color flex items-center justify-center text-2xl shrink-0"
            >
              {item.icon}
            </div>

            <div>
              <h3 class="text-[1.1rem] font-bold text-text-color mb-1">
                {item.title}
              </h3>
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
