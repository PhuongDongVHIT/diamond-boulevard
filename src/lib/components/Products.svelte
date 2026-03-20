<script>
  // Products.svelte
  const products = [
    {
      id: "signature",
      title: "The Signature Villa",
      subtitle: "6 Bedrooms | 12,000 Sq.Ft.",
      desc: "An architectural marvel featuring multiple cascading levels, an indoor-outdoor living concept, and a private supercar gallery. Built for those who demand ultimate space and prestige.",
      features: ["Private Cinema", "Infinity Edge Pool", "Smart Home Integration"],
      align: "left"
    },
    {
      id: "penthouse",
      title: "Penthouse Collection",
      subtitle: "4 Bedrooms | 8,500 Sq.Ft.",
      desc: "Crowning the highest floors, these penthouses offer unobstructed 360-degree views, double-height ceilings, and private rooftop terraces with dining pavilions.",
      features: ["Private Elevator", "Rooftop Terrace", "Chef's Kitchen"],
      align: "right"
    }
  ];
</script>

<section class="products-section">
  <div class="container">
    <div class="section-header">
      <h2 class="heading-lg">The <span style="color: var(--accent-color)">Collections</span></h2>
      <p class="section-desc">Discover the masterful product typologies available in this exclusive release.</p>
    </div>

    <div class="products-list">
      {#each products as product}
        <div class={`product-row align-${product.align}`}>
          <div class="product-image-container glass">
            <div class="image-placeholder">
              <!-- Geometric abstraction for property -->
              <div class="geo-shape"></div>
              <div class="geo-shape alt"></div>
            </div>
          </div>
          <div class="product-info">
            <h4 class="product-subtitle">{product.subtitle}</h4>
            <h3 class="product-title">{product.title}</h3>
            <p class="product-desc">{product.desc}</p>
            
            <ul class="feature-list">
              {#each product.features as feature}
                <li><span class="bullet"></span>{feature}</li>
              {/each}
            </ul>
            
            <button class="btn btn-primary mt-action">View Specifications</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .products-section {
    padding: 8rem 0;
    background-color: var(--bg-color);
  }

  .section-header {
    text-align: center;
    margin-bottom: 6rem;
  }

  .section-desc {
    color: var(--text-secondary);
    font-size: 1.15rem;
    margin-top: 1rem;
  }

  .products-list {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  .product-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .product-row.align-right .product-image-container {
    order: 2;
  }
  .product-row.align-right .product-info {
    order: 1;
  }

  .product-image-container {
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: var(--radius-xl);
    overflow: hidden;
    position: relative;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-color) 100%);
    border-radius: var(--radius-lg);
    box-shadow: inset 0 0 30px rgba(0,0,0,0.05);
    overflow: hidden;
  }

  .geo-shape {
    position: absolute;
    bottom: 0;
    left: 20%;
    width: 60%;
    height: 70%;
    background: var(--text-color);
    border-radius: var(--radius-sm) var(--radius-sm) 0 0;
    opacity: 0.05;
  }

  .geo-shape.alt {
    left: 40%;
    height: 40%;
    width: 50%;
    background: var(--accent-color);
    opacity: 0.1;
  }

  .product-subtitle {
    color: var(--accent-color);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .product-title {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 1.5rem;
    line-height: 1.2;
    font-weight: 800;
  }

  .product-desc {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .feature-list {
    list-style: none;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .feature-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.05rem;
    color: var(--text-color);
    font-weight: 500;
  }

  .bullet {
    width: 8px;
    height: 8px;
    background-color: var(--accent-color);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-color);
  }

  .mt-action {
    padding: 1rem 2.5rem;
    font-size: 1.05rem;
  }

  @media (max-width: 992px) {
    .product-row {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .product-row.align-right .product-image-container,
    .product-row.align-right .product-info {
      order: unset;
    }
  }
</style>
