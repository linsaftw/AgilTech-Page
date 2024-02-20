class ModernNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/index.html">
            <img src="/images/logo.png" alt="Logo" height="28" class="d-inline-block align-text-top inverted-image">
          </a>
          <a href=/nosotros.html" class="navbar-link"><small class="navbar-text">¿Quienes Somos?</small></a>
          <div class="navbar-text">
            <small>Nuestras Redes</small>
            <a href="https://wa.me/5491123809742"><i class="fab fa-whatsapp"></i></a>
            <a href="https://tiktok.com/@real.agiltech"><i class="fab fa-tiktok"></i></a>
            <a href="https://instagram.com/real.agiltech"><i class="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@real.agiltech"><i class="fab fa-youtube"></i></a>
            <a href="https://twitter.com/realagiltech"><i class="bi bi-twitter"></i></a>
          </div>
        </div>
      </nav>
      `;
    }
  }
  
  customElements.define('modern-navbar', ModernNavbar);
  