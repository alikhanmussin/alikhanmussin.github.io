import './App.css'
import FeaturedProject from './components/FeaturedProject'
import MoreProjects from './components/MoreProjects'
import About from './components/About'
import Contact from './components/Contact'
import SkillsEducation from './components/SkillsEducation'

const source = 'https://github.com/alikhanmussin/opsgraph-ai'

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <a className="wordmark" href="#main" aria-label="Alikhan Mussin home">am<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#main">Overview</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/alikhanmussin" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
        <span className="location">Prague, Czech Republic</span>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="availability"><span aria-hidden="true" />Open to internships</p>
            <p className="eyebrow">ALIKHAN MUSSIN / IT STUDENT</p>
            <h1 id="hero-title">From complex data<br />to <em>clear solutions.</em></h1>
            <p className="intro">I’m Alikhan, an IT student at CZU Prague exploring data, AI, and software development. I build projects that turn information into something useful.</p>
            <div className="hero-actions">
              <a className="button source-button" href="/Alikhan-Mussin-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
              <a className="button primary" href="#projects">Explore OpsGraph AI <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="https://github.com/alikhanmussin" target="_blank" rel="noreferrer">GitHub profile <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <figure className="flow" aria-labelledby="flow-caption">
            <div className="flow-heading"><span>OPSGRAPH AI</span><span>01 / SYSTEM FLOW</span></div>
            <div className="flow-body">
              <div className="flow-step"><span className="step-number">01</span><div><span className="step-label">INPUT</span><h2>Operational incident</h2><p>Unstructured incident description</p></div></div>
              <div className="connector" aria-hidden="true"><span /></div>
              <div className="flow-step analysis"><span className="step-number">02</span><div><span className="step-label">ANALYSIS</span><h2>Find the signal.</h2><p>NLP + technical decision rules</p><div className="mini-tags"><span>Classification</span><span>Semantic search</span></div></div></div>
              <div className="connector" aria-hidden="true"><span /></div>
              <div className="flow-step"><span className="step-number">03</span><div><span className="step-label">INSIGHT</span><h2>Informed recommendations</h2><p>Category, severity & related incidents</p></div></div>
            </div>
            <figcaption id="flow-caption"><span className="feedback-icon" aria-hidden="true">↳</span> Analyst corrections inform future recommendations.</figcaption>
          </figure>
        </section>
        <div className="hero-footer"><p>DATA ANALYSIS <span>/</span> AI & NLP <span>/</span> SOFTWARE DEVELOPMENT</p><p>BSc in IT <span>·</span> Expected 2028</p></div>
        <FeaturedProject source={source} />
        <MoreProjects />
        <About />
        <SkillsEducation />
        <Contact />
      </main>
    </div>
  )
}

export default App
