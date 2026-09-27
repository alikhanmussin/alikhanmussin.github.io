export default function ProjectBenchmarks({ name, metrics, caption = 'CONTROLLED BENCHMARKS · SIMULATED DATA', note = 'Measured on controlled, simulated datasets; these are not production statistics.' }) {
  return (
    <div className="project-benchmarks" role="group" aria-label={`${name} benchmark results`}>
      <p className="benchmark-caption">{caption}</p>
      <dl className="benchmark-metrics">
        {metrics.map(metric => (
          <div key={metric.label}>
            <dt>{metric.label}</dt>
            <dd><strong>{metric.value}</strong><span>{metric.context}</span></dd>
          </div>
        ))}
      </dl>
      <p className="benchmark-note">{note}</p>
    </div>
  )
}
