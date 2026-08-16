import ExperienceItem from '../components/ExperienceItem'
import SectionHeading from '../components/SectionHeading'

export default function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-heading">
      <div className="wrap">
        <SectionHeading
          id="experience-heading"
          index="04"
          label="Experience"
          title="Commercial roles, in order."
        />
        <div className="experience__list">
          <ExperienceItem
            role="Technical Team Member"
            company="Fresh Bites Group LTD"
            dates="Jan 2026 – Present"
            summary="Full-stack delivery of customer-facing interfaces and supporting backend logic."
            points={[
              'Building responsive frontend interfaces with React and supporting backend logic in Node.js.',
              'Integrating third-party APIs and cloud services across the development lifecycle.',
              'Contributing to technical documentation and architecture discussions.',
            ]}
            technologies={['React', 'Node.js']}
          />
          <ExperienceItem
            role="Web Developer Placement"
            company="Cubeq Analytica LTD"
            dates="May 2025 – Dec 2025"
            summary="Placement focused on Eventfull Marketplace — product UI, vendor tooling, and a Django backend prototype."
            points={[
              'Built the Eventfull Marketplace frontend: Home Page, Vendor Registration, and multi-step onboarding.',
              'Designed a Vendor Dashboard for bookings, analytics, messaging, and profile controls.',
              'Developed a Django prototype with authentication, CRUD, form validation, and an admin panel.',
              'Connected Angular and React modules to REST APIs with reusable components, caching, and secure workflows.',
              'Reviewed the organiser-side React frontend, tested Finance backend APIs, and maintained onboarding docs.',
            ]}
            technologies={['Angular', 'React', 'TypeScript', 'Bootstrap', 'Django', 'REST APIs']}
          />
          <ExperienceItem
            featured
            role="System Engineer (Full Stack)"
            company="Infosys"
            dates="Jul 2022 – Aug 2024"
            summary="The broadest stretch of the work: immersive 3D training, real-time knowledge platforms, and an AI-driven media product."
            points={[
              'Built immersive metaverse training applications in Unity and Blender, including virtual psychometric assessments with motion systems and analytics.',
              'Developed knowledge-platform UIs in AngularJS and TypeScript, with Node.js, MongoDB, and Redis. Redesigned the UI with infinite scroll to cut initial load times.',
              'Shipped an AI-driven PPT/video generation platform in Angular, Fabric.js, TypeScript, and SCSS — including PPT-to-video conversion, AWS voice-overs, avatars, and real-time editing.',
              'Optimized REST APIs with MongoDB, Redis caching, and WebSockets, reducing redundant API calls by 70% and improving real-time performance.',
              'Improved backend scalability and memory service performance, reducing latency.',
            ]}
            technologies={[
              'Unity',
              'C#',
              'Blender',
              'Angular',
              'AngularJS',
              'Node.js',
              'MongoDB',
              'Redis',
              'WebSockets',
              'Fabric.js',
              'AWS',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
