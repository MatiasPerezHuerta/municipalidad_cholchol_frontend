import { news } from '../data.js';

export class NewsPanel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="row g-4">
        ${news.map((item) => `
          <article class="col-md-6 col-xl-4">
            <div class="news-card">
              <img src="${item.image}" alt="${item.alt}" loading="lazy">
              <div class="content">
                <span class="badge text-bg-success mb-2">${item.tag}</span>
                <h3 class="h5 fw-bold">${item.title}</h3>
                <p>${item.text}</p>
                <a class="fw-bold text-success" href="#contacto-title">Solicitar más información</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('news-panel', NewsPanel);
