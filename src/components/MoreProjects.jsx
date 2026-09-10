import { additionalProjects } from '../data/projects'

export default function MoreProjects() {
  return (
    <section className="more-projects" aria-labelledby="more-projects-title">
      <p className="eyebrow">02 / MORE EXPLORATIONS</p>
      <h2 id="more-projects-title" className="section-title">A different kind of challenge.</h2>
      {additionalProjects.map(project => (
        <article className="secondary-project" key={project.id}>
          <div className="secondary-identity">
            <p className="project-meta">{project.type}</p>
            <h3>{project.name}<span aria-hidden="true">.</span></h3>
            <p className="project-year">{project.year}</p>
            <ul className="project-stack" aria-label={`${project.name} topics`}>{project.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
          </div>
          <div className="secondary-story">
            <h4>{project.headline}</h4>
            <p>{project.description}</p>
            <div className="contribution"><span>MY CONTRIBUTION</span><p>{project.contribution}</p></div>
          </div>
        </article>
      ))}
    </section>
  )
}
