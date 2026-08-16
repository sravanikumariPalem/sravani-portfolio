import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const CERTS = [
  { name: 'Infosys Certified: Node.js Professional', date: 'Jul 2023' },
  { name: 'MongoDB Developer', date: 'Apr 2023' },
  { name: 'Angular Professional', date: 'Apr 2023' },
  { name: 'Angular Associate', date: 'Sep 2022' },
]

export default function Certifications() {
  return (
    <section className="section certs" id="certifications" aria-labelledby="certs-heading">
      <div className="wrap">
        <SectionHeading index="07" label="Certifications" />
        <h2 id="certs-heading" className="sr-only">
          Certifications
        </h2>
        <Reveal as="ul" className="certs__list">
          {CERTS.map((cert) => (
            <li key={cert.name}>
              <span>{cert.name}</span>
              <time>{cert.date}</time>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
