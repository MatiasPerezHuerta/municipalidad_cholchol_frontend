'use client';

import { useState } from 'react';

const alerts = [
  'Atencion presencial disponible en horario municipal. Revise requisitos antes de asistir.',
  'Los servicios digitales priorizan consultas, informacion de tramites y solicitudes ciudadanas.',
  'La comunidad puede revisar avisos, noticias y actividades destacadas desde la portada.'
];

export default function Hero({ about }) {
  const [message, setMessage] = useState('Seleccione un aviso para actualizar dinamicamente este contenido.');

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow light">Rediseño institucional</span>
          <h1 id="hero-title">{about.title}</h1>
          <p>{about.description}</p>
          <div className="button-row">
            <a className="primary-button" href="#servicios">
              Ver servicios
            </a>
            <a className="ghost-button" href="#contacto">
              Solicitar informacion
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-labelledby="hero-panel-title">
          <h2 id="hero-panel-title">Aviso destacado</h2>
          <div className="hero-alert" aria-live="polite">
            {message}
          </div>
          <div className="stack">
            {alerts.map((alert) => (
              <button key={alert} className="outline-button" type="button" onClick={() => setMessage(alert)}>
                {alert.split('.')[0]}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
