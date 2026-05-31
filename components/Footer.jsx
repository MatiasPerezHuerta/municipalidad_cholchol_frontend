export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-inner">
        <p>© {currentYear} Rediseño academico Municipalidad de Cholchol.</p>
        <div>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
          <a href="/api/site-content">API</a>
        </div>
      </div>
    </footer>
  );
}
