class ModernFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
  <footer>
  <div class="container">
    <div class="row">
        <h5>Redes Sociales</h5>
        <ul>
          <li><a href="https://tiktok.com/@real.agiltech"><i class="fab fa-tiktok"></i> TikTok</a></li>
          <li><a href="https://wa.me/5491123809742"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
          <li><a href="https://instagram.com/real.agiltech"><i class="fab fa-instagram"></i> Instagram</a></li>
          <li><a href="https://www.youtube.com/@real.agiltech"><i class="fab fa-youtube"></i> YouTube</a></li>
          <li><a href="https://twitter.com/realagiltech"><i class="bi bi-twitter"></i> Twitter</a></li>
        </ul>
    </div>
    <div class="row">
        <h5>¿Quienes Somos?</h5>
        <ul>
          <li><a href="./nosotros.html"><i class="fas fa-user"></i> Sobre Nosotros</a></li>
        </ul>
    </div>
  </div>
</footer>
`;
}
}

customElements.define('modern-footer', ModernFooter);
