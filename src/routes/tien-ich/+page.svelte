<script lang="ts">
  import AmenitiesList from "$lib/components/Amenities.svelte";

  function handleImageError(e: Event) {
    const target = e.currentTarget as HTMLElement;
    if (target) {
      target.style.display = "none";
      if (target.nextElementSibling) {
        (target.nextElementSibling as HTMLElement).style.display = "flex";
      }
    }
  }

  const title =
    "Tiện Ích Nội Khu Diamond Boulevard | Sơ Đồ & Chi Tiết 30+ Hạng Mục";
  const desc =
    "Khám phá bản đồ 30+ tiện ích nội khu đẳng cấp tại Diamond Boulevard: Hồ bơi, Công viên, Khu BBQ, Rạp chiếu phim, Phòng Gym & Yoga tối ưu trải nghiệm sống.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="article" />
</svelte:head>

<!-- Standard Amenities List Component reused -->
<AmenitiesList />
