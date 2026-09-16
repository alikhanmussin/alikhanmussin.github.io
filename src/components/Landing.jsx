import { useEffect, useRef, useState } from 'react'
import './Landing.css'

const navigation = [
  ['Overview', '#main'], ['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact'],
]

export function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const dialog = useRef(null)
  const toggle = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const menu = dialog.current
    const menuButton = toggle.current
    const previousOverflow = document.body.style.overflow
    menu.showModal()
    document.body.style.overflow = 'hidden'
    const desktop = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      menu.close()
      document.body.style.overflow = previousOverflow
      desktop.removeEventListener('change', closeOnDesktop)
      menuButton?.focus({ preventScroll: true })
    }
  }, [menuOpen])

  return (
    <header className="portfolio-header">
      <a className="portfolio-logo" href="#main" aria-label="Alikhan Mussin home">
        <span className="monogram" aria-hidden="true">am.</span>
        <span>Alikhan <span className="logo-surname">Mussin</span></span>
      </a>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {navigation.map(([label, href]) => <a className="metal-link" href={href} key={href}>{label}</a>)}
      </nav>
      <a className="button primary header-contact" href="https://github.com/alikhanmussin" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      <button className="menu-toggle" ref={toggle} onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="portfolio-menu"><span /><span /><span /></button>
      <dialog id="portfolio-menu" className="portfolio-menu" ref={dialog} onCancel={() => setMenuOpen(false)} onClose={() => setMenuOpen(false)} aria-label="Navigation menu" onClick={event => { if (event.target === event.currentTarget) setMenuOpen(false) }}>
        <button className="menu-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>×</button>
        <nav aria-label="Mobile navigation">
          {navigation.map(([label, href], index) => <a href={href} key={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}<span aria-hidden="true">↗</span></a>)}
        </nav>
        <p>Alikhan Mussin · Prague, Czech Republic</p>
      </dialog>
    </header>
  )
}

export default function Landing() {
  return (
    <section className="landing" aria-labelledby="hero-title">
      <div className="ambient-light" aria-hidden="true"><div className="light-arc" /><div className="light-arc arc-secondary" /></div>
      <div className="landing-coordinate" aria-hidden="true"><span>PORTFOLIO / 2026</span><span>PRAGUE, CZ</span></div>
      <div className="landing-copy">
        <p className="landing-eyebrow entrance" style={{ '--delay': '.2s' }}>ALIKHAN MUSSIN / IT STUDENT</p>
        <h1 id="hero-title"><span className="headline-line"><span className="entrance" style={{ '--delay': '.3s' }}>From complex data</span></span><span className="headline-line"><span className="entrance" style={{ '--delay': '.45s' }}>to <em>clear solutions.</em></span></span></h1>
        <p className="landing-intro entrance" style={{ '--delay': '.6s' }}>I’m Alikhan, an IT student at CZU Prague. I build with Python, data, and AI to turn information into useful software.</p>
        <div className="landing-actions entrance" style={{ '--delay': '.75s' }}>
          <a className="button primary" href="#projects">Explore my projects <span aria-hidden="true">↗</span></a>
          <a className="button source-button" href="/Alikhan-Mussin-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="landing-bottom entrance" style={{ '--delay': '.9s' }}>
        <div className="landing-meta"><p>SELECTED BENCHMARKS <span>· CONTROLLED, SIMULATED DATA</span></p><a href="#projects">Discover the work <span aria-hidden="true">↓</span></a></div>
        <div className="landing-stats">
          <a href="#tracelite"><strong>100<span>%</span></strong><span>TraceLite capture rate<small>30/30 simulated exception types</small></span></a>
          <a href="#projects"><strong>96.7<span>%</span></strong><span>OpsGraph category accuracy<small>58/60 labeled simulated incidents</small></span></a>
          <a href="#projects"><strong>90<span>%</span></strong><span>OpsGraph Top-5 retrieval<small>27/30 semantic-search queries</small></span></a>
        </div>
      </div>
    </section>
  )
}
