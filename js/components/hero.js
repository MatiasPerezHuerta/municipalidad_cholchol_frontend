export class MunicipalHero extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.innerHTML = `
      <section class="hero" aria-labelledby="hero-title">
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-lg-7">
              <span class="eyebrow text-warning">Rediseño institucional</span>
              <h1 id="hero-title">Una portada municipal clara, moderna y cercana</h1>
              <p class="mt-3">
                Propuesta de Home para mejorar la experiencia de usuario, fortalecer la imagen institucional
                y facilitar el acceso a información relevante desde cualquier dispositivo.
              </p>
              <div class="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a class="btn btn-primary-custom" href="#servicios-title">Ver servicios</a>
                <a class="btn btn-outline-custom" href="#contacto-title">Solicitar información</a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="hero-panel">
                <h2 class="h4 fw-bold">Aviso destacado</h2>
                <div id="heroAlert" class="hero-alert mt-3" aria-live="polite">
                  Seleccione un aviso para actualizar dinámicamente este contenido.
                </div>
                <div class="d-grid gap-2 mt-3">
                  <button class="btn btn-outline-success quick-alert" type="button" data-message="Atención presencial disponible en horario municipal. Recuerde revisar requisitos antes de asistir.">Horario de atención</button>
                  <button class="btn btn-outline-success quick-alert" type="button" data-message="Los servicios digitales priorizan consultas, información de trámites y solicitudes ciudadanas.">Servicios digitales</button>
                  <button class="btn btn-outline-success quick-alert" type="button" data-message="La comunidad puede revisar avisos, noticias y actividades destacadas desde la portada.">Actividades comunales</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  bindEvents() {
    const alertBox = this.querySelector('#heroAlert');
    const buttons = this.querySelectorAll('.quick-alert');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        alertBox.textContent = button.dataset.message;
        buttons.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }
}

customElements.define('municipal-hero', MunicipalHero);
