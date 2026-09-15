import { additionalProjects } from '../data/projects'
import ProjectBenchmarks from './ProjectBenchmarks'

export default function MoreProjects() {
  return (
    <section className="more-projects" aria-labelledby="more-projects-title">
      <p className="eyebrow">02 / SELECTED PROJECTS</p>
      <h2 id="more-projects-title" className="section-title">More problems. Thoughtful solutions.</h2>
      {additionalProjects.map(project => (
        <article className="secondary-project" key={project.id}>
          <div className="secondary-identity">
            <p className="project-meta">{project.type}</p>
            <h3>{project.name}<span aria-hidden="true">.</span></h3>
            <p className="project-year">{project.year}</p>
            <ul className="project-stack" aria-label={`${project.name} topics`}>{project.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
            {project.source && <a className="button source-button secondary-source" href={project.source} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source on GitHub`}>View source <span aria-hidden="true">↗</span></a>}
          </div>
          <div className="secondary-story">
            <h4>{project.headline}</h4>
            <p>{project.description}</p>
            {project.benchmarks && <ProjectBenchmarks name={project.name} metrics={project.benchmarks} />}
            {project.features && <ol className="feature-list">{project.features.map((feature, index) => (
              <li key={feature.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h5>{feature.title}</h5><p>{feature.description}</p></div></li>
            ))}</ol>}
            <div className="contribution"><span>MY CONTRIBUTION</span><p>{project.contribution}</p></div>
          </div>
        </article>
      ))}
    </section>
  )
}
