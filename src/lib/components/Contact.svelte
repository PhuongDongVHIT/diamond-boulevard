<script lang="ts">
  let name = $state("");
  let phone = $state("");
  let email = $state("");
  let apartmentType = $state("");
  let message = $state("");

  let errors: Record<string, string> = $state({});
  let loading = $state(false);
  let success = $state("");
  let serverError = $state("");

  function validate() {
    errors = {};

    if (!name.trim()) {
      errors.name = "Vui lòng nhập họ tên";
    }

    if (!/^0\d{9,10}$/.test(phone)) {
      errors.phone = "Số điện thoại không hợp lệ";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email không hợp lệ";
    }

    return Object.keys(errors).length === 0;
  }

  async function submitForm() {
    success = "";
    serverError = "";

    if (!validate()) return;

    loading = true;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          apartmentType,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gửi thất bại");
      }

      success = "Gửi thành công 🎉";

      name = "";
      phone = "";
      email = "";
      apartmentType = "";
      message = "";
    } catch (err: any) {
      serverError = err.message;
      console.error(err);
    }

    loading = false;
  }
</script>

<section class="relative py-16 md:py-24 lg:py-32 min-h-[800px] bg-center bg-cover bg-no-repeat">
  <div class="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
    <div
      class="flex flex-col lg:flex-row rounded-[1.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.3)] mb-16"
    >
      <!-- Left -->
      <div
        class="flex-1 bg-accent text-bg-color py-12 md:py-16 px-6 md:px-12 flex flex-col"
      >
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] mb-8 md:mb-12 uppercase"
        >
          Diamond Boulevard
        </h2>

        <div class="flex flex-col gap-4 md:gap-6 mb-auto">
          <div class="flex items-start gap-4 text-sm md:text-base font-medium">
            <span class="text-xl">📞</span>
            <p>0799 036 842</p>
          </div>

          <div class="flex items-start gap-4 text-sm md:text-base font-medium">
            <span class="text-xl">📍</span>
            <p>Quốc lộ 13, Thuận Giao, TP.Thuận An, Bình Dương</p>
          </div>

          <div class="flex items-start gap-4 text-sm md:text-base font-medium">
            <span class="text-xl">✉️</span>
            <p>info@diamondboulevard.io.vn</p>
          </div>
        </div>

        <div class="mt-12 w-full h-[300px] rounded-lg overflow-hidden">
          <iframe
            title="Bản đồ vị trí"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            class="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <!-- Right -->
      <div class="flex-[1.2] py-16 px-8 md:px-12 bg-white/85 backdrop-blur-xl">
        <h3 class="text-2xl font-extrabold text-center mb-8 uppercase">
          LIÊN HỆ TƯ VẤN
        </h3>

        <form onsubmit={(e) => { e.preventDefault(); submitForm(); }} class="flex flex-col gap-5">
          <div>
            <input
              bind:value={name}
              placeholder="Họ tên"
              class="w-full px-6 py-4 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
            />
            {#if errors.name}
              <p class="text-red-500 text-sm mt-1">{errors.name}</p>
            {/if}
          </div>

          <div>
            <input
              bind:value={phone}
              placeholder="Số điện thoại"
              class="w-full px-6 py-4 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
            />
            {#if errors.phone}
              <p class="text-red-500 text-sm mt-1">{errors.phone}</p>
            {/if}
          </div>

          <div>
            <input
              bind:value={email}
              placeholder="Email"
              class="w-full px-6 py-4 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
            />
            {#if errors.email}
              <p class="text-red-500 text-sm mt-1">{errors.email}</p>
            {/if}
          </div>

          <input
            bind:value={apartmentType}
            placeholder="Loại căn cần tư vấn"
            class="w-full px-6 py-4 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            bind:value={message}
            rows="4"
            placeholder="Nội dung tư vấn"
            class="w-full px-6 py-4 rounded-2xl border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            class="w-full py-3 md:py-4 rounded-full bg-accent text-bg-color font-bold hover:bg-accent-hover transition disabled:opacity-50 text-sm md:text-base"
          >
            {loading ? "Đang gửi..." : "Đăng ký nhận báo giá"}
          </button>

          {#if success}
            <p class="text-green-600 text-center font-medium">{success}</p>
          {/if}

          {#if serverError}
            <p class="text-red-500 text-center font-medium">{serverError}</p>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>
