import './App.css'
import Landing, { PortfolioHeader } from './components/Landing'
import FeaturedProject from './components/FeaturedProject'
import MoreProjects from './components/MoreProjects'
import About from './components/About'
import Contact from './components/Contact'
import SkillsEducation from './components/SkillsEducation'

const source = 'https://github.com/alikhanmussin/opsgraph-ai'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <PortfolioHeader />
      <main id="main">
        <Landing />
        <FeaturedProject source={source} />
        <MoreProjects />
        <About />
        <SkillsEducation />
        <Contact />
      </main>
    </div>
  )
}
