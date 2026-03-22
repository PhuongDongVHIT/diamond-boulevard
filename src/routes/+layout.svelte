<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Contact from "$lib/components/Contact.svelte";
    import FloatingNav from "$lib/components/FloatingNav.svelte";

  let { children } = $props();
</script>

<Header />

<main class="bg-[#0a2d4f] text-white">
  {@render children()}
</main>
<FloatingNav />
<Contact />
<Footer />
