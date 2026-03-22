<script lang="ts">
  

  const sections = [
    {
      title: '1. Thu thập thông tin',
      content:
        'Chúng tôi thu thập thông tin cá nhân khi khách hàng đăng ký nhận tư vấn, điền biểu mẫu liên hệ hoặc sử dụng các dịch vụ trên website.'
    },
    {
      title: '2. Mục đích sử dụng thông tin',
      content:
        'Thông tin được sử dụng nhằm hỗ trợ tư vấn sản phẩm, gửi thông báo cập nhật dự án, chăm sóc khách hàng và cải thiện chất lượng dịch vụ.'
    },
    {
      title: '3. Bảo mật dữ liệu',
      content:
        'Mọi dữ liệu cá nhân được lưu trữ trên hệ thống bảo mật và chỉ những bộ phận có thẩm quyền mới được truy cập.'
    },
    {
      title: '4. Chia sẻ thông tin',
      content:
        'Chúng tôi cam kết không bán, trao đổi hoặc chia sẻ thông tin khách hàng cho bên thứ ba nếu không có sự đồng ý của khách hàng.'
    },
    {
      title: '5. Quyền lợi khách hàng',
      content:
        'Khách hàng có quyền yêu cầu chỉnh sửa, cập nhật hoặc xóa thông tin cá nhân bất kỳ lúc nào.'
    }
  ];
</script>

<svelte:head>
  <title>Chính sách bảo mật</title>
  <meta
    name="description"
    content="Chính sách bảo mật thông tin khách hàng và cam kết bảo vệ dữ liệu cá nhân."
  />
</svelte:head>

<section class="relative py-24 bg-slate-950 overflow-hidden min-h-screen">

  <!-- Background -->
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_40%)]"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px]"></div>
  </div>

  <div class="max-w-5xl mx-auto px-6 relative z-10">

    <!-- Header -->
    <div class="text-center mb-16 " >
      <p class="text-amber-300 italic text-2xl mb-2">
        Privacy Policy
      </p>

      <h1 class="text-4xl md:text-6xl font-black text-white tracking-tight">
        Chính Sách <span class="text-amber-300">Bảo Mật</span>
      </h1>

      <p class="mt-6 text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
        Chúng tôi cam kết bảo vệ tuyệt đối thông tin cá nhân của khách hàng và chỉ sử dụng
        dữ liệu nhằm nâng cao trải nghiệm dịch vụ một cách minh bạch, an toàn.
      </p>
    </div>

    <!-- Content Card -->
    <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

      <div class="space-y-10">
        {#each sections as section, i}
          <div class="" >
            <h2 class="text-2xl font-bold text-amber-300 mb-3">
              {section.title}
            </h2>

            <p class="text-slate-300 leading-relaxed text-[1.05rem]">
              {section.content}
            </p>
          </div>
        {/each}
      </div>

      <!-- Footer note -->
      <div class="mt-14 pt-8 border-t border-white/10 text-slate-400 text-sm leading-relaxed">
        Chính sách này có thể được cập nhật theo thời gian để phù hợp với quy định pháp luật
        và nhu cầu vận hành dịch vụ.
      </div>

    </div>

  </div>
</section>