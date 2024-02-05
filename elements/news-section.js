class NewsSection extends HTMLElement {
    connectedCallback() {
        // Extract attribute values
        const title = this.getAttribute('title') || '';
        const subtitle = this.getAttribute('subtitle') || '';
        const img = this.getAttribute('img') || '';
        const content = this.getAttribute('content') || '';

        // Create the HTML structure
        this.innerHTML = `
            <section class="content-section">
                <div class="content-container">
                    <h1>${title}</h1>
                    <h2>${subtitle}</h2>
                    <img src="${img}" alt="Imagen" class="section-image">
                    <p>${content.replace(/\n/g, '<br>')}</p>
                </div>
            </section>

            <div class="container-fluid">
              <div class="row">
                <div class="col-4 text-end">
                  <hr class="gray-line-left">
                </div>
                <div class="col-4 text-center">
                  <h3><b>Gracias por leer</b></h3>
                </div>
                <div class="col-4 text-start">
                  <hr class="gray-line-right">
                </div>
              </div>
            </div>
        `;
    }
}

// Define the custom element
customElements.define('news-section', NewsSection);