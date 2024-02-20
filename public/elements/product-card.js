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
        const link = containsMP ? (this.getAttribute('mp')) : "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappText);

        // Create the HTML structure
        this.innerHTML = `
        <div class="product">
            <a href="${link}">
                <img src="${imgSrc}" alt="${name}">
                <h4>${name}</h4>
                <p class="price-before"><span class="strikethrough"><span class="currency">ARS </span>${priceBefore.toLocaleString('en')}</span><span class="discount">50% OFF</span></p>
                <p class="price"><span class="currency">ARS </span>${price.toLocaleString('en')}</p>            
                <p class="free-shipping">Envío GRATIS</p>
                <a href="${link}" target="_blank" class="buy-btn">Comprar Ahora</a>
            </a>
        </div>
        `;
    }
}

// Define the custom element
customElements.define('product-card', ProductCard);