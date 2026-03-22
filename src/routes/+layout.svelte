<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Contact from "$lib/components/Contact.svelte";

  let { children } = $props();
</script>

<Header />

<main>
  {@render children()}
</main>
<Contact />
<Footer />
