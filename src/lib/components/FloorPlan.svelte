<script>
  import { fade } from 'svelte/transition';

  // FloorPlan.svelte
  const plans = [
    { id: '3bed', name: '3-Bedroom Villa', area: '4,500 Sq.Ft.', beds: 3, baths: 4, parking: 2 },
    { id: '4bed', name: '4-Bedroom Estate', area: '6,200 Sq.Ft.', beds: 4, baths: 5, parking: 3 },
    { id: '5bed', name: '5-Bedroom Mansion', area: '9,800 Sq.Ft.', beds: 5, baths: 7, parking: 4 },
  ];

  let activePlan = $state(plans[0].id);
  let currentPlan = $derived(plans.find(p => p.id === activePlan) || plans[0]);
</script>

<section class="floorplan-section">
  <div class="container">
    <div class="section-header">
      <h2 class="heading-lg">Master <span style="color: var(--accent-color)">Floor Plans</span></h2>
      <p class="section-desc">Intelligently designed layouts optimizing space, light, and flow.</p>
    </div>

    <div class="floorplan-container glass">
      <div class="tabs">
        {#each plans as plan}
          <button 
            class="tab-btn {activePlan === plan.id ? 'active' : ''}" 
            onclick={() => activePlan = plan.id}
          >
            {plan.name}
          </button>
        {/each}
      </div>

      <div class="plan-content">
        {#key activePlan}
          <div class="plan-details" in:fade={{duration: 300}}>
            <div class="specs-panel">
              <h3>{currentPlan.name} Specs</h3>
              <div class="specs-grid">
                <div class="spec-item">
                  <span class="spec-label">Total Area</span>
                  <span class="spec-value">{currentPlan.area}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Bedrooms</span>
                  <span class="spec-value">{currentPlan.beds}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Bathrooms</span>
                  <span class="spec-value">{currentPlan.baths}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Parking Spaces</span>
                  <span class="spec-value">{currentPlan.parking}</span>
                </div>
              </div>
              <button class="btn btn-secondary action-btn">Download PDF</button>
            </div>
            
            <div class="blueprint-visual">
              <!-- Simulated blueprint lines -->
              <div class="blueprint-grid">
                <div class="bp-room main">Master Suite</div>
                <div class="bp-room living">Living & Dining</div>
                <div class="bp-room kitchen">Open Kitchen</div>
                <div class="bp-room terrace">Outdoor Terrace</div>
              </div>
            </div>
          </div>
        {/key}
      </div>
    </div>
  </div>
</section>

<style>
  .floorplan-section {
    padding: 8rem 0;
    background-color: var(--bg-secondary);
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-desc {
    color: var(--text-secondary);
    font-size: 1.15rem;
    margin-top: 1rem;
  }

  .floorplan-container {
    border-radius: var(--radius-xl);
    padding: 3rem;
    border: 1px solid var(--border-color);
  }

  .tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }

  .tab-btn {
    background: transparent;
    border: 1px solid var(--border-color);
    padding: 1rem 2rem;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-secondary);
    border-radius: 100px;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .tab-btn:hover {
    border-color: var(--accent-light);
    color: var(--text-color);
  }

  .tab-btn.active {
    background: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
    box-shadow: 0 4px 15px rgba(37,99,235,0.3);
  }

  .plan-content {
    min-height: 400px;
  }

  .plan-details {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    align-items: center;
  }

  .specs-panel h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--text-color);
  }

  .specs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .spec-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .spec-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .spec-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color);
  }

  .action-btn {
    width: 100%;
  }

  .blueprint-visual {
    width: 100%;
    aspect-ratio: 4/3;
    background-color: var(--bg-color);
    border: 2px solid var(--accent-light);
    border-radius: var(--radius-lg);
    padding: 2rem;
    position: relative;
    /* Simulate blueprint grid paper */
    background-image: linear-gradient(var(--border-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .blueprint-grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }

  .bp-room {
    border: 2px solid var(--accent-color);
    background-color: var(--accent-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 1rem;
    color: var(--accent-color);
    font-weight: bold;
    border-radius: 4px;
    opacity: 0.8;
  }

  .bp-room.main {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  
  .bp-room.living {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .bp-room.kitchen {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 60%;
  }

  .bp-room.terrace {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    height: 60px;
    align-self: flex-end;
    margin-top: -50px;
  }

  @media (max-width: 992px) {
    .plan-details {
      grid-template-columns: 1fr;
    }
    
    .floorplan-container {
      padding: 2rem;
    }
  }
</style>
