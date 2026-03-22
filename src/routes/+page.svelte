<script>
  // import Carousel from "$lib/components/Carousel.svelte";
  import ProjectDetail from "$lib/components/ProjectDetail.svelte";
  // import Amenities from "$lib/components/Amenities.svelte";
  // import FloorPlan from "$lib/components/FloorPlan.svelte";
  // import LocationMap from "$lib/components/LocationMap.svelte";
  // import PaymentMethods from "$lib/components/PaymentMethods.svelte";
  //   import Contact from "$lib/components/Contact.svelte";
  //   import LegalGallery from "$lib/components/LegalGallery.svelte";
  const title = "Diamond Boulevard | Dự Án Căn Hộ Cao Cấp Quốc Lộ 13";
  const desc =
    "Sống tại trung tâm giao điểm phồn hoa. Diamond Boulevard mang đến  căn hộ cao cấp chuẩn chuyên gia với 30+ tiện ích nội khu đỉnh cao.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://diamondboulevard.example.com/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={desc} />
  <link rel="canonical" href="https://diamondboulevard.example.com/" />
</svelte:head>

<main class="relative w-full overflow-x-hidden">
  <!-- <div id="section-1"><Carousel /></div> -->
  <div id="section-2"><ProjectDetail /></div>
  <!-- <div id="section-5"><LocationMap /></div>
  <div id="section-4"><FloorPlan showCta={true} /></div>
  <div id="section-3"><Amenities showCta={true} /></div>
  <div id="payment"><PaymentMethods /></div>
  <div id="payment"><LegalGallery /></div> -->
</main>
