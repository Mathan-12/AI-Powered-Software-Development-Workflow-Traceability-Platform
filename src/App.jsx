import './App.css'

const navItems = [
  { label: 'Product', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'AI', href: '#ai' },
  { label: 'Technology', href: '#technology' },
]

const overviewCards = [
  { title: 'Requirements', text: 'Define what to build with clarity.' },
  { title: 'Tasks', text: 'Plan, assign, and track execution.' },
  { title: 'Development', text: 'Keep delivery aligned to progress.' },
  { title: 'Testing', text: 'Validate quality before release.' },
  { title: 'Bugs', text: 'Capture and resolve issues fast.' },
  { title: 'Git', text: 'Connect commits and pull requests.' },
  { title: 'AI', text: 'Turn project activity into insight.' },
]

const workflowStages = [
  'Requirement',
  'User Story',
  'Task',
  'Developer',
  'Git Commit',
  'Pull Request',
  'Testing',
  'Bug / Fix',
  'Release',
]

const featureCards = [
  {
    title: 'AI Requirement Analyzer',
    text: 'Turn requirements into structured stories, tasks, acceptance criteria and risks.',
  },
  {
    title: 'Task Management',
    text: 'Create, assign and track development work with full visibility.',
  },
  {
    title: 'Automatic Progress',
    text: 'Calculate project progress from actual workflow activity and delivery signals.',
  },
  {
    title: 'Git Integration',
    text: 'Connect branches, commits and pull requests with development work.',
  },
  {
    title: 'Testing & Bugs',
    text: 'Track test cases, failures, bugs, fixes, retesting and release confidence.',
  },
  {
    title: 'AI Project Assistant',
    text: 'Ask questions about project status, blockers, risk and delivery health.',
  },
  {
    title: 'Analytics',
    text: 'Understand progress, workload, bugs, testing and releases at a glance.',
  },
  {
    title: 'Traceability',
    text: 'Follow a requirement from creation through coding, verification and release.',
  },
]

const roles = [
  {
    title: 'Manager',
    items: ['Projects', 'Teams', 'Requirements', 'Analytics', 'AI Reports'],
  },
  {
    title: 'Team Leader',
    items: ['Team', 'Sprints', 'Tasks', 'Bugs', 'Team Analytics'],
  },
  {
    title: 'Developer',
    items: ['My Tasks', 'Development', 'Git', 'Pull Requests', 'Testing'],
  },
  {
    title: 'Tester',
    items: ['Test Cases', 'Testing Queue', 'Bugs', 'Evidence', 'Retesting'],
  },
]

const aiHighlights = [
  'AI Requirement Analysis',
  'AI Bug Analysis',
  'AI Sprint Reports',
  'AI Project Assistant',
]

const analyticsMetrics = [
  { label: 'Project Progress', value: '78%' },
  { label: 'Tasks', value: '86' },
  { label: 'Open Bugs', value: '12' },
  { label: 'Test Pass', value: '91%' },
]

const techStack = [
  'React',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'REST API',
  'GitHub',
  'LLM API',
  'Docker',
  'AWS',
]

const securityItems = [
  'JWT Authentication',
  'Role-Based Access',
  'Permission Control',
  'Input Validation',
  'Audit Logs',
  'API Protection',
]

function App() {
  return (
    <div className="home-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">
            <span>DF</span>
          </div>
          <span className="brand-name">DevFlow AI</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="/login" className="link-button">
            Login
          </a>
          <a href="/register" className="primary-button">
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">AI-POWERED SOFTWARE DEVELOPMENT PLATFORM</p>
            <h1>From Requirement to Release, All in One Workflow.</h1>
            <p className="hero-text">
              Connect requirements, teams, tasks, development, testing, Git activity,
              bugs, and releases with intelligent project tracking.
            </p>
            <div className="hero-actions">
              <a href="/register" className="primary-button large-btn">
                Get Started →
              </a>
              <a href="#workflow" className="secondary-button large-btn">
                Explore Workflow ↓
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Project overview dashboard">
            <div className="dashboard-card">
              <div className="card-header">
                <span>Project Overview</span>
              </div>

              <div className="progress-row">
                <span>Overall Progress</span>
                <strong>78%</strong>
              </div>
              <div className="progress-bar">
                <span style={{ width: '78%' }} />
              </div>

              <ul className="stats-list">
                <li>
                  <span>Requirements</span>
                  <strong>24</strong>
                </li>
                <li>
                  <span>Tasks</span>
                  <strong>86</strong>
                </li>
                <li>
                  <span>Open Bugs</span>
                  <strong>12</strong>
                </li>
                <li>
                  <span>Test Pass Rate</span>
                  <strong>91%</strong>
                </li>
              </ul>

              <div className="insight-box">
                <span className="insight-label">AI Insight</span>
                <p>⚠ Payment module delayed</p>
              </div>

              <div className="mini-progress">
                <span>Sprint Progress</span>
                <div className="mini-bar">
                  <span style={{ width: '72%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="section-block overview-section">
          <div className="section-heading">
            <p className="eyebrow small">PLATFORM OVERVIEW</p>
            <h2>Everything your team needs, connected.</h2>
          </div>

          <div className="overview-grid">
            {overviewCards.map((card) => (
              <article key={card.title} className="mini-card">
                <div className="mini-icon">◈</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="section-block workflow-section">
          <div className="section-heading center-heading">
            <p className="eyebrow small">HOW WORK FLOWS</p>
            <h2>Your complete delivery lifecycle, connected.</h2>
          </div>

          <div className="workflow-flow">
            {workflowStages.map((stage, index) => (
              <div key={stage} className="workflow-step">
                <span>{stage}</span>
                {index < workflowStages.length - 1 && <div className="workflow-arrow">↓</div>}
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="section-block features-section">
          <div className="section-heading center-heading">
            <p className="eyebrow small">KEY FEATURES</p>
            <h2>Built to manage modern software delivery.</h2>
          </div>

          <div className="features-grid">
            {featureCards.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block roles-section">
          <div className="section-heading center-heading">
            <p className="eyebrow small">ROLE MANAGEMENT</p>
            <h2>Purpose-built for every delivery role.</h2>
          </div>

          <div className="roles-grid">
            {roles.map((role) => (
              <article key={role.title} className="role-card">
                <h3>{role.title}</h3>
                <ul>
                  {role.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="ai" className="section-block ai-section">
          <div className="section-heading center-heading">
            <p className="eyebrow small">AI PROJECT INTELLIGENCE</p>
            <h2>Project insight powered by AI.</h2>
          </div>

          <div className="ai-panel">
            <div className="ai-header">
              <span className="ai-badge">🤖</span>
              <span>Project AI Assistant</span>
            </div>

            <div className="chat-box">
              <div className="chat-row user">
                <span className="label">You</span>
                <p>Which modules are delayed?</p>
              </div>

              <div className="chat-row ai">
                <span className="label">AI</span>
                <p>
                  Payment and Notification modules show delayed activity, with incomplete
                  tasks and pending review signals.
                </p>
              </div>

              <div className="chat-row result">
                <span className="label">Payment</span>
                <ul>
                  <li>• 3 incomplete tasks</li>
                  <li>• 1 blocking bug</li>
                  <li>• 1 PR pending review</li>
                </ul>
              </div>

              <div className="chat-row result">
                <span className="label">Notification</span>
                <ul>
                  <li>• Testing incomplete</li>
                </ul>
              </div>
            </div>

            <div className="ai-tags">
              {aiHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block analytics-section">
          <div className="section-heading center-heading">
            <p className="eyebrow small">PROJECT ANALYTICS</p>
            <h2>Measure health across delivery.</h2>
          </div>

          <div className="analytics-grid">
            {analyticsMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className="chart-card" aria-label="Analytics chart preview">
            <div className="chart-bars">
              <span style={{ height: '50%' }} />
              <span style={{ height: '65%' }} />
              <span style={{ height: '80%' }} />
              <span style={{ height: '72%' }} />
              <span style={{ height: '90%' }} />
              <span style={{ height: '86%' }} />
              <span style={{ height: '96%' }} />
            </div>
          </div>
        </section>

        <section id="technology" className="section-block technology-section">
          <div className="section-heading center-heading">
            <p className="eyebrow small">TECHNOLOGY STACK</p>
            <h2>Modern tools for high-performance delivery teams.</h2>
          </div>

          <div className="tech-pills">
            {techStack.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section-block security-section">
          <div className="security-copy">
            <p className="eyebrow small">SECURITY</p>
            <h2>Designed for secure team collaboration.</h2>
          </div>

          <div className="security-grid">
            {securityItems.map((item) => (
              <div key={item} className="security-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-block cta-section">
          <div className="cta-box">
            <p className="eyebrow small">START BUILDING TODAY</p>
            <h2>Build smarter. Track everything. Ship with confidence.</h2>
            <p>
              Bring your software development workflow together in one connected platform.
            </p>
            <a href="/register" className="primary-button large-btn">
              Get Started →
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="brand-mark small-mark">
            <span>DF</span>
          </div>
          <div>
            <h3>DevFlow AI</h3>
            <p>AI-Powered Software Development Workflow</p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#ai">AI</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#overview">Documentation</a>
            <a href="#technology">API Docs</a>
            <a href="#overview">GitHub</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#overview">About</a>
            <a href="#overview">Contact</a>
            <a href="#overview">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
