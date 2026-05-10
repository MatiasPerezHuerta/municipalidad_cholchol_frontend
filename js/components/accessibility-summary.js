import { summaryItems } from '../data.js';

export class AccessibilitySummary extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="row g-3">
        ${summaryItems.map((item) => `
          <div class="col-md-4">
            <article class="summary-card text-center">
              <div class="summary-number">${item.value}</div>
              <p class="mb-0 fw-semibold">${item.label}</p>
            </article>
          </div>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('accessibility-summary', AccessibilitySummary);
