<footer class="footer">
  <div class="footer-container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" class="logo">
          <span class="logo-icon">Diamond</span> Estates
        </a>
        <p class="brand-desc">Discover the most premium luxury homes and exceptional properties worldwide. Your journey to exceptional living begins here.</p>
      </div>

      <div class="footer-links">
        <div class="link-col">
          <h3>Properties</h3>
          <ul>
            <li><a href="/properties">All Listings</a></li>
            <li><a href="/properties?type=mansion">Mansions</a></li>
            <li><a href="/properties?type=penthouse">Penthouses</a></li>
            <li><a href="/properties?type=villa">Villas</a></li>
          </ul>
        </div>
        
        <div class="link-col">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#agents">Our Agents</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="link-col">
          <h3>Legal</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Diamond Estates Limited. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    padding: 4rem 0 2rem;
    margin-top: 5rem;
  }

  .footer-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }

  .footer-top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .logo-icon {
    color: var(--accent-color);
  }

  .brand-desc {
    margin-top: 1rem;
    color: var(--text-secondary);
    max-width: 300px;
    font-size: 0.95rem;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .link-col h3 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .link-col ul {
    list-style: none;
    padding: 0;
  }

  .link-col li {
    margin-bottom: 0.75rem;
  }

  .link-col a {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  .link-col a:hover {
    color: var(--accent-color);
  }

  .footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    .footer-top {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .footer-links {
      grid-template-columns: 1fr;
    }
  }
</style>
