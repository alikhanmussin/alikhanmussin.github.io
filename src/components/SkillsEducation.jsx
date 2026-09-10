const skillGroups = [
  { number: '01', title: 'Programming & web', tools: ['Python', 'SQL', 'JavaScript', 'React', 'FastAPI', 'REST APIs', 'HTML / CSS'] },
  { number: '02', title: 'Databases & storage', tools: ['SQLAlchemy', 'SQLite', 'MySQL', 'Neo4j'] },
  { number: '03', title: 'AI & analytics', tools: ['Hugging Face Transformers', 'Sentence Transformers', 'NLP', 'Semantic search', 'Power BI'] },
  { number: '04', title: 'Development tools', tools: ['Git', 'GitHub', 'VS Code'] },
]

export default function SkillsEducation() {
  return (
    <>
      <section className="skills-section" id="skills" aria-labelledby="skills-title">
        <p className="eyebrow">04 / TECHNICAL SKILLS</p>
        <div className="skills-intro"><h2 className="section-title" id="skills-title">Tools I work with.</h2><p>Across coursework and projects, from working with data to building an interface around it.</p></div>
        <div className="skills-grid">
          {skillGroups.map(group => (
            <div className="skill-group" key={group.number}>
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
              <ul>{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="education-section" id="education" aria-labelledby="education-title">
        <div><p className="eyebrow">05 / EDUCATION</p><h2 className="section-title" id="education-title">Building the foundation.</h2></div>
        <div className="education-record">
          <p className="degree-label">BACHELOR’S DEGREE / IN PROGRESS</p>
          <h3>Information Technology</h3>
          <p className="university">Czech University of Life Sciences Prague</p>
          <div className="education-meta"><span>Prague, Czech Republic</span><span>Expected graduation · May 2028</span></div>
        </div>
      </section>
    </>
  )
}
