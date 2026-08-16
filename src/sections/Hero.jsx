export default function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-name">
      <div className="hero__copy">
        <p className="hero__role">Full Stack Developer</p>
        <h1 id="hero-name" className="hero__name">
          <span>Sravani Kumari</span>
          <span className="hero__surname">Palem</span>
        </h1>
        <p className="hero__statement">
          Building production systems across the stack — web experiences, real-time backends, and
          AI-powered tools.
        </p>
        <p className="hero__lede">
          2+ years of commercial experience across React, Angular, Node.js, and Django. Work spans
          real-time systems, AI-integrated tools, and immersive 3D applications.
        </p>
        <p className="hero__place">Hatfield, UK</p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#work">
            View my work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact me
          </a>
          <a
            className="hero__linkedin"
            href="https://www.linkedin.com/in/sravani-kumari-palem"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="system" aria-hidden="true">
        <div className="system__layer system__layer--ui">
          <span>Interface</span>
          <small>React · Angular</small>
        </div>
        <div className="system__layer system__layer--api">
          <span>Real-time</span>
          <small>Node.js · WebSockets</small>
        </div>
        <div className="system__layer system__layer--sim">
          <span>AI / 3D</span>
          <small>Unity · Fabric.js</small>
        </div>
        <span className="system__node system__node--a">Redis</span>
        <span className="system__node system__node--b">AWS</span>
        <span className="system__pulse" />
      </div>
    </section>
  )
}
