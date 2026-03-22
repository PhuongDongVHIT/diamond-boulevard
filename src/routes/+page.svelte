<script>
  import Carousel from "$lib/components/Carousel.svelte";
  import ProjectDetail from "$lib/components/ProjectDetail.svelte";
  import Amenities from "$lib/components/Amenities.svelte";
  import FloorPlan from "$lib/components/FloorPlan.svelte";
  import LocationMap from "$lib/components/LocationMap.svelte";
  import PaymentMethods from "$lib/components/PaymentMethods.svelte";
  import LegalGallery from "$lib/components/LegalGallery.svelte";
  import Seo from "$lib/actions/seo.svelte";
</script>

<Seo
  title="Giới thiệu về Diamond Boulevard"
  desc="Tìm hiểu về dự án căn hộ cao cấp Diamond Boulevard tại trung tâm."
  path="/gioi-thieu"
  image="https://diamondboulevard.example.com/images/gioi-thieu-banner.jpg"
/>

<main class="relative w-full overflow-x-hidden pt-24">
  <div id="section-1"><Carousel /></div>
  <div id="section-2"><ProjectDetail /></div>
  <div id="section-5"><LocationMap /></div>
  <div id="section-4"><FloorPlan showCta={true} /></div>
  <div id="section-3"><Amenities showCta={true} /></div>
  <div id="payment"><PaymentMethods /></div>
  <div id="payment"><LegalGallery /></div>
</main>
