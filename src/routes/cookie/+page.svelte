<script lang="ts">
  import { fadeUp } from '$lib/actions/gsap';

  const sections = [
    {
      title: '1. Cookie là gì?',
      content:
        'Cookie là các tệp dữ liệu nhỏ được lưu trên trình duyệt của người dùng nhằm ghi nhớ thông tin truy cập và cải thiện trải nghiệm sử dụng website.'
    },
    {
      title: '2. Mục đích sử dụng cookie',
      content:
        'Chúng tôi sử dụng cookie để ghi nhớ tùy chọn người dùng, phân tích lưu lượng truy cập và tối ưu hiệu suất hiển thị nội dung trên website.'
    },
    {
      title: '3. Các loại cookie được sử dụng',
      content:
        'Bao gồm cookie phiên làm việc, cookie phân tích hành vi và cookie hỗ trợ cá nhân hóa nội dung hiển thị.'
    },
    {
      title: '4. Quản lý cookie',
      content:
        'Người dùng có thể tùy chỉnh hoặc vô hiệu hóa cookie trong phần cài đặt trình duyệt bất kỳ lúc nào.'
    },
    {
      title: '5. Ảnh hưởng khi tắt cookie',
      content:
        'Việc vô hiệu hóa cookie có thể làm giảm một số chức năng hoặc trải nghiệm cá nhân hóa trên website.'
    },
    {
      title: '6. Cập nhật chính sách',
      content:
        'Chính sách cookie có thể được điều chỉnh định kỳ nhằm phù hợp với công nghệ và quy định hiện hành.'
    }
  ];
</script>

<svelte:head>
  <title>Chính sách Cookie</title>
  <meta
    name="description"
    content="Chính sách sử dụng cookie và cách quản lý cookie khi truy cập website."
  />
</svelte:head>

<section class="relative py-24 bg-slate-950 overflow-hidden min-h-screen">

  <!-- Background -->
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_40%)]"></div>
    <div class="absolute top-1/2 left-0 w-[450px] h-[450px] bg-amber-400/5 rounded-full blur-[130px]"></div>
  </div>

  <div class="max-w-5xl mx-auto px-6 relative z-10">

    <!-- Header -->
    <div class="text-center mb-16 gsap-reveal" use:fadeUp={{ y: 30 }}>
      <p class="text-amber-300 italic text-2xl mb-2">
        Cookie Policy 🍪
      </p>

      <h1 class="text-4xl md:text-6xl font-black text-white tracking-tight">
        Chính Sách <span class="text-amber-300">Cookie</span>
      </h1>

      <p class="mt-6 text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
        Chúng tôi sử dụng cookie nhằm mang lại trải nghiệm truy cập nhanh hơn,
        thông minh hơn và phù hợp hơn với nhu cầu của người dùng.
      </p>
    </div>

    <!-- Content -->
    <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

      <div class="space-y-10">
        {#each sections as section, i}
          <div class="gsap-reveal" use:fadeUp={{ y: 20, delay: i * 0.08 }}>
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
      <div class="mt-14 pt-8 border-t border-white/10 text-slate-400 text-sm leading-relaxed">
        Người dùng tiếp tục truy cập website đồng nghĩa với việc chấp thuận
        chính sách cookie đang được áp dụng tại thời điểm sử dụng.
      </div>

    </div>

  </div>
</section>