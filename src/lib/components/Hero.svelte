<script lang="ts">
  let searchQuery = $state('');

  function handleSearch(e: Event) {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/properties?location=${encodeURIComponent(searchQuery)}`;
    }
  }
</script>

<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content container">
    <div class="hero-text animate-fade-in">
      <h1 class="heading-xl">Find Your Next<br><span class="highlight">Luxury Estate</span></h1>
      <p class="hero-subtitle">Discover absolute excellence. Premium properties curated for your highest standards.</p>
      
      <form class="search-box glass" onsubmit={handleSearch}>
        <div class="input-group">
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input 
            type="text" 
            placeholder="Search by location, property type, or ID" 
            bind:value={searchQuery}
          />
        </div>
        <button type="submit" class="btn btn-primary search-btn">Search</button>
      </form>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    background-image: url('/images/hero.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%);
  }

  /* Always use dark theme text for the hero as the overlay is dark */
  .hero-content {
    position: relative;
    z-index: 10;
    color: #f8fafc;
    width: 100%;
  }

  .hero-text {
    max-width: 700px;
  }

  .heading-xl {
    color: #f8fafc;
    margin-bottom: 1.5rem;
  }

  .highlight {
    color: #60a5fa; /* light blue accent for dark background */
  }

  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 3rem;
    color: #cbd5e1;
    max-width: 500px;
    line-height: 1.5;
  }

  .search-box {
    display: flex;
    padding: 0.5rem;
    border-radius: var(--radius-lg);
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(16px);
  }

  .input-group {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
  }

  .search-icon {
    color: #cbd5e1;
  }

  .search-box input {
    width: 100%;
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 1.1rem;
    outline: none;
    font-family: inherit;
  }

  .search-box input::placeholder {
    color: #94a3b8;
  }

  .search-btn {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    .search-box {
      flex-direction: column;
      padding: 1rem;
    }
    .input-group {
      padding: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 0.5rem;
    }
  }
</style>
