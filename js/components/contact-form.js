export class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.fields = {
      name: '',
      email: '',
      message: '',
    };
  }

  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.innerHTML = `
      <form id="contactForm" class="contact-card" novalidate aria-describedby="formStatus">
        <div class="mb-3">
          <label for="name" class="form-label fw-bold">Nombre completo</label>
          <input
            id="name"
            name="name"
            type="text"
            class="form-control"
            autocomplete="name"
            required
            aria-describedby="nameFeedback"
          >
          <span id="nameFeedback" class="form-text-feedback" aria-live="polite"></span>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label fw-bold">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            class="form-control"
            autocomplete="email"
            required
            aria-describedby="emailFeedback"
          >
          <span id="emailFeedback" class="form-text-feedback" aria-live="polite"></span>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label fw-bold">Mensaje</label>
          <textarea
            id="message"
            name="message"
            class="form-control"
            rows="5"
            required
            aria-describedby="messageFeedback"
          ></textarea>
          <span id="messageFeedback" class="form-text-feedback" aria-live="polite"></span>
        </div>

        <button class="btn btn-success fw-bold rounded-pill px-4" type="submit">
          Enviar solicitud
        </button>

        <div
          id="formStatus"
          class="alert mt-3 d-none"
          role="status"
          aria-live="polite"
        ></div>
      </form>
    `;
  }

  bindEvents() {
    const form = this.querySelector('#contactForm');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this.fields[input.name] = input.value.trim();
        this.validateField(input.name);
        this.updateFormStatus();
      });

      input.addEventListener('blur', () => {
        this.fields[input.name] = input.value.trim();
        this.validateField(input.name);
        this.updateFormStatus();
      });
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const validationResults = ['name', 'email', 'message'].map((fieldName) =>
        this.validateField(fieldName)
      );

      const isValidForm = validationResults.every(Boolean);

      if (isValidForm) {
        this.showStatus(
          'Solicitud enviada correctamente. Esta acción simula el procesamiento del formulario.',
          'success'
        );

        form.reset();

        this.fields = {
          name: '',
          email: '',
          message: '',
        };

        ['name', 'email', 'message'].forEach((fieldName) =>
          this.clearFeedback(fieldName)
        );
      } else {
        this.showStatus(
          'Revise los campos marcados antes de enviar la solicitud.',
          'danger'
        );
      }
    });
  }

  validateField(fieldName) {
    const field = this.querySelector(`[name="${fieldName}"]`);
    const value = field.value.trim();

    const validators = {
      name: () => value.length >= 3,
      email: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: () => value.length >= 10,
    };

    const messages = {
      name: {
        error: 'Ingrese un nombre válido de al menos 3 caracteres.',
        success: 'Nombre válido.',
      },
      email: {
        error: 'Ingrese un correo electrónico válido, por ejemplo nombre@correo.cl.',
        success: 'Correo válido.',
      },
      message: {
        error: 'El mensaje debe contener al menos 10 caracteres.',
        success: 'Mensaje válido.',
      },
    };

    const isValid = validators[fieldName]();
    const feedback = this.querySelector(`#${fieldName}Feedback`);

    feedback.textContent = isValid
      ? messages[fieldName].success
      : messages[fieldName].error;

    feedback.className = `form-text-feedback ${isValid ? 'success' : 'error'}`;

    field.classList.toggle('is-valid', isValid);
    field.classList.toggle('is-invalid', !isValid);
    field.setAttribute('aria-invalid', String(!isValid));

    return isValid;
  }

  clearFeedback(fieldName) {
    const feedback = this.querySelector(`#${fieldName}Feedback`);
    const field = this.querySelector(`[name="${fieldName}"]`);

    feedback.textContent = '';
    feedback.className = 'form-text-feedback';

    field.classList.remove('is-valid', 'is-invalid');
    field.removeAttribute('aria-invalid');
  }

  updateFormStatus() {
    const status = this.querySelector('#formStatus');

    if (!status) {
      return;
    }

    const nameInput = this.querySelector('[name="name"]');
    const emailInput = this.querySelector('[name="email"]');
    const messageInput = this.querySelector('[name="message"]');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    const isFormEmpty =
      nameValue === '' && emailValue === '' && messageValue === '';

    const isNameValid = nameValue.length >= 3;

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    const isMessageValid = messageValue.length >= 10;

    if (isFormEmpty) {
      status.textContent = '';
      status.className = 'alert mt-3 d-none';
      return;
    }

    if (isNameValid && isEmailValid && isMessageValid) {
      status.textContent = 'Formulario listo para enviar.';
      status.className = 'alert alert-success mt-3';
    } else {
      status.textContent = '';
      status.className = 'alert mt-3 d-none';
    }
  }

  showStatus(message, type) {
    const status = this.querySelector('#formStatus');

    status.textContent = message;
    status.className = `alert alert-${type} mt-3`;
  }
}

customElements.define('contact-form', ContactForm);