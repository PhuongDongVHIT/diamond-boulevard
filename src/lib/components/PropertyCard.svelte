<script>
  let { property } = $props();
</script>

<article class="property-card glass">
  <div class="card-image-wrapper">
    <img src={property.imageUrl} alt="{property.title} in {property.location}" class="card-image" loading="lazy">
    <div class="card-badges">
      <span class="badge status">{property.status}</span>
    </div>
    <div class="card-price">
      ${property.price.toLocaleString()}
    </div>
  </div>
  
  <div class="card-body">
    <h3 class="card-title">{property.title}</h3>
    <p class="card-location">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      {property.location}
    </p>
    
    <div class="card-specs">
      <div class="spec">
        <span class="spec-val">{property.beds}</span>
        <span class="spec-label">Beds</span>
      </div>
      <div class="spec-divider"></div>
      <div class="spec">
        <span class="spec-val">{property.baths}</span>
        <span class="spec-label">Baths</span>
      </div>
      <div class="spec-divider"></div>
      <div class="spec">
        <span class="spec-val">{property.sqft.toLocaleString()}</span>
        <span class="spec-label">Sq Ft</span>
      </div>
    </div>
    
    <a href="/properties/{property.id}" class="btn btn-primary view-btn">View Details</a>
  </div>
</article>

<style>
  .property-card {
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
    background-color: var(--bg-color);
  }

  .property-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .card-image-wrapper {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .property-card:hover .card-image {
    transform: scale(1.05);
  }

  .card-badges {
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: flex;
    gap: 0.5rem;
  }

  .badge {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: var(--accent-color);
    color: white;
  }

  .card-price {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    width: 100%;
  }

  .card-body {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .card-specs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .spec {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .spec-val {
    font-weight: 800;
    font-size: 1.1rem;
    color: var(--text-color);
  }

  .spec-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .spec-divider {
    width: 1px;
    height: 24px;
    background-color: var(--border-color);
  }

  .view-btn {
    width: 100%;
  }
</style>
