import AccessibilitySummary from '@/components/AccessibilitySummary';
import BackToTop from '@/components/BackToTop';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import NewsPanel from '@/components/NewsPanel';
import ServicesGrid from '@/components/ServicesGrid';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { getSiteContent } from '@/lib/site-data';

export default function HomePage() {
  const content = getSiteContent();

  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal" tabIndex={-1}>
        <Hero about={content.about} />

        <section className="section" id="nosotros" aria-labelledby="nosotros-title">
          <div className="container two-column">
            <div>
              <span className="eyebrow">Nosotros</span>
              <h2 id="nosotros-title">Rediseño frontend con enfoque ciudadano</h2>
              <p>
                Esta version conserva el proyecto anterior de Cholchol y lo transforma
                en una aplicacion React con datos reutilizables, rutas API internas y
                componentes preparados para crecer.
              </p>
            </div>
            <AccessibilitySummary items={content.summaryItems} />
          </div>
        </section>

        <section className="section section-soft" id="servicios" aria-labelledby="servicios-title">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Atencion ciudadana</span>
              <h2 id="servicios-title">Servicios municipales destacados</h2>
              <p>
                Tarjetas reutilizables con imagen, titulo, descripcion y boton de
                contacto que rellena automaticamente el servicio seleccionado.
              </p>
            </div>
            <ServicesGrid initialServices={content.services} />
          </div>
        </section>

        <section className="section" id="testimonios" aria-labelledby="testimonios-title">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Experiencia usuaria</span>
              <h2 id="testimonios-title">Testimonios</h2>
            </div>
            <TestimonialsCarousel testimonials={content.testimonials} />
          </div>
        </section>

        <section className="section section-soft" id="noticias" aria-labelledby="noticias-title">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Comunidad informada</span>
              <h2 id="noticias-title">Noticias y avisos</h2>
              <p>Contenido renderizado desde datos desacoplados para simular un CMS simple.</p>
            </div>
            <NewsPanel news={content.news} />
          </div>
        </section>

        <FaqSection faqs={content.faqs} />
        <ContactSection services={content.services} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
