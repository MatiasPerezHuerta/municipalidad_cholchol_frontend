export default function AccessibilitySummary({ items }) {
  return (
    <div className="summary-grid" aria-label="Indicadores del proyecto">
      {items.map((item) => (
        <article className="summary-card" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  );
}
