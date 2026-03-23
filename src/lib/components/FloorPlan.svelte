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
      timtuong: "82.30 m²",
      thongthuy: "74.61 m²",
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

<section class="py-12 md:py-16 relative">
  <div class="max-w-8xl mx-auto px-6 md:px-8">
    <div class="pb-4 md:pb-8">
      <h2
        class="text-3xl sm:text-4xl md:text-6xl font-extrabold italic tracking-tight leading-tight font-playfair text-center"
      >
        Mặt bằng <br /> Diamond Boulevard
      </h2>
    </div>
    <div class="flex justify-center gap-4 mb-10">
      <button
        class="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full font-bold transition-all shadow-sm {activeMainTab ===
        'floor'
          ? 'bg-accent text-white shadow-[0_4px_15px_rgba(239,101,34,0.3)]'
          : 'bg-white/50 text-black hover:bg-white dark:hover:bg-slate-800'}"
        onclick={() => (activeMainTab = "floor")}
      >
        Mặt Bằng Tầng
      </button>
      <button
        class="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full font-bold transition-all shadow-sm {activeMainTab ===
        'apartment'
          ? 'bg-accent text-white shadow-[0_4px_15px_rgba(239,101,34,0.3)]'
          : 'bg-white/50 dark:bg-slate-800/50 text-black hover:bg-white dark:hover:bg-slate-800'}"
        onclick={() => (activeMainTab = "apartment")}
      >
        Thiết Kế Căn Hộ
      </button>
    </div>

    <div class="md:min-h-[600px]">
      {#if activeMainTab === "floor"}
        <div
          class="flex justify-center gap-2 mb-6 flex-wrap"
          in:fade={{ duration: 200 }}
        >
          {#each floorPlans as plan}
            <button
              class="px-6 py-2 rounded-lg font-semibold transition-colors {activeFloor ===
              plan.id
                ? 'bg-bg-secondary text-white border border-accent/20 shadow-sm'
                : 'text-text-secondary hover:'}"
              onclick={() => (activeFloor = plan.id)}
            >
              {plan.name}
            </button>
          {/each}
        </div>

        <div
          class="w-full overflow-hidden md:min-h-[400px] flex items-center justify-center relative"
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
                class="hidden flex-col items-center justify-center p-20 text-text-secondary border-2 border-dashed rounded-xl w-full max-w-2xl"
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
                ? 'bg-bg-secondary text-white border border-accent/20 shadow-sm'
                : 'text-text-secondary hover:'}"
              onclick={() => (activeApartment = apt.id)}
            >
              {apt.name}
            </button>
          {/each}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            class="col-span-1 flex flex-col justify-center bg-bg-secondary p-8"
          >
            <h3 class="text-2xl font-bold mb-8 pb-4 border-b">
              {currentApartment.name}
            </h3>

            <div class="space-y-8">
              <div>
                <div
                  class="text-xs md:text-sm text-text-secondary uppercase tracking-[1px] mb-2 font-semibold"
                >
                  Diện tích tim tường
                </div>
                <div class="text-3xl md:text-4xl font-extrabold text-white">
                  {currentApartment.timtuong}
                </div>
              </div>

              <div>
                <div
                  class="text-xs md:text-sm text-text-secondary uppercase tracking-[1px] mb-2 font-semibold"
                >
                  Diện tích thông thủy
                </div>
                <div class="text-3xl md:text-4xl font-extrabold">
                  {currentApartment.thongthuy}
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-span-1 lg:col-span-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center relative border p-6"
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
                  class="max-w-full max-h-[70vh] object-contain"
                  onerror={handleImageError}
                />
                <!-- Placeholder if image not found -->
                <div
                  class="hidden flex-col items-center justify-center p-20 text-text-secondary border-2 border-dashed rounded-xl w-full h-full min-h-[300px]"
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
  </div>
</section>
