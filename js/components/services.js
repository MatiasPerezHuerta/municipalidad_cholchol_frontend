import { services } from '../data.js';

export class ServicesGrid extends HTMLElement {
  constructor() {
    super();
    this.selectedCategory = 'Todos';
    this.favoriteServices = [];
  }

  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  get categories() {
    return ['Todos', ...new Set(services.map((service) => service.category))];
  }

  get filteredServices() {
    if (this.selectedCategory === 'Todos') {
      return services;
    }

    return services.filter((service) => service.category === this.selectedCategory);
  }

  render() {
    this.innerHTML = `
      <div class="d-flex flex-wrap justify-content-center gap-2 mb-4" role="group" aria-label="Filtros de servicios municipales">
        ${this.categories.map((category) => `
          <button class="btn ${category === this.selectedCategory ? 'btn-success' : 'btn-outline-success'} filter-button" type="button" data-category="${category}">
            ${category}
          </button>
        `).join('')}
      </div>

      <div id="serviceFeedback" class="alert alert-success visually-hidden" role="status" aria-live="polite"></div>

      <div class="row g-4" id="servicesContainer">
        ${this.filteredServices.map((service) => `
          <article class="col-md-6 col-xl-4">
            <div class="service-card" tabindex="0" data-service-id="${service.id}">
              <div class="service-icon" aria-hidden="true">${service.icon}</div>
              <p class="badge text-bg-warning mb-2">${service.category}</p>
              <h3 class="h5 fw-bold">${service.title}</h3>
              <p>${service.description}</p>
              <button class="btn btn-sm btn-outline-success add-favorite" type="button" data-service-id="${service.id}">
                Agregar a favoritos
              </button>
            </div>
          </article>
        `).join('')}
      </div>

      <div class="mt-4">
        <h3 class="h5 fw-bold">Servicios seleccionados: <span id="favoriteCount">${this.favoriteServices.length}</span></h3>
        <div id="favoriteList" class="favorite-list" aria-live="polite">
          ${this.renderFavoriteList()}
        </div>
      </div>
    `;
  }

  renderFavoriteList() {
    if (this.favoriteServices.length === 0) {
      return '<span class="text-muted">Aún no hay servicios seleccionados.</span>';
    }

    return this.favoriteServices.map((serviceId) => {
      const service = services.find((item) => item.id === serviceId);
      return `
        <span class="favorite-pill">
          ${service.title}
          <button type="button" aria-label="Eliminar ${service.title}" data-remove-id="${service.id}">×</button>
        </span>
      `;
    }).join('');
  }

  bindEvents() {
    this.querySelectorAll('.filter-button').forEach((button) => {
      button.addEventListener('click', () => {
        this.selectedCategory = button.dataset.category;
        this.render();
        this.bindEvents();
      });
    });

    this.querySelectorAll('.service-card').forEach((card) => {
      card.addEventListener('mouseenter', () => card.classList.add('is-focused'));
      card.addEventListener('mouseleave', () => card.classList.remove('is-focused'));
      card.addEventListener('focus', () => card.classList.add('is-focused'));
      card.addEventListener('blur', () => card.classList.remove('is-focused'));
    });

    this.querySelectorAll('.add-favorite').forEach((button) => {
      button.addEventListener('click', () => this.addFavorite(button.dataset.serviceId));
    });

    this.querySelectorAll('[data-remove-id]').forEach((button) => {
      button.addEventListener('click', () => this.removeFavorite(button.dataset.removeId));
    });
  }

  addFavorite(serviceId) {
    if (!this.favoriteServices.includes(serviceId)) {
      this.favoriteServices.push(serviceId);
      this.updateFavorites();
      this.showFeedback('Servicio agregado correctamente a la lista de favoritos.');
      return;
    }

    this.showFeedback('El servicio ya se encuentra en la lista de favoritos.');
  }

  removeFavorite(serviceId) {
    this.favoriteServices = this.favoriteServices.filter((item) => item !== serviceId);
    this.updateFavorites();
    this.showFeedback('Servicio eliminado de la lista de favoritos.');
  }

  updateFavorites() {
    this.querySelector('#favoriteCount').textContent = this.favoriteServices.length;
    this.querySelector('#favoriteList').innerHTML = this.renderFavoriteList();
    this.querySelectorAll('[data-remove-id]').forEach((button) => {
      button.addEventListener('click', () => this.removeFavorite(button.dataset.removeId));
    });
  }

  showFeedback(message) {
    const feedback = this.querySelector('#serviceFeedback');
    feedback.textContent = message;
    feedback.classList.remove('visually-hidden');

    window.setTimeout(() => {
      feedback.classList.add('visually-hidden');
    }, 2600);
  }
}

customElements.define('services-grid', ServicesGrid);
