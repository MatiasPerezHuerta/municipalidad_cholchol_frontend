import Image from 'next/image';

export default function NewsPanel({ news }) {
  return (
    <div className="card-grid">
      {news.map((item) => (
        <article className="news-card" key={item.title}>
          <div className="service-image">
            <Image src={item.image} alt={item.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
          </div>
          <div className="card-content">
            <span className="badge">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a className="primary-link" href="#contacto">
              Solicitar mas informacion
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
