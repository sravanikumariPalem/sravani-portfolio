export default function Highlight({ value, label, detail, featured = false }) {
  return (
    <article className={`highlight${featured ? ' highlight--featured' : ''}`}>
      <p className="highlight__value">{value}</p>
      <h3 className="highlight__label">{label}</h3>
      <p className="highlight__detail">{detail}</p>
    </article>
  )
}
