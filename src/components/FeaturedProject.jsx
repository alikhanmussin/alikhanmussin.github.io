import ProjectBenchmarks from './ProjectBenchmarks'
import { opsGraphBenchmarks } from '../data/projects'

const stack = ['Python', 'FastAPI', 'React', 'SQLAlchemy', 'SQLite', 'Hugging Face', 'Sentence Transformers']

export default function FeaturedProject({ source }) {
  return (
    <section className="featured-section" id="projects" aria-labelledby="featured-title">
      <div className="section-heading"><p className="eyebrow">01 / FEATURED PROJECT</p><span>Personal project · 2026</span></div>
      <div className="project-heading">
        <div><h2 id="featured-title">OpsGraph <span>AI</span></h2><p className="project-subtitle">Incident intelligence, with a human in the loop.</p></div>
        <a className="button source-button" href={source} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
      </div>
      <div className="project-layout">
        <figure className="project-preview">
          <div className="preview-label"><span className="preview-dot" aria-hidden="true" />ANALYSIS WORKSPACE<span>LOCAL DEMO</span></div>
          <a className="screenshot-link" href="/images/opsgraph-desktop.jpg" target="_blank" rel="noreferrer" aria-label="Open full OpsGraph AI analysis screenshot in a new tab">
            <div className="screenshot-frame updated-workspace"><img src="/images/opsgraph-desktop.jpg" width="2879" height="1657" loading="lazy" alt="OpsGraph AI desktop workspace showing incident metrics and an authentication incident ready for analysis." /></div>
          </a>
          <figcaption>Real application screenshot <span>Open full image ↗</span></figcaption>
        </figure>
        <div className="project-story">
          <p className="project-description">Operational incidents arrive as free text. I built a full-stack platform to classify them, find related cases, and help an analyst review the recommendation.</p>
          <ol className="feature-list">
            <li><span>01</span><div><h3>Classify the incident</h3><p>Zero-shot NLP and technical decision rules identify category and severity.</p></div></li>
            <li><span>02</span><div><h3>Connect the history</h3><p>Semantic similarity surfaces related incidents beyond exact keyword matches.</p></div></li>
            <li><span>03</span><div><h3>Keep the analyst involved</h3><p>Stored corrections and validated historical cases inform future recommendations.</p></div></li>
          </ol>
        </div>
      </div>
      <ProjectBenchmarks name="OpsGraph AI" metrics={opsGraphBenchmarks} />
      <ul className="project-stack" aria-label="OpsGraph AI technologies">{stack.map(technology => <li key={technology}>{technology}</li>)}</ul>
      <details className="architecture">
        <summary>Under the hood <span aria-hidden="true">+</span></summary>
        <div className="architecture-grid">
          <div><h3>Interface</h3><p>React provides incident input, search, filtering, analytics, and history views.</p></div>
          <div><h3>API & analysis</h3><p>FastAPI connects classification rules, Hugging Face zero-shot classification, and Sentence Transformer embeddings with cosine similarity. Classification was evaluated on 60 labeled simulated incidents, 10 per category; retrieval used 30 paraphrased queries with known relevant historical incidents.</p></div>
          <div><h3>Persistence & feedback</h3><p>SQLAlchemy and SQLite store incidents and analyst corrections for use in later recommendations.</p></div>
        </div>
      </details>
    </section>
  )
}
