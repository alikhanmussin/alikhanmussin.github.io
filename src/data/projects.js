export const additionalProjects = [
  {
    id: 'tracelite',
    name: 'TraceLite',
    year: '2026',
    type: 'Personal project · Lightweight Error Monitoring Platform',
    headline: 'From application exceptions to actionable error reports.',
    description: 'A lightweight application error-monitoring platform with a Python SDK, FastAPI ingestion API, persistent event storage, duplicate-error grouping, automated tests, CI, and a React monitoring dashboard.',
    features: [
      { title: 'Capture the context', description: 'The Python SDK captures exceptions, stack traces, app name, and environment, then sends structured error events to the FastAPI ingestion API.' },
      { title: 'Group repeated errors', description: 'SQLAlchemy and SQLite persist events. SHA-256 fingerprints group repeated exceptions and track occurrence counts.' },
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
