<script>
  let isScrolled = $state(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      isScrolled = window.scrollY > 20;
    });
  }
</script>

<header class="header {isScrolled ? 'scrolled glass' : ''}">
  <div class="header-container">
    <a href="/" class="logo">
      <span class="logo-icon">Diamond</span>
      <span class="logo-text">Estates</span>
    </a>
    <nav class="nav-links">
      <a href="/" class="nav-link">Home</a>
      <a href="/properties" class="nav-link">Properties</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#contact" class="nav-link">Contact</a>
    </nav>
    <a href="/properties" class="btn btn-primary cta-nav">View Listings</a>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: all 0.3s ease;
    padding: 1.5rem 0;
    border-bottom: 1px solid transparent;
  }
  
  .header.scrolled {
    padding: 1rem 0;
    backdrop-filter: blur(16px);
    background-color: var(--glass-bg);
    border-bottom: 1px solid var(--glass-border);
  }

  .header-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .logo-icon {
    color: var(--accent-color);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--text-color);
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .cta-nav {
      display: none;
    }
  }
</style>
