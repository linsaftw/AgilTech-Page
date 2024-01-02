class ModernNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav class="modern-navbar">
        <ul>
          <li><a href="index.html"><i class="fas fa-home"></i>Inicio</a></li>
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
            </div>
          </li>
        </ul>
      </nav>
      `;
    }
  }
  
  customElements.define('modern-navbar', ModernNavbar);
  