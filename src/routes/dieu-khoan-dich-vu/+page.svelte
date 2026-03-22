<script lang="ts">
  const sections = [
    {
      title: "1. Chấp nhận điều khoản",
      content:
        "Khi truy cập và sử dụng website, khách hàng đồng ý tuân thủ toàn bộ các điều khoản và quy định được công bố tại đây.",
    },
    {
      title: "2. Nội dung cung cấp",
      content:
        "Các thông tin trên website được cung cấp nhằm mục đích tham khảo, giới thiệu sản phẩm và hỗ trợ khách hàng tiếp cận thông tin dự án một cách đầy đủ.",
    },
    {
      title: "3. Quyền sở hữu nội dung",
      content:
        "Toàn bộ hình ảnh, nội dung, tài liệu và dữ liệu hiển thị trên website thuộc quyền sở hữu của đơn vị vận hành và không được sao chép nếu chưa có sự đồng ý.",
    },
    {
      title: "4. Giới hạn trách nhiệm",
      content:
        "Chúng tôi không chịu trách nhiệm đối với các thiệt hại phát sinh do việc sử dụng thông tin từ website ngoài phạm vi kiểm soát hợp lý.",
    },
    {
      title: "5. Điều chỉnh dịch vụ",
      content:
        "Nội dung website có thể được cập nhật, điều chỉnh hoặc thay đổi bất kỳ lúc nào nhằm phù hợp với tiến độ dự án và quy định pháp lý hiện hành.",
    },
    {
      title: "6. Liên hệ hỗ trợ",
      content:
        "Mọi thắc mắc liên quan đến điều khoản dịch vụ, khách hàng vui lòng liên hệ bộ phận tư vấn để được hỗ trợ trực tiếp.",
    },
  ];
</script>

<svelte:head>
  <title>Điều khoản dịch vụ</title>
  <meta
    name="description"
    content="Điều khoản sử dụng dịch vụ và quy định áp dụng khi truy cập website."
  />
</svelte:head>

<section class="relative py-24 bg-slate-950 overflow-hidden min-h-screen">
  <!-- Background -->
  <div class="absolute inset-0 z-0">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.08),transparent_40%)]"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px]"
    ></div>
  </div>

  <div class="max-w-5xl mx-auto px-6 relative z-10">
    <!-- Header -->
    <div class="text-center mb-16">
      <p class="text-amber-300 italic text-2xl mb-2">Terms of Service</p>

      <h1 class="text-4xl md:text-6xl font-black text-white tracking-tight">
        Điều Khoản <span class="text-amber-300">Dịch Vụ</span>
      </h1>

      <p class="mt-6 text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
        Việc sử dụng website đồng nghĩa với việc khách hàng chấp thuận các
        nguyên tắc, điều kiện và quy định được áp dụng trong quá trình truy cập
        thông tin và sử dụng dịch vụ.
      </p>
    </div>

    <!-- Content -->
    <div
      class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
    >
      <div class="space-y-10">
        {#each sections as section, i}
          <div class="">
            <h2 class="text-2xl font-bold text-amber-300 mb-3">
              {section.title}
            </h2>

            <p class="text-slate-300 leading-relaxed text-[1.05rem]">
              {section.content}
            </p>
          </div>
        {/each}
      </div>

      <!-- Footer -->
      <div
        class="mt-14 pt-8 border-t border-white/10 text-slate-400 text-sm leading-relaxed"
      >
        Chúng tôi khuyến nghị khách hàng thường xuyên cập nhật nội dung điều
        khoản để nắm rõ các thay đổi mới nhất trong quá trình sử dụng dịch vụ.
      </div>
    </div>
  </div>
</section>
