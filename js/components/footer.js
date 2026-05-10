export class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <footer class="py-4">
        <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p class="mb-0">© ${currentYear} Rediseño académico Municipalidad de Cholchol.</p>
          <div class="d-flex gap-3">
            <a class="text-white" href="#servicios-title">Servicios</a>
            <a class="text-white" href="#contacto-title">Contacto</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
