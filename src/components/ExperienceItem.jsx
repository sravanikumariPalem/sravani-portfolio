import Reveal from './Reveal'

export default function ExperienceItem({
  role,
  company,
  dates,
  summary,
  points,
  technologies,
  featured = false,
}) {
  return (
    <article className={`experience-item${featured ? ' experience-item--featured' : ''}`}>
      <Reveal className="experience-item__meta">
        <p className="experience-item__dates">{dates}</p>
        <p className="experience-item__company">{company}</p>
      </Reveal>
      <Reveal className="experience-item__body" delay={60}>
        <h3 className="experience-item__role">{role}</h3>
        <p className="experience-item__summary">{summary}</p>
        <ul className="experience-item__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="experience-item__tech">{technologies.join('  ·  ')}</p>
      </Reveal>
    </article>
  )
}
