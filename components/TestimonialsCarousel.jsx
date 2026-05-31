'use client';

import { useState } from 'react';

export default function TestimonialsCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  function move(direction) {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  }

  return (
    <div className="carousel" aria-roledescription="carrusel" aria-label="Testimonios">
      <button className="icon-control" type="button" aria-label="Testimonio anterior" onClick={() => move(-1)}>
        ‹
      </button>
      <article className="testimonial-card" aria-live="polite">
        <p>“{testimonial.quote}”</p>
        <h3>{testimonial.name}</h3>
        <span>{testimonial.role}</span>
      </article>
      <button className="icon-control" type="button" aria-label="Testimonio siguiente" onClick={() => move(1)}>
        ›
      </button>
      <div className="carousel-dots" aria-label="Seleccionar testimonio">
        {testimonials.map((item, dotIndex) => (
          <button
            key={item.name}
            className={dotIndex === index ? 'dot active' : 'dot'}
            type="button"
            aria-label={`Ver testimonio ${dotIndex + 1}`}
            aria-current={dotIndex === index}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
}
