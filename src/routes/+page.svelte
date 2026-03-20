<script>
  import Hero from '$lib/components/Hero.svelte';
  import ProjectDetail from '$lib/components/ProjectDetail.svelte';
  import Amenities from '$lib/components/Amenities.svelte';
  import Products from '$lib/components/Products.svelte';
  import FloorPlan from '$lib/components/FloorPlan.svelte';
  import LocationMap from '$lib/components/LocationMap.svelte';
  import FloatingNav from '$lib/components/FloatingNav.svelte';
  import AspiraContact from '$lib/components/AspiraContact.svelte';

  const title = "Diamond Estates | Premium Luxury Real Estate";
  const desc = "Discover the world's most exclusive luxury real estate. Diamond Estates curates a premium selection of mansions, penthouses, and villas for the elite.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://diamondestates.example.com/" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={desc} />

  <link rel="canonical" href="https://diamondestates.example.com/" />
</svelte:head>

<FloatingNav />

<main>
  <div id="section-1"><Hero /></div>
  <div id="section-2"><ProjectDetail /></div>
  <div id="section-3"><Amenities /></div>
  <div id="section-4"><Products /></div>
  <div id="section-5"><FloorPlan /></div>
  <div id="section-6"><LocationMap /></div>
  <AspiraContact />
</main>

<style>
  main {
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }
</style>
