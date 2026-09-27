import './App.css'
import Landing, { PortfolioHeader } from './components/Landing'
import FeaturedProject from './components/FeaturedProject'
import MoreProjects from './components/MoreProjects'
import About from './components/About'
import Contact from './components/Contact'
import SkillsEducation from './components/SkillsEducation'
import MnistProject from './components/MnistProject'

const source = 'https://github.com/alikhanmussin/opsgraph-ai'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <PortfolioHeader />
      <main id="main">
        <Landing />
        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 className="section-title" id="projects-title">My Projects</h2>
          <MnistProject />
          <FeaturedProject source={source} />
          <MoreProjects />
        </section>
        <About />
        <SkillsEducation />
        <Contact />
      </main>
    </div>
  )
}
