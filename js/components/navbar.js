export class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg fixed-top" aria-label="Navegación principal">
          <div class="container">
            <a class="navbar-brand d-flex align-items-center fw-bold" href="#contenido-principal" aria-label="Ir al inicio de la Municipalidad de Cholchol">
              <img class="brand-logo" src="assets/logo-cholchol.svg" alt="Logo referencial de la Municipalidad de Cholchol">
              <span>Municipalidad de Cholchol</span>
            </a>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMunicipal" aria-controls="navbarMunicipal" aria-expanded="false" aria-label="Abrir menú de navegación">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMunicipal">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                <li class="nav-item"><a class="nav-link" href="#servicios-title">Servicios</a></li>
                <li class="nav-item"><a class="nav-link" href="#noticias-title">Noticias</a></li>
                <li class="nav-item"><a class="nav-link" href="#indicadores-title">Accesibilidad</a></li>
                <li class="nav-item"><a class="nav-link" href="#contacto-title">Contacto</a></li>
                <li class="nav-item ms-lg-2">
                  <button id="contrastToggle" class="btn btn-sm btn-warning fw-bold rounded-pill" type="button" aria-pressed="false">
                    Alto contraste
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
  }

  bindEvents() {
    const contrastButton = this.querySelector('#contrastToggle');
    contrastButton.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isActive = document.body.classList.contains('high-contrast');
      contrastButton.setAttribute('aria-pressed', String(isActive));
      contrastButton.textContent = isActive ? 'Contraste normal' : 'Alto contraste';
    });
  }
}

customElements.define('app-navbar', AppNavbar);
