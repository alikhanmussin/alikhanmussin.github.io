export const opsGraphBenchmarks = [
  { value: '96.7%', label: 'Category accuracy', context: '58/60 labeled simulated incidents' },
  { value: '76.7%', label: 'Severity accuracy', context: '46/60 labeled simulated incidents' },
  { value: '90%', label: 'Top-5 historical-incident retrieval', context: '27/30 paraphrased semantic-search queries' },
]

export const additionalProjects = [
  {
    id: 'tracelite',
    name: 'TraceLite',
    year: '2026',
    type: 'Personal project · Lightweight Error Monitoring Platform',
    headline: 'From application exceptions to actionable error reports.',
    description: 'A lightweight application error-monitoring platform with a Python SDK, FastAPI ingestion API, persistent event storage, duplicate-error grouping, automated tests, CI, and a React monitoring dashboard.',
    benchmarks: [
      { value: '100%', label: 'Capture rate', context: '30/30 simulated Python exception types' },
      { value: '80%', label: 'Duplicate-record reduction', context: '100 simulated events → 20 grouped issues' },
    ],
    features: [
      { title: 'Capture the context', description: 'The benchmark verifies exception type, stack traces, application/environment metadata, and successful API delivery from the Python SDK.' },
      { title: 'Group repeated errors', description: 'SHA-256 fingerprints group repeated exceptions in SQLite through SQLAlchemy. The benchmark avoided 80 duplicate records and verified correct occurrence counts.' },
      { title: 'Inspect and verify', description: 'A React dashboard displays grouped errors and stack traces. Backend and API integration tests run with pytest and GitHub Actions CI.' },
    ],
    contribution: 'Developed using feature branches, pull requests, code review, and merge workflows.',
    topics: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'React', 'pytest', 'GitHub Actions'],
    source: 'https://github.com/alikhanmussin/tracelite',
  },
  {
    id: 'cognilock',
    name: 'CogniLock',
    year: '2023',
    type: 'Team project · Human verification concept',
    headline: 'Exploring what makes verification human.',
    description: 'A human-verification concept combining cognitive challenges with physical movements, designed to explore alternatives to traditional CAPTCHA systems as automated solving techniques advance.',
    contribution: 'Contributed to the design and development of the concept with the project team, exploring usability, security, and resistance to automated attacks.',
    topics: ['AI', 'Cybersecurity', 'Human verification'],
  },
]
