<script>
  import PropertyCard from '$lib/components/PropertyCard.svelte';
  
  const title = "Luxury Real Estate Listings | Diamond Estates";
  const desc = "Browse our exclusive collection of luxury real estate, featuring premium mansions, penthouses, and stunning estates worldwide. Find your dream home today.";

  let properties = $state([
    {
      id: 'prop-1',
      title: 'Skyline Penthouse Suites',
      location: 'New York, NY',
      price: 8500000,
      beds: 4,
      baths: 5,
      sqft: 4200,
      imageUrl: '/images/property_1.png',
      status: 'For Sale'
    },
    {
      id: 'prop-2',
      title: 'Oceanview Mediterranean Villa',
      location: 'Malibu, CA',
      price: 15900000,
      beds: 6,
      baths: 8,
      sqft: 8500,
      imageUrl: '/images/property_2.png',
      status: 'Just Listed'
    },
    {
      id: 'prop-3',
      title: 'Modern Glass Estate',
      location: 'Beverly Hills, CA',
      price: 24500000,
      beds: 7,
      baths: 9,
      sqft: 12000,
      imageUrl: '/images/hero.png',
      status: 'Exclusive'
    },
    {
      id: 'prop-4',
      title: 'Tuscan Countryside Manor',
      location: 'Tuscany, Italy',
      price: 12500000,
      beds: 8,
      baths: 9,
      sqft: 9800,
      imageUrl: '/images/property_2.png',
      status: 'For Sale'
    },
    {
      id: 'prop-5',
      title: 'Ultra-Modern Cliff House',
      location: 'Cape Town, SA',
      price: 9800000,
      beds: 5,
      baths: 6,
      sqft: 6500,
      imageUrl: '/images/property_1.png',
      status: 'Under Offer'
    },
    {
      id: 'prop-6',
      title: 'Private Island Retreat',
      location: 'Exumas, Bahamas',
      price: 35000000,
      beds: 12,
      baths: 14,
      sqft: 22000,
      imageUrl: '/images/hero.png',
      status: 'Exclusive'
    }
  ]);

  let filterType = $state('All');
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://diamondestates.example.com/properties" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={desc} />

  <link rel="canonical" href="https://diamondestates.example.com/properties" />
</svelte:head>

<div class="page-header">
  <div class="page-header-bg"></div>
  <div class="container page-header-content">
    <h1 class="heading-xl">Exclusive <span style="color: var(--accent-color)">Properties</span></h1>
    <p class="subtitle">Discover our portfolio of extraordinary luxury residences curated for absolute perfection.</p>
  </div>
</div>

<div class="container filters-section">
  <div class="filter-controls glass">
    <button class="filter-btn {filterType === 'All' ? 'active' : ''}" onclick={() => filterType = 'All'}>All Listings</button>
    <button class="filter-btn {filterType === 'For Sale' ? 'active' : ''}" onclick={() => filterType = 'For Sale'}>For Sale</button>
    <button class="filter-btn {filterType === 'Exclusive' ? 'active' : ''}" onclick={() => filterType = 'Exclusive'}>Exclusives</button>
    <button class="filter-btn {filterType === 'Just Listed' ? 'active' : ''}" onclick={() => filterType = 'Just Listed'}>Just Listed</button>
  </div>
  <div class="results-count">
    Showing {properties.length} ultimate properties
  </div>
</div>

<section class="properties-container container">
  <div class="property-grid animate-fade-in">
    {#each properties as property (property.id)}
      {#if filterType === 'All' || property.status === filterType}
        <PropertyCard {property} />
      {/if}
    {/each}
  </div>
</section>

<style>
  .page-header {
    position: relative;
    padding: 10rem 0 5rem;
    overflow: hidden;
    background-color: var(--bg-secondary);
  }

  .page-header-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at top right, var(--accent-light) 0%, transparent 60%);
    pointer-events: none;
  }

  .page-header-content {
    position: relative;
    z-index: 10;
    text-align: center;
  }

  .subtitle {
    max-width: 600px;
    margin: 1.5rem auto 0;
    font-size: 1.2rem;
    color: var(--text-secondary);
  }

  .filters-section {
    margin-top: -2rem;
    position: relative;
    z-index: 20;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .filter-controls {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: var(--radius-lg);
    background: var(--bg-color);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  .filter-btn {
    background: transparent;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .filter-btn:hover {
    color: var(--text-color);
  }

  .filter-btn.active {
    background: var(--accent-color);
    color: white;
  }

  .results-count {
    color: var(--text-secondary);
    font-weight: 500;
  }

  .properties-container {
    padding-bottom: 6rem;
    min-height: 60vh;
  }

  .property-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    .filter-controls {
      width: 100%;
      overflow-x: auto;
    }
    .filter-btn {
      white-space: nowrap;
    }
    .results-count {
      width: 100%;
      text-align: center;
    }
  }
</style>
