'use client';

import Image from 'next/image';
import { useState } from 'react';

const navItems = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#preguntas', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [contrast, setContrast] = useState(false);

  function toggleContrast() {
    const nextContrast = !contrast;
    setContrast(nextContrast);
    document.body.classList.toggle('high-contrast', nextContrast);
  }

  return (
    <header>
      <nav className="navbar" aria-label="Navegacion principal">
        <div className="container navbar-inner">
          <a className="brand" href="#contenido-principal" aria-label="Ir al inicio">
            <Image src="/logo-cholchol.svg" alt="" width={42} height={42} priority />
            <span>Municipalidad de Cholchol</span>
          </a>

          <button
            className="icon-button menu-button"
            type="button"
            aria-label="Abrir menu de navegacion"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
            <button
              className="contrast-button"
              type="button"
              aria-pressed={contrast}
              onClick={toggleContrast}
            >
              {contrast ? 'Contraste normal' : 'Alto contraste'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
