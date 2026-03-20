<script>
  // Testimonials.svelte
  const testimonials = [
    {
      id: 1,
      quote: "Diamond Estates found us a property that wasn't even on the market. Their discretion and access are simply unparalleled in the industry.",
      author: "Jonathan R.",
      title: "Tech Executive",
      rating: 5
    },
    {
      id: 2,
      quote: "The seller concierge team transformed my penthouse and secured a record-breaking sale price within just two weeks of listing.",
      author: "Eleanor S.",
      title: "Art Collector",
      rating: 5
    },
    {
      id: 3,
      quote: "Pinnacle of professionalism. They understood our precise security and lifestyle requirements for a waterfront estate immediately.",
      author: "Marcus W.",
      title: "International Investor",
      rating: 5
    }
  ];
</script>

<section class="testimonials">
  <div class="container">
    <div class="header-container">
      <h2 class="heading-lg">Client <span class="highlight">Stories</span></h2>
      <p class="section-desc">Hear from those who demand nothing but the absolute best.</p>
    </div>

    <div class="testimonial-grid">
      {#each testimonials as item}
        <div class="testimonial-card">
          <div class="quote-icon">"</div>
          <div class="stars">
            {#each Array(item.rating) as _}
              <span class="star">★</span>
            {/each}
          </div>
          <p class="quote-text">{item.quote}</p>
          <div class="author-info">
            <div class="author-avatar">
              {item.author.charAt(0)}
            </div>
            <div>
              <h4 class="author-name">{item.author}</h4>
              <p class="author-title">{item.title}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonials {
    padding: 8rem 0;
    background-color: var(--bg-secondary);
    position: relative;
  }

  /* Decorative borders top and bottom for premium feel */
  .testimonials::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--border-color) 50%, transparent 100%);
  }

  .testimonials::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--border-color) 50%, transparent 100%);
  }

  .header-container {
    text-align: center;
    margin-bottom: 5rem;
  }

  .highlight {
    color: var(--accent-color);
  }

  .section-desc {
    color: var(--text-secondary);
    font-size: 1.15rem;
    margin-top: 1rem;
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
  }

  .testimonial-card {
    background: var(--bg-color);
    padding: 3rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--glass-shadow);
    position: relative;
    border: 1px solid var(--border-color);
    transition: transform var(--transition-normal);
  }

  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.06);
  }

  .quote-icon {
    position: absolute;
    top: -20px;
    left: 3rem;
    font-size: 5rem;
    line-height: 1;
    font-family: Georgia, serif;
    color: var(--accent-light);
    font-weight: bold;
    user-select: none;
  }

  .stars {
    color: #fbbf24;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  .quote-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-color);
    margin-bottom: 2.5rem;
    font-style: italic;
  }

  .author-info {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    border-top: 1px solid var(--border-color);
    padding-top: 1.5rem;
  }

  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--accent-light);
    color: var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .author-name {
    margin: 0;
    font-size: 1.1rem;
  }

  .author-title {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .testimonial-card {
      padding: 2.5rem 2rem;
    }
    
    .quote-icon {
      left: 2rem;
    }
  }
</style>
