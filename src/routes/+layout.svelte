<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Contact from "$lib/components/Contact.svelte";

  let { children } = $props();
</script>

<Header />

<main class="bg-[#0a2d4f]">
  {@render children()}
</main>
<Contact />
<Footer />
