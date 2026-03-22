<script lang="ts">
  import FloorPlanComponent from '$lib/components/FloorPlan.svelte';
  import { fadeUp } from '$lib/actions/gsap';

  function handleImageError(e: Event) {
    const target = e.currentTarget as HTMLElement;
    if (target) {
      target.style.display = 'none';
      if (target.nextElementSibling) {
        (target.nextElementSibling as HTMLElement).style.display = 'flex';
      }
    }
  }

  const title = "Mặt Bằng Căn Hộ Diamond Boulevard | Thiết Kế Tầng 02 & 03-30";
  const desc = "Chi tiết mặt bằng tầng và thiết kế từng loại căn hộ tại dự án Diamond Boulevard Bình Dương. Xem trực quan bản vẽ kiến trúc các dòng Studio, 2PN, 3PN với diện tích tối ưu.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="article" />
</svelte:head>


<section>
  <img src="/images/diamond-boulecvard-phuong-thuc-thanh-toan.webp" class="w-full rounded-xl" alt="" srcset="">
</section>