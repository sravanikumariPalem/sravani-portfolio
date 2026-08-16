import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'
import SelectedWork from './sections/SelectedWork'
import Skills from './sections/Skills'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <SelectedWork />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
