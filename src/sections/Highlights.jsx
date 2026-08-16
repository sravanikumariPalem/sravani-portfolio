import Highlight from '../components/Highlight'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Highlights() {
  return (
    <section className="section highlights" aria-labelledby="highlights-heading">
      <div className="wrap">
        <SectionHeading index="02" label="Engineering Highlights" />
        <Reveal>
          <h2 id="highlights-heading" className="highlights__intro">
            Measurable systems work — performance, live communication, media generation, and
            immersive environments.
          </h2>
        </Reveal>
        <div className="highlights__grid">
          <Reveal>
            <Highlight
              featured
              value="70%"
              label="API optimization"
              detail="Reduction in redundant API calls and improved latency through Redis caching and WebSockets."
            />
          </Reveal>
          <Reveal delay={60}>
            <Highlight
              value="Real-time"
              label="WebSocket systems"
              detail="Live communication with WebSockets and Socket.IO across knowledge platforms and product UIs."
            />
          </Reveal>
          <Reveal delay={90}>
            <Highlight
              value="AI + Video"
              label="Content generation"
              detail="AI-driven PPT and video generation with AWS voice-overs, avatars, and real-time editing."
            />
          </Reveal>
          <Reveal delay={120}>
            <Highlight
              value="3D"
              label="Immersive applications"
              detail="Unity and Blender training environments with interactive simulations, motion systems, and analytics."
            />
          </Reveal>
        </div>
        <Reveal className="highlights__stack">
          <p>
            <span>Full stack</span>
            React · Angular · Node.js · Django
          </p>
        </Reveal>
      </div>
    </section>
  )
}
