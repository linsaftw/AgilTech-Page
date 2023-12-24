class ProductCard extends HTMLElement {
    connectedCallback() {
        // Extract attribute values
        const name = this.getAttribute('name') || 'Product Name';
        const imgSrc = this.getAttribute('img-src') || '';
        const description = this.getAttribute('description') || 'Product Description';
        const priceBefore = this.getAttribute('price-before') || '0';
        const price = this.getAttribute('price') || '0';
        const whatsappText = "Me interesa " + name;
        const whatsappNumber = "+5491132126617";

        // Create the HTML structure
        this.innerHTML = `
        <div class="product">
            <h3>${name}</h3>
            <img src="${imgSrc}" alt="${name}">
            <p>${description}</p>
            <p class="price-before"><span class="currency">USD </span>${priceBefore}</p>
            <p class="price"><span class="currency">USD </span>${price}</p>
            <p class="free-shipping">Envío gratis</p>
            <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}" target="_blank" class="whatsapp-btn"><span class="fab fa-whatsapp"></span>Comprar por WhatsApp</a>
        </div>
        `;
    }
}

// Define the custom element
customElements.define('product-card', ProductCard);

document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Function to fetch the blue dollar sell rate from the API
        const fetchBlueDollarRate = async () => {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const data = await response.json();
        return data.blue.value_sell;
        };

        // Function to calculate and display converted prices
        const convertPrice = (className, multiplier, currency) => {
        const elements = document.querySelectorAll(`.${className}`);
        
        elements.forEach(element => {
            // Extract the numeric value from the element's text content
            const originalPrice = parseFloat(element.textContent.replace(/[^0-9.]/g, ''));
            const convertedPrice = originalPrice * multiplier;
            
            // Display the converted price with the appropriate formatting
            element.innerHTML = `<span class="currency">${currency}</span>${convertedPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
        });
        };

        // Call the fetchBlueDollarRate function and update prices when the page is loaded
        const blueDollarSellRate = await fetchBlueDollarRate();

        // Use a fallback multiplier (1000) if there is an issue fetching the blue dollar rate
        const multiplier = blueDollarSellRate || 1000;

        convertPrice('price-before', multiplier, 'ARS ');
        convertPrice('price', multiplier, 'ARS ');
    } catch (error) {
        console.error('Error fetching or converting prices:', error);

        // Use a fallback multiplier (1000) in case of an error
        const multiplier = 1000;

        convertPrice('price-before', multiplier, 'ARS ');
        convertPrice('price', multiplier, 'ARS ');
    }
});