import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SkillGroup from '../components/SkillGroup'

export default function Skills() {
  return (
    <section className="section skills" id="stack" aria-labelledby="stack-heading">
      <div className="wrap">
        <SectionHeading
          id="stack-heading"
          index="05"
          label="Technical Stack"
          title="A map of the tools, not a logo wall."
        />
        <Reveal className="skills__map">
          <SkillGroup
            title="Frontend"
            skills={[
              'React',
              'Angular',
              'AngularJS',
              'JavaScript',
              'TypeScript',
              'HTML',
              'CSS',
              'SCSS',
              'Fabric.js',
              'Bootstrap',
              'Chart.js',
            ]}
          />
          <SkillGroup
            title="Backend"
            skills={[
              'Node.js',
              'Express.js',
              'Django',
              'REST APIs',
              'Socket.IO',
              'Redis',
              'WebSockets',
            ]}
          />
          <SkillGroup title="Databases" skills={['MongoDB', 'MySQL', 'PostgreSQL']} />
          <SkillGroup
            title="AI / ML"
            skills={['Machine Learning', 'Deep Learning', 'CNN', 'LSTM']}
          />
          <SkillGroup
            title="3D / Cloud / Tools"
            skills={['Unity', 'C#', 'Blender', 'AWS', 'Git', 'Linux', 'Java', 'Python']}
          />
        </Reveal>
      </div>
    </section>
  )
}
