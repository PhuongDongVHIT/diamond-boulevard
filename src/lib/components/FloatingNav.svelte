<script>
  let activeSection = 1;

  const sections = [
    { id: 1, label: "01" },
    { id: 2, label: "02" },
    { id: 3, label: "03" },
    { id: 4, label: "04" },
    { id: 5, label: "05" },
  ];

  const socialLinks = [
    { id: "360", isAccent: true },
    { id: "f", isAccent: false, iconColor: "#1877f2" },
    { id: "Zalo", isAccent: false, iconColor: "#0068ff" },
    { id: "▶", isAccent: false, iconColor: "#ff0000" },
  ];

  function handleScroll() {
    const scroll = window.scrollY;
    if (scroll < 800) activeSection = 1;
    else if (scroll < 1600) activeSection = 2;
    else if (scroll < 2400) activeSection = 3;
    else if (scroll < 3200) activeSection = 4;
    else activeSection = 5;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="fixed top-1/2 -translate-y-1/2 z-[100] left-8 hidden lg:block">
  <div class="flex flex-col gap-8 relative">
    <div
      class="absolute left-[12px] top-[10px] bottom-[10px] w-[2px] bg-black/10 dark:bg-white/10 -z-10"
    ></div>
    {#each sections as section}
      <button
        class="bg-transparent border-none flex items-center cursor-pointer text-[0.9rem] font-bold transition-colors p-0 {activeSection ===
        section.id
          ? 'text-accent'
          : 'text-text-secondary'}"
      >
        {#if activeSection === section.id}
          <div
            class="w-[26px] h-[2px] bg-accent -mr-[26px] relative z-10"
          ></div>
        {:else}
          <div class="w-[26px] h-[2px] bg-transparent"></div>
        {/if}
        <span
          class="relative z-20"
          class:ml-[26px]={activeSection !== section.id}>{section.label}</span
        >
      </button>
    {/each}
  </div>
</div>

<div
  class="fixed top-1/2 -translate-y-1/2 z-[100] right-4 lg:right-8 flex flex-col gap-4 items-end"
>
  {#each socialLinks as link}
    <button
      class="rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] font-bold {link.isAccent
        ? 'bg-accent text-white w-14 h-14 lg:w-[60px] lg:h-[60px] text-[1.1rem]'
        : 'bg-bg-color w-11 h-11 lg:w-[50px] lg:h-[50px] text-[1.2rem]'}"
      style="color: {link.iconColor || 'inherit'}"
    >
      {#if link.id === "360"}
        <span>360&deg;</span>
      {:else if link.id === "Zalo"}
        <span class="text-xs">Zalo</span>
      {:else}
        <span>{link.id}</span>
      {/if}
    </button>
  {/each}
</div>
