class ProductCard extends HTMLElement {
    connectedCallback() {
        // Extract attribute values
        const name = this.getAttribute('name') || 'Product Name';
        const imgSrc = this.getAttribute('img-src') || '';
        const description = this.getAttribute('description') || 'Product Description';
        const price = (this.getAttribute('price') * 1.05) || '0';
        const priceBefore = (price * 1.5) || '0';
        const whatsappText = "Me interesa " + name;
        const whatsappNumber = "+5491123809742";
        const containsMP = this.getAttribute('mp') != null;
        const link = containsMP ? ("https://mpago.la/" + this.getAttribute('mp')) : "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappText);

        // Create the HTML structure
        this.innerHTML = `
        <div class="product">
            <h3>${name}</h3>
            <img src="${imgSrc}" alt="${name}">
            <p>${description}</p>
            <p class="price-before"><span class="currency">ARS </span>${priceBefore.toLocaleString('en')}</p>
            <p class="price"><span class="currency">ARS </span>${price.toLocaleString('en')}</p>            
            <p class="free-shipping">Envío gratis</p>
            <a href="${link}" target="_blank" class="buy-btn"><span class="fas fa-shopping-cart"></span>Comprar Ahora</a>
        </div>
        `;
    }
}

// Define the custom element
customElements.define('product-card', ProductCard);