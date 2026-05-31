'use client';

import { useEffect, useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  service: '',
  message: '',
  website: ''
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection({ services }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    function handleServiceContact(event) {
      setForm((current) => ({ ...current, service: event.detail.service }));
      setErrors((current) => ({ ...current, service: undefined }));
      setStatus(`Servicio seleccionado: ${event.detail.service}`);
    }

    window.addEventListener('service-contact', handleServiceContact);
    return () => window.removeEventListener('service-contact', handleServiceContact);
  }, []);

  function validate(values) {
    const nextErrors = {};

    if (values.name.trim().length < 3) {
      nextErrors.name = 'Ingrese un nombre de al menos 3 caracteres.';
    }

    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Ingrese un correo electronico valido.';
    }

    if (!values.service.trim()) {
      nextErrors.service = 'Seleccione un servicio.';
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = 'El mensaje debe contener al menos 10 caracteres.';
    }

    return nextErrors;
  }

  function updateField(event) {
    const { name, value } = event.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    setErrors(validate(nextForm));
    setStatus('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('Revise los campos marcados antes de enviar.');
      return;
    }

    setIsSending(true);
    setStatus('');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const result = await response.json();
    setIsSending(false);

    if (!response.ok) {
      setErrors(result.errors || {});
      setStatus(result.message || 'No fue posible enviar la solicitud.');
      return;
    }

    setForm(initialForm);
    setErrors({});
    setStatus(result.message);
  }

  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contacto-title">
      <div className="container two-column">
        <div>
          <span className="eyebrow">Formulario</span>
          <h2 id="contacto-title">Contacto y solicitud de informacion</h2>
          <p>
            Incluye validacion en cliente, validacion en servidor mediante API Route
            y un campo honeypot oculto como proteccion basica contra robots.
          </p>
          <div className="info-card" role="note">
            <strong>Horario referencial:</strong>
            <br />
            Lunes a viernes, 08:30 a 14:00 horas.
          </div>
        </div>

        <form className="contact-card" noValidate onSubmit={handleSubmit} aria-describedby="form-status">
          <div className="form-row honeypot" aria-hidden="true">
            <label htmlFor="website">Sitio web</label>
            <input id="website" name="website" tabIndex={-1} value={form.website} onChange={updateField} />
          </div>

          <Field
            id="name"
            label="Nombre completo"
            name="name"
            value={form.name}
            error={errors.name}
            onChange={updateField}
            autoComplete="name"
          />

          <Field
            id="email"
            label="Correo electronico"
            name="email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={updateField}
            autoComplete="email"
          />

          <div className="form-row">
            <label htmlFor="service">Servicio</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={updateField}
              aria-invalid={Boolean(errors.service)}
              aria-describedby="service-error"
            >
              <option value="">Seleccione un servicio</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <span id="service-error" className="field-feedback">
              {errors.service}
            </span>
          </div>

          <div className="form-row">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={updateField}
              aria-invalid={Boolean(errors.message)}
              aria-describedby="message-error"
            />
            <span id="message-error" className="field-feedback">
              {errors.message}
            </span>
          </div>

          <button className="submit-button" type="submit" disabled={isSending}>
            {isSending ? 'Enviando...' : 'Enviar solicitud'}
          </button>
          <p id="form-status" className="form-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, error, type = 'text', ...props }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} aria-invalid={Boolean(error)} aria-describedby={`${id}-error`} {...props} />
      <span id={`${id}-error`} className="field-feedback">
        {error}
      </span>
    </div>
  );
}
