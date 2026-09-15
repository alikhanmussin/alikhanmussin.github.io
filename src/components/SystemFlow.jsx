export default function SystemFlow() {
  return (
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
  )
}
