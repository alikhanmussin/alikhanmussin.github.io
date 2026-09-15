export default function ProjectBenchmarks({ name, metrics }) {
  return (
    <div className="project-benchmarks" role="group" aria-label={`${name} benchmark results`}>
      <p className="benchmark-caption">CONTROLLED BENCHMARKS · SIMULATED DATA</p>
      <dl className="benchmark-metrics">
        {metrics.map(metric => (
          <div key={metric.label}>
            <dt>{metric.label}</dt>
            <dd><strong>{metric.value}</strong><span>{metric.context}</span></dd>
          </div>
        ))}
      </dl>
      <p className="benchmark-note">Measured on controlled, simulated datasets; these are not production statistics.</p>
    </div>
  )
}
