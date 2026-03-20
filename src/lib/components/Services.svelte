<script>
  // Services.svelte
  const services = [
    {
      title: 'Buyer Representation',
      description: 'Navigate the complex luxury market with our expert agents who negotiate fiercely on your behalf, ensuring you find the perfect estate at the right price.',
      icon: 'key'
    },
    {
      title: 'Seller Concierge',
      description: 'Our proprietary marketing strategies put your property in front of high-net-worth buyers globally. We handle everything from staging to final closing.',
      icon: 'home'
    },
    {
      title: 'Private Listings',
      description: 'Access our hidden portfolio of off-market properties. We respect our clients\' privacy and facilitate discrete transactions for ultra-luxury homes.',
      icon: 'lock'
    }
  ];
</script>

<section class="services-section">
  <div class="container">
    <div class="section-header animate-fade-in">
      <h2 class="heading-lg">Exquisite <span style="color: var(--accent-color)">Services</span></h2>
      <p class="section-desc">Tailored real estate solutions for the world's most discerning clientele.</p>
    </div>

    <div class="services-grid">
      {#each services as service}
        <div class="service-card glass">
          <div class="icon-wrapper">
            {#if service.icon === 'key'}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
            {:else if service.icon === 'home'}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            {/if}
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href="/contact" class="learn-more">Learn more <span>→</span></a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services-section {
    padding: 8rem 0;
    background-color: var(--bg-color);
    position: relative;
    overflow: hidden;
  }

  /* Decorative background element */
  .services-section::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -10vw;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--accent-light) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
    opacity: 0.5;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-desc {
    color: var(--text-secondary);
    font-size: 1.15rem;
    margin-top: 1rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
  }

  .service-card {
    padding: 3rem 2rem;
    border-radius: var(--radius-xl);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid var(--border-color);
    background: linear-gradient(145deg, var(--bg-color) 0%, var(--bg-secondary) 100%);
  }

  /* Override glass specifically if needed, but linear gradient looks more solid luxury */
  .service-card.glass {
    background: var(--glass-bg);
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: var(--accent-light);
  }

  .icon-wrapper {
    width: 64px;
    height: 64px;
    background: var(--accent-color);
    color: white;
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    box-shadow: 0 10px 20px var(--accent-light);
  }

  .service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  .service-card p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
    flex-grow: 1;
  }

  .learn-more {
    font-weight: 600;
    color: var(--accent-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
    width: max-content;
  }

  .learn-more span {
    transition: transform var(--transition-fast);
  }

  .learn-more:hover span {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
