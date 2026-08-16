import SectionHeading from '../components/SectionHeading'
import WorkItem from '../components/WorkItem'

function EditorVisual() {
  return (
    <div className="visual visual--editor" aria-hidden="true">
      <div className="visual__chrome">
        <span />
        <span />
        <span />
        <p>Canvas · Real-time edit</p>
      </div>
      <div className="visual__stage">
        <div className="slide">
          <b />
          <i />
          <i />
        </div>
        <div className="avatar" />
        <div className="wave">
          <em />
          <em />
          <em />
          <em />
          <em />
        </div>
      </div>
      <div className="visual__timeline">
        <span />
        <span className="is-on" />
        <span />
        <span />
      </div>
    </div>
  )
}

function SpaceVisual() {
  return (
    <div className="visual visual--space" aria-hidden="true">
      <div className="iso iso--a" />
      <div className="iso iso--b" />
      <div className="iso iso--c" />
      <div className="orbit" />
      <p>Unity · Motion · Analytics</p>
    </div>
  )
}

function StreamVisual() {
  return (
    <div className="visual visual--stream" aria-hidden="true">
      <p className="visual--stream__metric">70%</p>
      <p className="visual--stream__caption">Fewer redundant API calls</p>
      <div className="stream">
        <span className="stream__bar" />
        <span className="stream__bar" />
        <span className="stream__bar" />
        <span className="stream__bar" />
      </div>
    </div>
  )
}

function MarketVisual() {
  return (
    <div className="visual visual--market" aria-hidden="true">
      <aside>
        <b />
        <i />
        <i />
        <i />
      </aside>
      <div className="market-main">
        <div className="market-card" />
        <div className="market-card" />
        <div className="market-row" />
        <div className="market-row" />
      </div>
    </div>
  )
}

export default function SelectedWork() {
  return (
    <section className="section work" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <SectionHeading
          id="work-heading"
          index="03"
          label="Selected Work"
          title="Production systems, not side projects."
        />
        <div className="work__list">
          <WorkItem
            index="01"
            title="AI-driven PPT / video platform"
            technologies={['Angular', 'Fabric.js', 'TypeScript', 'SCSS', 'AWS']}
            visual={<EditorVisual />}
          >
            <p>
              An AI-driven generation platform for presentations and video. The product converts
              PPT into video, layers AWS voice-overs and avatars, and supports real-time editing on
              a Fabric.js canvas.
            </p>
          </WorkItem>

          <WorkItem
            index="02"
            title="Immersive metaverse training"
            technologies={['Unity', 'C#', 'Blender 3D']}
            visual={<SpaceVisual />}
            reverse
          >
            <p>
              Immersive training applications built in Unity and Blender. The environments support
              virtual psychometric assessments, interactive simulations, motion systems, and
              analytics.
            </p>
          </WorkItem>

          <WorkItem
            index="03"
            title="Real-time knowledge platform"
            technologies={['AngularJS', 'Node.js', 'MongoDB', 'Redis', 'TypeScript', 'WebSockets']}
            visual={<StreamVisual />}
          >
            <p>
              Responsive knowledge-platform UI with redesigned UX and infinite scroll to load data
              dynamically and cut initial load times. REST APIs were optimized with MongoDB, Redis
              caching, and WebSockets — reducing redundant API calls by 70% and improving real-time
              performance.
            </p>
          </WorkItem>

          <WorkItem
            index="04"
            title="Eventfull Marketplace"
            technologies={['Angular', 'React', 'TypeScript', 'Bootstrap', 'Django', 'REST APIs']}
            visual={<MarketVisual />}
            reverse
          >
            <p>
              Product engineering for a marketplace: Home Page, Vendor Registration, and multi-step
              onboarding in Angular. A Vendor Dashboard covers booking management, analytics,
              messaging, and profile controls. A Django prototype added authentication, CRUD,
              validation, and an admin panel, with React components wired to Django REST APIs.
            </p>
          </WorkItem>
        </div>
      </div>
    </section>
  )
}
