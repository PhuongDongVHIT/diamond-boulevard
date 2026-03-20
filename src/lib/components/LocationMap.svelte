<script>
  // LocationMap.svelte
  const locations = [
    { name: "International Airport", distance: "15 mins", icon: "✈️" },
    { name: "Financial District", distance: "20 mins", icon: "🏢" },
    { name: "Luxury Marina", distance: "5 mins", icon: "🛥️" },
    { name: "Designer Boutiques", distance: "10 mins", icon: "🛍️" },
  ];
</script>

<section class="location-section">
  <div class="container grid-layout">
    <div class="content-side">
      <h2 class="heading-lg">Unrivaled <br><span class="accent-text">Connectivity</span></h2>
      <p class="body-text">
        Situated in the city's most coveted enclave, the project offers sanctuary from the bustle while maintaining effortless proximity to global transit hubs and prime cultural districts.
      </p>
      
      <div class="locations-list">
        {#each locations as loc}
          <div class="loc-item">
            <span class="loc-icon">{loc.icon}</span>
            <span class="loc-name">{loc.name}</span>
            <div class="loc-distance-bar">
              <span class="loc-distance">{loc.distance}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <div class="map-side">
      <div class="map-container glass">
        <!-- Abstract map visual -->
        <div class="map-bg"></div>
        <div class="pin center-pin">
          <div class="pulse"></div>
          💎
        </div>
        <div class="pin loc-1" style="top: 20%; left: 80%;">✈️</div>
        <div class="pin loc-2" style="top: 70%; left: 20%;">🏢</div>
        <div class="pin loc-3" style="top: 50%; left: 60%;">🛥️</div>
      </div>
    </div>
  </div>
</section>

<style>
  .location-section {
    padding: 8rem 0;
    background-color: var(--bg-color);
    position: relative;
    overflow: hidden;
  }

  /* Decorative background */
  .location-section::before {
    content: '';
    position: absolute;
    bottom: -20%;
    right: -10%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, var(--accent-light) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
    opacity: 0.4;
  }

  .grid-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 6rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .accent-text {
    color: var(--accent-color);
  }

  .body-text {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin: 2rem 0 3rem;
    line-height: 1.8;
  }

  .locations-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .loc-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
  }

  .loc-icon {
    font-size: 1.5rem;
    background: var(--bg-secondary);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loc-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
    min-width: 160px;
  }

  .loc-distance-bar {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }

  .loc-distance {
    background: var(--accent-light);
    color: var(--accent-color);
    padding: 0.4rem 1rem;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }

  .map-side {
    height: 600px;
  }

  .map-container {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-xl);
    position: relative;
    overflow: hidden;
    padding: 1rem;
    border: 1px solid var(--glass-border);
    box-shadow: 0 30px 60px rgba(0,0,0,0.08);
  }

  .map-bg {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-color) 100%);
    position: relative;
    overflow: hidden;
  }

  /* Abstract roads/rivers */
  .map-bg::before {
    content: '';
    position: absolute;
    top: -50%;
    left: 20%;
    width: 100px;
    height: 200%;
    background: rgba(37, 99, 235, 0.03);
    transform: rotate(30deg);
  }
  
  .map-bg::after {
    content: '';
    position: absolute;
    top: 40%;
    left: -20%;
    width: 150%;
    height: 60px;
    background: rgba(37, 99, 235, 0.05);
    transform: rotate(-15deg);
  }

  .pin {
    position: absolute;
    background: white;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    font-size: 1.2rem;
    transform: translate(-50%, -50%);
    z-index: 10;
    border: 2px solid white;
  }

  .center-pin {
    top: 50%;
    left: 45%;
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    background: var(--bg-color);
    border: 3px solid var(--accent-color);
  }

  .pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--accent-color);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.5;
    animation: pulseAnim 2s infinite cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  @keyframes pulseAnim {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(2.5); opacity: 0; }
  }

  @media (max-width: 1024px) {
    .grid-layout {
      grid-template-columns: 1fr;
    }
    .map-side {
      height: 450px;
    }
  }
</style>
