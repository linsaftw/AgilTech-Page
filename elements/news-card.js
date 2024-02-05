class NewsCard extends HTMLElement {
    connectedCallback() {
        // Extract attribute values
        const imgSrc = this.getAttribute('img-src') || '';
        const title = this.getAttribute('title') || '';
        const link = this.getAttribute('link') || '#'; // Default to '#' if no link is provided

        // Create the HTML structure
        this.innerHTML = `
            <a href="${link}" target="_blank" class="news-link">
                <div class="news-card">
                    <img src="${imgSrc}" alt="${title}" class="news-img">
                    <div class="news-content">
                        <h4>${title}</h4>
                    </div>
                </div>
            </a>
        `;
    }
}

// Define the custom element
customElements.define('news-card', NewsCard);