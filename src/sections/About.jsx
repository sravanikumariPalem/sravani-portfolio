import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="wrap">
        <SectionHeading index="01" label="About" />
        <div className="about__grid">
          <Reveal>
            <h2 id="about-heading" className="about__quote">
              Building across the stack — from the interface to the system underneath.
            </h2>
            <p className="about__text">
              I am a Full Stack Developer with 2+ years of commercial experience shipping scalable
              web applications in React, Angular, Node.js, and Django. The work ranges from API
              optimization with Redis and WebSockets to real-time 3D environments and AI-integrated
              tools. I am currently completing an MSc in Advanced Computer Science with industry
              placement at the University of Hertfordshire.
            </p>
          </Reveal>
          <Reveal className="about__meta" delay={80} as="dl">
            <div>
              <dt>02+</dt>
              <dd>Years experience</dd>
            </div>
            <div>
              <dt>Hatfield</dt>
              <dd>United Kingdom</dd>
            </div>
            <div>
              <dt>MSc</dt>
              <dd>Advanced Computer Science</dd>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
