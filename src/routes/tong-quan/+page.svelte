<script lang="ts">
    import Contact from '$lib/components/Contact.svelte';
    import ProjectDetail from '$lib/components/ProjectDetail.svelte';

  const title = "Diamond Boulevard | Khám Phá Tâm Điểm Tinh Hoa";
  const desc = "Căn hộ mặt tiền QL13 cạnh AEON Mall. Trải nghiệm không gian sống với 30+ tiện ích nội khu, 2 tầng hầm và vị trí đắc địa tại trái tim Đông Bắc TP.HCM.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
</svelte:head>

<main class="relative w-full overflow-x-hidden">
  <div id="section-2"><ProjectDetail /></div>
</main>
