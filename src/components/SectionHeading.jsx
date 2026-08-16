export default function SectionHeading({ index, label, title, id, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__label">{label}</span>
      </p>
      {title ? (
        <h2 id={id} className="section-heading__title">
          {title}
        </h2>
      ) : null}
    </header>
  )
}
