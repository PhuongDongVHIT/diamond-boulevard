<script>
  // ProjectDetail.svelte
  const stats = [
    { label: "Total Area", value: "350", unit: "Acres" },
    { label: "Exclusive Units", value: "128", unit: "Villas" },
    { label: "Completion", value: "Q4", unit: "2027" },
  ];
</script>

<section class="project-detail">
  <div class="container grid-layout">
    <div class="content-side">
      <h2 class="heading-lg">The <span class="accent-text">Vision</span></h2>
      <p class="lead-text">
        Redefining the essence of ultra-luxury living. Diamond Estates proudly presents an architectural masterpiece merging nature with cutting-edge design.
      </p>
      <p class="body-text">
        Every inch of this project has been meticulously crafted to offer unparalleled privacy, state-of-the-art sustainability, and sweeping panoramic views. This is not just a residence; it's a legacy.
      </p>
      
      <div class="stats-grid">
        {#each stats as stat}
          <div class="stat-item">
            <span class="stat-value">{stat.value}</span>
            <span class="stat-unit">{stat.unit}</span>
            <span class="stat-label">{stat.label}</span>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="visual-side">
      <div class="abstract-image">
        <div class="glass-overlay">
          <div class="play-button">
            <svg viewBox="0 0 24 24" fill="none" class="play-icon">
              <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
            </svg>
          </div>
          <span class="video-label">Watch Project Film</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .project-detail {
    padding: 8rem 0;
    background-color: var(--bg-color);
  }

  .grid-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .accent-text {
    color: var(--accent-color);
  }

  .lead-text {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--text-color);
    margin: 2rem 0 1.5rem;
    line-height: 1.6;
  }

  .body-text {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    line-height: 1.8;
  }

  .stats-grid {
    display: flex;
    gap: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }

  .stat-item {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 3rem;
    font-weight: 800;
    color: var(--accent-color);
    line-height: 1;
    letter-spacing: -1px;
  }

  .stat-unit {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-color);
    margin-top: 0.25rem;
  }

  .stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.5rem;
  }

  .visual-side {
    position: relative;
    height: 100%;
    min-height: 600px;
  }

  .abstract-image {
    position: absolute;
    inset: 0;
    border-radius: var(--radius-xl);
    background: linear-gradient(45deg, var(--bg-secondary) 0%, rgba(37, 99, 235, 0.1) 100%);
    box-shadow: inset 0 0 50px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .abstract-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 20px);
  }

  .glass-overlay {
    position: relative;
    z-index: 2;
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    padding: 2rem 3rem;
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    box-shadow: var(--glass-shadow);
    cursor: pointer;
    transition: transform var(--transition-normal);
  }

  .glass-overlay:hover {
    transform: scale(1.05);
  }

  .play-button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--accent-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px var(--accent-light);
  }

  .play-icon {
    width: 32px;
    height: 32px;
    margin-left: 6px; /* optical alignment */
  }

  .video-label {
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--text-color);
  }

  @media (max-width: 1024px) {
    .grid-layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .visual-side {
      min-height: 400px;
    }
    
    .stats-grid {
      flex-wrap: wrap;
    }
  }
</style>
