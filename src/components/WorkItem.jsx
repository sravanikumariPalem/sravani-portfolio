import Reveal from './Reveal'

export default function WorkItem({
  index,
  title,
  technologies,
  children,
  visual,
  reverse = false,
}) {
  return (
    <article className={`work-item${reverse ? ' work-item--reverse' : ''}`}>
      <Reveal className="work-item__copy">
        <p className="work-item__index">Work {index}</p>
        <h3 className="work-item__title">{title}</h3>
        <div className="work-item__body">{children}</div>
        <ul className="work-item__tech" aria-label="Technologies">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="work-item__visual" delay={80}>
        {visual}
      </Reveal>
    </article>
  )
}
