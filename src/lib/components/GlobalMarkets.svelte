<script>
  // GlobalMarkets.svelte
  const markets = [
    {
      id: 'ny',
      name: 'New York',
      description: 'Penthouses with central park views and historic townhouses.',
      colorStart: '#0f172a',
      colorEnd: '#1e293b'
    },
    {
      id: 'la',
      name: 'Los Angeles',
      description: 'Modern glass estates and sprawling celebrity compounds.',
      colorStart: '#1e3a8a',
      colorEnd: '#172554'
    },
    {
      id: 'miami',
      name: 'Miami',
      description: 'Oceanfront villas and ultra-luxury condo towers.',
      colorStart: '#064e3b',
      colorEnd: '#022c22'
    },
    {
      id: 'dubai',
      name: 'Dubai',
      description: 'Architectural marvels and exclusive island retreats.',
      colorStart: '#451a03',
      colorEnd: '#290f02'
    }
  ];
</script>

<section class="global-markets">
  <div class="container">
    <div class="header-container">
      <h2 class="heading-lg">Global Reach, <br/><span style="color: var(--accent-color)">Local Expertise</span></h2>
      <p class="section-desc">We operate in the world's most exclusive real estate markets, providing you with seamless access to elite properties globally.</p>
    </div>

    <div class="markets-grid">
      {#each markets as market}
        <a href={`/markets/${market.id}`} class="market-card" style="--gradient-start: {market.colorStart}; --gradient-end: {market.colorEnd};">
          <div class="bg-overlay"></div>
          <div class="card-content">
            <h3>{market.name}</h3>
            <p>{market.description}</p>
            <div class="explore-btn">Explore Market <span class="arrow">→</span></div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .global-markets {
    padding: 8rem 0;
    background-color: var(--bg-color);
  }

  .header-container {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 5rem;
  }

  .section-desc {
    color: var(--text-secondary);
    font-size: 1.15rem;
    margin-top: 1rem;
    line-height: 1.8;
  }

  .markets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .market-card {
    position: relative;
    height: 380px;
    border-radius: var(--radius-xl);
    overflow: hidden;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border: 1px solid var(--border-color);
    background-color: var(--text-color);
  }

  .market-card .bg-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
    opacity: 0.85;
    transition: opacity var(--transition-normal), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1;
  }

  .market-card::before {
    /* Subtle geometric pattern overlay simulated with box-shadows / gradients */
    content: '';
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%);
    z-index: 2;
    transition: transform 0.8s ease-in-out;
    transform: scale(0.8) translate(-10%, -10%);
  }

  .card-content {
    position: relative;
    z-index: 3;
    transition: transform var(--transition-normal);
  }

  .market-card h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: white;
  }

  .market-card p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .explore-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
  }

  .arrow {
    transition: transform var(--transition-fast);
  }

  .market-card:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  .market-card:hover .bg-overlay {
    opacity: 1;
    transform: scale(1.05); /* subtle zoom effect on hover */
  }

  .market-card:hover::before {
    transform: scale(1) translate(0, 0);
  }

  .market-card:hover .card-content {
    transform: translateY(-5px);
  }

  .market-card:hover .arrow {
    transform: translateX(5px);
  }
</style>
