import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="wrap">
        <SectionHeading index="08" label="Contact" />
        <Reveal>
          <h2 id="contact-heading" className="contact__title">
            Let’s build something
          </h2>
          <p className="contact__lede">
            Interested in building modern web applications, real-time systems, or AI-powered
            products?
          </p>
        </Reveal>
        <Reveal className="contact__details" delay={80} as="address">
          <a href="mailto:sravanikumaripalem@gmail.com">sravanikumaripalem@gmail.com</a>
          <p>Hatfield, UK</p>
          <a
            href="https://www.linkedin.com/in/sravani-kumari-palem"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/sravani-kumari-palem
          </a>
        </Reveal>
      </div>
    </section>
  )
}
