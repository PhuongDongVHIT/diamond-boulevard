<script>
  // Amenities.svelte
  const amenities = [
    { title: "Infinity Pool Oasis", icon: "Waves", desc: "Temperature-controlled Olympic size pools overlooking the horizon." },
    { title: "Private Cinema", icon: "Film", desc: "Dolby Atmos equipped 20-seat theatre for exclusive screenings." },
    { title: "Wellness Spa", icon: "Spa", desc: "State-of-the-art hydrotherapy, massage rooms, and Himalayan salt caves." },
    { title: "Helipad Access", icon: "Helicopter", desc: "Private roof-top landing zones providing discrete sky-commutes." },
    { title: "Michelin Dining", icon: "Utensils", desc: "In-house culinary experiences curated by world-renowned chefs." },
    { title: "Elite Fitness Center", icon: "Dumbbell", desc: "A 10,000 sq ft performance hub with cryotherapy chambers." },
  ];
</script>

<section class="amenities-section">
  <div class="container">
    <div class="header-container">
      <h2 class="heading-lg">Unmatched <span class="highlight">Utilities</span></h2>
      <p class="section-desc">Experience a resort lifestyle every single day, with world-class amenities catered to your every whim.</p>
    </div>

    <div class="amenities-grid">
      {#each amenities as amenity}
        <div class="amenity-card glass">
          <div class="icon-orb"></div>
          <div class="card-content">
            <h3 class="amenity-title">{amenity.title}</h3>
            <p class="amenity-desc">{amenity.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .amenities-section {
    padding: 8rem 0;
    background-color: var(--bg-secondary);
    position: relative;
    overflow: hidden;
  }

  /* Decorative glowing orb */
  .amenities-section::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 60vw;
    background: radial-gradient(circle, var(--accent-light) 0%, transparent 60%);
    filter: blur(60px);
    z-index: 0;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.6;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .header-container {
    text-align: center;
    max-width: 650px;
    margin: 0 auto 5rem;
  }

  .highlight {
    color: var(--accent-color);
  }

  .section-desc {
    color: var(--text-secondary);
    font-size: 1.15rem;
    margin-top: 1rem;
    line-height: 1.8;
  }

  .amenities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
  }

  .amenity-card {
    padding: 3rem 2.5rem;
    border-radius: var(--radius-xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid var(--border-color);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  }

  .amenity-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.05);
    border-color: var(--accent-light);
  }

  .icon-orb {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-color) 0%, var(--bg-color) 100%);
    margin-bottom: 2rem;
    position: relative;
    box-shadow: inset 0 0 20px rgba(255,255,255,0.5);
  }

  .icon-orb::after {
    content: '';
    position: absolute;
    inset: 15px;
    border-radius: 50%;
    background: var(--bg-color);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  .amenity-title {
    font-size: 1.4rem;
    color: var(--text-color);
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .amenity-desc {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.05rem;
  }

  @media (max-width: 768px) {
    .amenities-grid {
      grid-template-columns: 1fr;
    }
    
    .amenity-card {
      padding: 2rem;
    }
  }
</style>
