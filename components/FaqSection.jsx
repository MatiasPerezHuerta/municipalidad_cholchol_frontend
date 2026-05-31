'use client';

import { useState } from 'react';

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="preguntas" aria-labelledby="preguntas-title">
      <div className="container two-column">
        <div>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 id="preguntas-title">Informacion clave para la evaluacion</h2>
          <p>
            Esta seccion consume los mismos datos centralizados de la aplicacion y
            permite revisar respuestas de manera interactiva.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article className="faq-item" key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {faq.question}
                  <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
                </button>
                <div id={`faq-${index}`} hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
