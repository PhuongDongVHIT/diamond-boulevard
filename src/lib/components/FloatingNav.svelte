<script>
  let activeSection = 1;

  const sections = [
    { id: 1, label: '01' },
    { id: 2, label: '02' },
    { id: 3, label: '03' },
    { id: 4, label: '04' },
    { id: 5, label: '05' }
  ];

  const socialLinks = [
    { id: '360', isAccent: true },
    { id: 'f', isAccent: false, iconColor: '#1877f2' },
    { id: 'Zalo', isAccent: false, iconColor: '#0068ff' },
    { id: '▶', isAccent: false, iconColor: '#ff0000' }
  ];

  function handleScroll() {
    // Simple mock logic for scroll spy. In a real app this uses IntersectionObserver.
    const scroll = window.scrollY;
    if (scroll < 800) activeSection = 1;
    else if (scroll < 1600) activeSection = 2;
    else if (scroll < 2400) activeSection = 3;
    else if (scroll < 3200) activeSection = 4;
    else activeSection = 5;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="floating-nav left-nav">
  <div class="nav-track">
    {#each sections as section}
      <button class="nav-dot {activeSection === section.id ? 'active' : ''}">
        <span class="label">{section.label}</span>
      </button>
    {/each}
  </div>
</div>

<div class="floating-nav right-nav">
  {#each socialLinks as link}
    <button class="social-fab {link.isAccent ? 'accent-fab' : 'white-fab'}" style="color: {link.iconColor || 'white'}">
      {#if link.id === '360'}
        <span>360°</span>
      {:else if link.id === 'Zalo'}
        <span class="zalo-text">Zalo</span>
      {:else}
        <span class="icon">{link.id}</span>
      {/if}
    </button>
  {/each}
</div>

<style>
  .floating-nav {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
  }

  /* Left Vertical Nav */
  .left-nav {
    left: 2rem;
  }

  .nav-track {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
  }

  /* Connecting line behind dots */
  .nav-track::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 10px;
    bottom: 10px;
    width: 2px;
    background: rgba(0,0,0,0.1);
    z-index: -1;
  }
  
  :global(.dark) .nav-track::before {
    background: rgba(255,255,255,0.1);
  }

  .nav-dot {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-secondary);
    transition: all var(--transition-fast);
    padding: 0;
  }

  .nav-dot:not(.active)::before {
    content: '';
    display: block;
    width: 26px;
    height: 2px;
    background: transparent;
  }

  .nav-dot.active {
    color: var(--accent-color);
  }

  .nav-dot.active::before {
    content: '';
    display: block;
    width: 26px;
    height: 2px;
    background: var(--accent-color);
    margin-right: -26px;
    position: relative;
    z-index: 2;
  }

  /* Right Action FABs */
  .right-nav {
    right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
  }

  .social-fab {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    font-weight: bold;
  }

  .social-fab:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  .accent-fab {
    background: var(--accent-color);
    width: 60px;
    height: 60px; /* Make 360 slightly larger as per target */
    color: white !important;
    font-size: 1.1rem;
  }

  .white-fab {
    background: var(--bg-color);
    font-size: 1.2rem;
  }

  .zalo-text {
    font-size: 0.8rem;
  }

  @media (max-width: 1024px) {
    .left-nav {
      display: none;
    }
    
    .right-nav {
      right: 1rem;
    }
    
    .social-fab {
      width: 44px;
      height: 44px;
    }
    
    .accent-fab {
      width: 54px;
      height: 54px;
    }
  }
</style>
