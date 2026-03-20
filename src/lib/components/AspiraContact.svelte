<script>
  // AspiraContact.svelte
</script>

<section class="contact-footer-section">
  <div class="container relative z-10">
    <div class="split-card">
      
      <!-- Left Side (Orange) -->
      <div class="info-side">
        <h2 class="form-title">DỰ ÁN<br>THE ASPIRA</h2>
        
        <div class="contact-details">
          <div class="contact-item">
            <span class="icon">📞</span>
            <p>0936 35 68 35</p>
          </div>
          <div class="contact-item">
            <span class="icon">📍</span>
            <p>Đường Nguyễn Thị Minh Khai/2, Phường Tân Đông Hiệp,<br>TP Hồ Chí Minh</p>
          </div>
          <div class="contact-item">
            <span class="icon">✉️</span>
            <p>info@theaspira.vn</p>
          </div>
        </div>

        <div class="map-placeholder">
          <!-- Abstract mini map mimicking google maps embed -->
          <div class="map-bg"></div>
          <div class="map-pin">📍</div>
          <div class="map-overlay-text">Google Mps</div>
        </div>
      </div>

      <!-- Right Side (Glass Form) -->
      <div class="form-side glass-strong">
        <h2 class="form-title-dark">Đăng ký tư vấn</h2>
        <p class="form-subtitle">Hãy để lại lời nhắn để đội ngũ của chúng tôi tư vấn chi tiết và đồng hành cùng bạn.</p>

        <h3 class="form-section-head">LIÊN HỆ TƯ VẤN</h3>

        <form class="inquiry-form">
          <input type="text" placeholder="Họ tên" class="form-input">
          <input type="tel" placeholder="Số điện thoại" class="form-input">
          <input type="email" placeholder="Email" class="form-input">
          <input type="text" placeholder="Loại căn cần tư vấn" class="form-input">
          <textarea placeholder="Nội dung tư vấn" class="form-textarea" rows="4"></textarea>
          
          <button type="button" class="btn btn-primary submit-btn">Đăng ký nhận Báo giá</button>
        </form>
      </div>
      
    </div>
  </div>
  
  <div class="footer-strip">
    <div class="container strip-content">
      <div class="copyright">
        <strong>THE ASPIRA</strong> 2025 The Aspira. All Rights Reserved.
      </div>
      <div class="address-strip">
        Địa chỉ: Đường Nguyễn Thị Minh Khai/2, Phường Tân Đông Hiệp, TP Hồ Chí Minh
      </div>
      <div class="email-strip">
        Email: info@theaspira.vn
      </div>
    </div>
  </div>
</section>

<style>
  .contact-footer-section {
    position: relative;
    padding-top: 6rem;
    min-height: 800px;
    background: url('/images/placeholder.jpg') center/cover no-repeat;
    /* We use a fallback background gradient if image is missing */
    background-color: var(--bg-color);
  }

  .contact-footer-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(4px);
  }

  .z-10 {
    position: relative;
    z-index: 10;
  }

  .split-card {
    display: flex;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: 0 40px 100px rgba(0,0,0,0.3);
    margin-bottom: 4rem;
  }

  .info-side {
    flex: 1;
    background-color: var(--accent-color);
    color: white;
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
  }

  .form-side {
    flex: 1.2;
    padding: 4rem 3rem;
  }

  .glass-strong {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  :global(.dark) .glass-strong {
    background: rgba(15, 23, 42, 0.85);
  }

  .form-title {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 3rem;
  }

  .form-title-dark {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }

  .form-subtitle {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 400px;
    line-height: 1.6;
  }

  .form-section-head {
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    color: var(--text-color);
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: auto;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    font-size: 1.05rem;
    font-weight: 500;
  }

  .map-placeholder {
    margin-top: 3rem;
    width: 100%;
    height: 200px;
    background: #e5e5e5;
    border-radius: var(--radius-md);
    position: relative;
    overflow: hidden;
  }
  
  .map-bg {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px),
                      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px);
  }

  .map-pin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }

  .map-overlay-text {
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 0.8rem;
    color: #666;
    font-weight: bold;
  }

  .inquiry-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 1.25rem 1.5rem;
    border-radius: 100px; /* Pill shape */
    border: 1px solid var(--border-color);
    background: white;
    font-family: inherit;
    font-size: 1rem;
    outline: none;
    transition: box-shadow var(--transition-fast);
  }

  :global(.dark) .form-input, :global(.dark) .form-textarea {
    background: var(--bg-secondary);
    color: white;
  }

  .form-textarea {
    border-radius: var(--radius-lg);
    resize: none;
  }

  .form-input:focus, .form-textarea:focus {
    box-shadow: 0 0 0 2px var(--accent-light);
    border-color: var(--accent-color);
  }

  .submit-btn {
    width: 100%;
    margin-top: 0.5rem;
    font-size: 1.1rem;
    padding: 1.25rem;
  }

  .footer-strip {
    background: var(--accent-color);
    color: white;
    padding: 1.5rem 0;
    position: relative;
    z-index: 10;
  }

  .strip-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    .split-card {
      flex-direction: column;
    }
    
    .strip-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
</style>
