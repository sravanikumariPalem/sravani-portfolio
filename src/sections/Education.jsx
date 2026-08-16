import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Education() {
  return (
    <section className="section education" id="education" aria-labelledby="education-heading">
      <div className="wrap">
        <SectionHeading index="06" label="Education" />
        <Reveal className="education__panel">
          <p className="education__status">In progress</p>
          <h2 id="education-heading" className="education__title">
            MSc Advanced Computer Science
            <span>(with Placement)</span>
          </h2>
          <p className="education__school">University of Hertfordshire</p>
          <p className="education__dates">Sep 2024 – Present</p>
        </Reveal>
      </div>
    </section>
  )
}
