<script>
  const testimonials = [
    {
      id: 1,
      quote:
        "Diamond Boulevard đã cung cấp cho chúng tôi một bất động sản thậm chí còn chưa kịp đưa ra thị trường. Sự kín đáo và mạng lưới của họ đơn giản là vô song.",
      author: "Jonathan R.",
      title: "Giám Đốc Công Nghệ",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Đội ngũ dịch vụ khách hàng đã nâng tầm căn hộ penthouse của tôi và đạt được mức giá bán kỷ lục chỉ trong hai tuần kể từ khi niêm yết.",
      author: "Eleanor S.",
      title: "Nhà Sưu Tập Nghệ Thuật",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Đỉnh cao của sự chuyên nghiệp. Họ thấu hiểu ngay lập tức các yêu cầu về lối sống và trải nghiệm cốt lõi của chúng tôi cho một dinh thự ven biển.",
      author: "Marcus W.",
      title: "Nhà Đầu Tư Quốc Tế",
      rating: 5,
    },
  ];
</script>

<section
  class="py-32 bg-bg-secondary relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border-color before:to-transparent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-border-color after:to-transparent"
>
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center mb-20">
      <h2 class="text-4xl md:text-[3rem] font-extrabold tracking-tight">
        Câu Chuyện <span class="text-accent">Khách Hàng</span>
      </h2>
      <p class="text-[1.15rem] text-text-secondary mt-4">
        Lắng nghe từ những khách hàng sở hữu tiêu chuẩn khắt khe nhất thế giới.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {#each testimonials as item}
        <div
          class="bg-bg-color p-10 md:p-12 rounded-[1.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.05)] relative border border-border-color transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
        >
          <div
            class="absolute -top-5 left-8 md:left-12 text-[5rem] leading-none font-serif text-accent-light font-bold select-none"
          >
            "
          </div>
          <div class="text-yellow-400 mb-6 text-xl tracking-[2px] flex">
            {#each Array(item.rating) as _}
              <span>★</span>
            {/each}
          </div>
          <p class="text-[1.1rem] leading-relaxed text-text-color mb-10 italic">
            {item.quote}
          </p>
          <div
            class="flex items-center gap-5 border-t border-border-color pt-6"
          >
            <div
              class="min-w-12 w-12 h-12 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-[1.2rem]"
            >
              {item.author.charAt(0)}
            </div>
            <div>
              <h4 class="m-0 text-[1.1rem] font-bold text-text-color">
                {item.author}
              </h4>
              <p class="m-0 text-[0.9rem] text-text-secondary">{item.title}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
