'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export default function ServicesGrid({ initialServices }) {
  const [apiServices, setApiServices] = useState(initialServices);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedServices, setSelectedServices] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function loadServices() {
      try {
        const response = await fetch('/api/site-content');
        const content = await response.json();
        setApiServices(content.services);
      } catch {
        setStatus('No fue posible actualizar servicios desde la API interna.');
      }
    }

    loadServices();
  }, []);

  const categories = useMemo(
    () => ['Todos', ...new Set(apiServices.map((service) => service.category))],
    [apiServices]
  );

  const services = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return apiServices;
    }

    return apiServices.filter((service) => service.category === selectedCategory);
  }, [apiServices, selectedCategory]);

  function addService(service) {
    setSelectedServices((current) => {
      if (current.some((item) => item.id === service.id)) {
        setStatus(`${service.title} ya esta en servicios seleccionados.`);
        return current;
      }

      setStatus(`${service.title} agregado a servicios seleccionados.`);
      return [...current, service];
    });
  }

  function contactService(service) {
    window.dispatchEvent(
      new CustomEvent('service-contact', {
        detail: { service: service.title }
      })
    );
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filtros de servicios municipales">
        {categories.map((category) => (
          <button
            className={category === selectedCategory ? 'filter active' : 'filter'}
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {status}
      </p>

      <div className="card-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-image">
              <Image src={service.image} alt="" fill sizes="(min-width: 900px) 33vw, 100vw" />
            </div>
            <div className="card-content">
              <span className="badge">{service.category}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="text-button" type="button" onClick={() => addService(service)}>
                Agregar a seleccionados
              </button>
              <button className="primary-link" type="button" onClick={() => contactService(service)}>
                Contactanos
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="selected-box">
        <h3>Servicios seleccionados: {selectedServices.length}</h3>
        {selectedServices.length === 0 ? (
          <p>Aun no hay servicios seleccionados.</p>
        ) : (
          <div className="pill-row">
            {selectedServices.map((service) => (
              <button
                className="pill"
                key={service.id}
                type="button"
                aria-label={`Eliminar ${service.title}`}
                onClick={() =>
                  setSelectedServices((current) => current.filter((item) => item.id !== service.id))
                }
              >
                {service.title} x
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
