class ModernNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav class="modern-navbar">
        <ul>
          <li><a href="index.html"><i class="fas fa-home"></i>Inicio</a></li>
          <li class="dropdown">
            <a href="#"><i class="fas fa-laptop"></i>Software</a>
            <div class="dropdown-content">
              <a href="https://www.dpbolvw.net/click-101048424-13942081"><i class="fas fa-lock"></i>NordVPN</a>
              <a href="https://www.tkqlhce.com/click-101048424-15663840"><i class="fas fa-key"></i>NordPass</a>
              <a href="https://www.anrdoezrs.net/click-101048424-15555883"><i class="fas fa-shield-alt"></i>Surfshark</a>
              <a href="https://www.dpbolvw.net/click-101048424-13296552"><i class="fas fa-virus"></i>Panda</a>
              <a href="https://www.anrdoezrs.net/click-101048424-13782751"><i class="fas fa-mobile-alt"></i>TenorShare</a>
              <a href="https://www.jdoqocy.com/click-101048424-15595664"><i class="fas fa-toolbox"></i>MiniTool</a>
              <a href="https://www.anrdoezrs.net/click-101048424-15402815"><i class="fas fa-wrench"></i>Abelssoft</a>
              <a href="https://www.anrdoezrs.net/click-101048424-15414522"><i class="fas fa-database"></i>EaseUS</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="#"><i class="fas fa-network-wired"></i>Redes</a>
            <div class="dropdown-content">
              <a href="https://tiktok.com/@real.agiltech"><i class="fab fa-tiktok"></i>TikTok</a>
              <a href="https://instagram.com/real.agiltech"><i class="fab fa-instagram"></i>Instagram</a>
              <a href="https://www.youtube.com/@real.agiltech"><i class="fab fa-youtube"></i>YouTube</a>
              <!-- Add more social links as needed -->
            </div>
          </li>
          <li class="dropdown">
            <a href="#"><i class="fas fa-address-book"></i>Contacto</a>
            <div class="dropdown-content">
              <a href="https://wa.me/5491123809742"><i class="fab fa-whatsapp"></i>Whatsapp</a>
              <a href="mailto:info@agiltech.cc"><i class="fas fa-envelope"></i>Email</a>
            </div>
          </li>
        </ul>
      </nav>
      `;
    }
  }
  
  customElements.define('modern-navbar', ModernNavbar);
  