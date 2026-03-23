<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import FloatingNav from "$lib/components/FloatingNav.svelte";

  let { children } = $props();
</script>

<Header />

<div class="fixed inset-0 -z-10">
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/bg-dianmond-boulevard.webp');"
  ></div>

  <div class="absolute inset-0 bg-[#0a2d4f]/55 mix-blend-multiply"></div>

  <div class="absolute inset-0 bg-gradient-to-b from-[#0a2d4f]/20 via-[#0a2d4f]/40 to-white/10"></div>
</div>
<main class="text-white font-[math] mt-24">
  {@render children()}
  <Contact />
</main>

<FloatingNav />
<Footer />
