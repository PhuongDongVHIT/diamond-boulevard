<script lang="ts">
  import { fade } from "svelte/transition";

  let { showCta = false } = $props();

  let activeMainTab = $state("floor"); // 'floor' or 'apartment'

  const floorPlans = [
    // { id: 'tongthe', name: 'Mặt Bằng Tiện ích', image: '/images/khong-chu-mat-bang-tang-tien-ich-diamond-boulevard.webp' },
    {
      id: "tang2",
      name: "Mặt Bằng Tầng 02",
      image: "/images/mat-bang-tang-2-diamond-boulevard.webp",
    },
    {
      id: "tang3-30",
      name: "Mặt Bằng Tầng 03-30",
      image: "/images/mat-bang-tang-3-30-diamond-boulevard.webp",
    },
  ];
  let activeFloor = $state(floorPlans[0].id);
  let currentFloor = $derived(
    floorPlans.find((p) => p.id === activeFloor) || floorPlans[0],
  );

  const apartments = [
    {
      id: "studio",
      name: "Studio (CH-11)",
      timtuong: "35.48 m²",
      thongthuy: "30.79 m²",
      image: "/images/can-ho-diamond-boulevard-can-ho-11.webp",
    },
    {
      id: "2pn1wc",
      name: "Căn hộ 2PN - 1WC",
      timtuong: "50.10 m²",
      thongthuy: "43.90 m²",
      image: "/images/can-ho-diamond-boulevard-can-ho-12.webp",
    },
    {
      id: "2pn2wc",
      name: "Căn hộ 2PN - 2WC (CH-01)",
      timtuong: "66.11 m²",
      thongthuy: "59.41 m²",
      image: "/images/can-ho-diamond-boulevard-can-ho-01.webp",
    },
    {
      id: "3pn",
      name: "Căn hộ 3PN",
      timtuong: "84.14 m²",
      thongthuy: "76.12 m²",
      image: "/images/can-ho-diamond-boulevard-can-ho-18.webp",
    },
  ];
  let activeApartment = $state(apartments[0].id);
  let currentApartment = $derived(
    apartments.find((p) => p.id === activeApartment) || apartments[0],
  );

  function handleImageError(e: Event) {
    const target = e.currentTarget as HTMLImageElement;
    if (target) {
      target.style.display = "none";
      if (target.nextElementSibling) {
        (target.nextElementSibling as HTMLElement).style.display = "flex";
      }
    }
  }
</script>

<section class="py-16 bg-bg-color relative">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-[3rem] font-extrabold tracking-tight">
        Mặt Bằng <span class="text-accent">Dự Án</span>
      </h2>
      <p class="text-[1.15rem] text-text-secondary mt-4">
        Thiết kế thông minh tối ưu hóa không gian, 100% căn hộ đón ánh sáng tự
        nhiên và luồng sinh khí.
      </p>
    </div>

    <div class="flex justify-center gap-4 mb-10">
      <button
        class="px-8 py-3 rounded-full font-bold transition-all shadow-sm {activeMainTab ===
        'floor'
          ? 'bg-accent text-black shadow-[0_4px_15px_rgba(239,101,34,0.3)]'
          : 'bg-white/50 dark:bg-slate-800/50 text-text-secondary hover:bg-white dark:hover:bg-slate-800 hover:text-text-color'}"
        onclick={() => (activeMainTab = "floor")}
      >
        Mặt Bằng Tầng
      </button>
      <button
        class="px-8 py-3 rounded-full font-bold transition-all shadow-sm {activeMainTab ===
        'apartment'
          ? 'bg-accent text-black shadow-[0_4px_15px_rgba(239,101,34,0.3)]'
          : 'bg-white/50 dark:bg-slate-800/50 text-text-secondary hover:bg-white dark:hover:bg-slate-800 hover:text-text-color'}"
        onclick={() => (activeMainTab = "apartment")}
      >
        Thiết Kế Căn Hộ
      </button>
    </div>

    <div
      class="bg-white/70 dark:bg-slate-900/75 backdrop-blur-md rounded-[1.5rem] p-4 md:p-8 border border-border-color shadow-lg min-h-[600px]"
    >
      {#if activeMainTab === "floor"}
        <div
          class="flex justify-center gap-2 mb-6 flex-wrap"
          in:fade={{ duration: 200 }}
        >
          {#each floorPlans as plan}
            <button
              class="px-6 py-2 rounded-lg font-semibold transition-colors {activeFloor ===
              plan.id
                ? 'bg-bg-secondary text-accent border border-accent/20 shadow-sm'
                : 'text-text-secondary hover:text-text-color'}"
              onclick={() => (activeFloor = plan.id)}
            >
              {plan.name}
            </button>
          {/each}
        </div>

        <div
          class="w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center relative border border-border-color p-4"
        >
          {#key activeFloor}
            <div
              class="w-full flex justify-center items-center"
              in:fade={{ duration: 300, delay: 50 }}
            >
              <!-- svelte-ignore a11y_img_redundant_alt -->
              <img
                src={currentFloor.image}
                alt={currentFloor.name}
                class="max-w-full max-h-[80vh] object-contain rounded-lg"
                onerror={handleImageError}
              />
              <!-- Placeholder if image not found -->
              <div
                class="hidden flex-col items-center justify-center p-20 text-text-secondary border-2 border-dashed border-border-color rounded-xl w-full max-w-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-16 mb-4 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  /></svg
                >
                <p class="text-lg">
                  Vui lòng tải ảnh <strong
                    >{currentFloor.image.split("/").pop()}</strong
                  >
                  vào thư mục <code>static/images/</code>
                </p>
              </div>
            </div>
          {/key}
        </div>
      {:else}
        <div
          class="flex justify-center gap-2 mb-6 flex-wrap"
          in:fade={{ duration: 200 }}
        >
          {#each apartments as apt}
            <button
              class="px-6 py-2 rounded-lg font-semibold transition-colors {activeApartment ===
              apt.id
                ? 'bg-bg-secondary text-accent border border-accent/20 shadow-sm'
                : 'text-text-secondary hover:text-text-color'}"
              onclick={() => (activeApartment = apt.id)}
            >
              {apt.name}
            </button>
          {/each}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            class="col-span-1 flex flex-col justify-center bg-bg-secondary p-8 rounded-xl border border-border-color shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <h3
              class="text-2xl font-bold text-text-color mb-8 pb-4 border-b border-border-color"
            >
              {currentApartment.name}
            </h3>

            <div class="space-y-8">
              <div>
                <div
                  class="text-[0.85rem] text-text-secondary uppercase tracking-[1px] mb-2 font-semibold"
                >
                  Diện tích tim tường
                </div>
                <div class="text-4xl font-extrabold text-accent">
                  {currentApartment.timtuong}
                </div>
              </div>

              <div>
                <div
                  class="text-[0.85rem] text-text-secondary uppercase tracking-[1px] mb-2 font-semibold"
                >
                  Diện tích thông thủy
                </div>
                <div class="text-4xl font-extrabold text-text-color">
                  {currentApartment.thongthuy}
                </div>
              </div>
            </div>

            <button
              class="mt-12 w-full py-4 rounded-xl font-bold bg-white dark:bg-slate-800 border border-border-color text-text-color hover:bg-accent hover:text-white hover:border-accent transition-colors shadow-sm"
            >
              Nhận Báo Giá Chi Tiết
            </button>
          </div>

          <div
            class="col-span-1 lg:col-span-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center relative border border-border-color p-6"
          >
            {#key activeApartment}
              <div
                class="w-full flex justify-center items-center h-full"
                in:fade={{ duration: 300, delay: 50 }}
              >
                <!-- svelte-ignore a11y_img_redundant_alt -->
                <img
                  src={currentApartment.image}
                  alt={currentApartment.name}
                  class="max-w-full max-h-[70vh] object-contain rounded-lg drop-shadow-sm"
                  onerror={handleImageError}
                />
                <!-- Placeholder if image not found -->
                <div
                  class="hidden flex-col items-center justify-center p-20 text-text-secondary border-2 border-dashed border-border-color rounded-xl w-full h-full min-h-[300px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-16 h-16 mb-4 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    /></svg
                  >
                  <p class="text-lg">
                    Vui lòng tải ảnh <strong
                      >{currentApartment.image.split("/").pop()}</strong
                    >
                    vào thư mục <code>static/images/</code>
                  </p>
                </div>
              </div>
            {/key}
          </div>
        </div>
      {/if}
    </div>

    {#if showCta}
      <div class="flex justify-center mt-16">
        <a
          href="/mat-bang"
          class="inline-flex items-center justify-center px-10 py-4 bg-accent text-black rounded-full font-bold text-lg hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/40 hover:-translate-y-1"
        >
          Xem Bản Vẽ Chi Tiết Tầng 02 & 03-30
        </a>
      </div>
    {/if}
  </div>
</section>
