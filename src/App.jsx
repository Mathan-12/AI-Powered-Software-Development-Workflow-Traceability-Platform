import { useEffect, useState } from 'react'
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

const appNavigation = [
  ['Dashboard', '/dashboard', '⌂'], ['Projects', '/projects', '▣'], ['Requirements', '/requirements', '◫'],
  ['Tasks', '/tasks', '✓'], ['Traceability', '/traceability', '⌁'], ['Repositories', '/repositories', '⌘'],
  ['Pull Requests', '/pull-requests', '↗'], ['Testing', '/testing', '◇'], ['AI Assistant', '/ai-assistant', '✦'],
  ['Analytics', '/analytics', '◒'], ['Teams', '/teams', '♧'], ['Notifications', '/notifications', '♢'],
]

const projects = [
  { name: 'Atlas Commerce', type: 'Web platform', progress: 78, status: 'On track', team: '8 members', deadline: 'Sep 28', color: 'cyan' },
  { name: 'Mobile banking app', type: 'iOS + Android', progress: 54, status: 'At risk', team: '6 members', deadline: 'Oct 12', color: 'violet' },
  { name: 'Developer portal', type: 'Internal tools', progress: 91, status: 'On track', team: '4 members', deadline: 'Sep 22', color: 'green' },
]
const tasks = [['Implement OAuth callback', 'In progress', 'High', 'Today'], ['Update checkout acceptance criteria', 'Review', 'Medium', 'Tomorrow'], ['Add payment webhook tests', 'Todo', 'High', 'Sep 22'], ['Fix mobile navigation bug', 'Done', 'Low', 'Sep 20']]
const requirements = [['REQ-104', 'User authentication', 'High', 'In progress', '6 tasks'], ['REQ-105', 'Payment reconciliation', 'Critical', 'Review', '9 tasks'], ['REQ-106', 'Team activity feed', 'Medium', 'Todo', '3 tasks'], ['REQ-107', 'Exportable reports', 'Low', 'Done', '4 tasks']]

function AuthPage({ mode }) {
  const [showPassword, setShowPassword] = useState(false)
  const isRegister = mode === 'register'; const isForgot = mode === 'forgot'; const isReset = mode === 'reset'
  const handleSubmit = (event) => {
    event.preventDefault()
    const destination = isForgot ? '/login' : '/dashboard'
    window.history.pushState({}, '', destination)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  return <div className="auth-page"><a className="auth-brand" href="/"><span className="brand-mark">DF</span><strong>DevFlow AI</strong></a><div className="auth-layout"><div className="auth-pitch"><p className="app-kicker">DEVELOPER WORKFLOW INTELLIGENCE</p><h1>{isRegister ? 'Give your team a clearer path to ship.' : 'Welcome back to your delivery workspace.'}</h1><p>Connect requirements, code, tests, and releases in one calm, traceable workspace.</p><div className="auth-proof"><span>78%</span><small>average project visibility</small></div></div><form className="auth-card" onSubmit={handleSubmit}><div className="auth-card-heading"><p className="app-kicker">{isForgot || isReset ? 'ACCOUNT RECOVERY' : 'DEVFLOW WORKSPACE'}</p><h2>{isRegister ? 'Create your account' : isForgot ? 'Reset your password' : isReset ? 'Choose a new password' : 'Sign in to DevFlow'}</h2><p>{isForgot ? 'We will send a secure reset link to your inbox.' : isReset ? 'Use a strong password you have not used before.' : 'Continue where your team left off.'}</p></div>{isRegister && <label>Full name<input placeholder="Mathan Kumar" /></label>}{!isReset && <label>Email address<input type="email" placeholder="you@company.com" /></label>}{!isForgot && <label>{isReset ? 'New password' : 'Password'}<span className="input-wrap"><input type={showPassword ? 'text' : 'password'} placeholder="••••••••" /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></span></label>}{(isRegister || isReset) && <label>Confirm password<input type="password" placeholder="••••••••" /></label>}{isRegister && <label className="check-row"><input type="checkbox" /> I agree to the Terms and Privacy Policy</label>}{!isRegister && !isForgot && !isReset && <div className="form-meta"><label className="check-row"><input type="checkbox" /> Remember me</label><a href="/forgot-password">Forgot password?</a></div>}<button className="app-button primary full" type="submit">{isForgot ? 'Send reset link' : isReset ? 'Reset password' : isRegister ? 'Create account' : 'Login'}</button>{isForgot && <p className="form-note">Back to <a href="/login">login</a></p>}{!isForgot && !isReset && <p className="form-note">{isRegister ? 'Already have an account?' : "Don't have an account?"} <a href={isRegister ? '/login' : '/register'}>{isRegister ? 'Sign in' : 'Create one'}</a></p>}</form></div></div>
}

function Metric({ label, value, detail, tone = '' }) { return <div className="metric"><span>{label}</span><strong className={tone}>{value}</strong><small>{detail}</small></div> }
function PanelTitle({ title, action, href }) { return <div className="panel-title"><h3>{title}</h3>{action && <a href={href}>{action} →</a>}</div> }
function AppSidebar({ path }) { return <aside className="app-sidebar"><a href="/" className="app-logo"><span className="brand-mark">DF</span><span><strong>DevFlow</strong><small>AI WORKSPACE</small></span></a><p className="sidebar-label">Workspace</p><nav>{appNavigation.map(([label, href, icon]) => <a key={href} className={path === href ? 'active' : ''} href={href}><span>{icon}</span>{label}{label === 'Notifications' && <b>3</b>}</a>)}</nav><p className="sidebar-label">Manage</p><nav><a href="/settings"><span>⚙</span>Settings</a><a href="/help"><span>?</span>Help center</a></nav><div className="sidebar-user"><span className="avatar">MK</span><span><strong>Mathan Kumar</strong><small>Product lead</small></span><span>•••</span></div></aside> }
function Topbar({ title }) { return <header className="app-topbar"><div><p className="app-kicker">WORKSPACE / {title.toUpperCase()}</p><h2>{title}</h2></div><div className="topbar-actions"><label className="global-search">⌕ <input placeholder="Search anything..." /></label><button className="icon-button">♢<i>3</i></button><span className="avatar">MK</span></div></header> }
function PageHeader({ eyebrow, title, description, action }) { return <div className="page-header"><div><p className="app-kicker">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>{action && <a className="app-button primary" href={action.href}>{action.label}</a>}</div> }

function Dashboard() { return <><PageHeader eyebrow="MONDAY, SEPTEMBER 18" title="Good morning, Mathan" description="Here is what is moving across your software delivery workspace." action={{ label: '+ New project', href: '/projects/create' }} /><section className="metric-grid"><Metric label="Total projects" value="8" detail="+2 this quarter" tone="cyan" /><Metric label="Active projects" value="5" detail="2 need attention" tone="violet" /><Metric label="Open tasks" value="34" detail="8 due this week" tone="amber" /><Metric label="Team members" value="24" detail="Across 4 teams" tone="green" /></section><div className="content-grid dashboard-grid"><section className="panel wide"><PanelTitle title="Project progress" action="View analytics" href="/analytics" /><div className="chart-area"><div className="chart-y"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div className="line-chart"><div className="chart-line" /><div className="chart-dot d1" /><div className="chart-dot d2" /><div className="chart-dot d3" /><div className="chart-dot d4" /><div className="chart-dot d5" /><div className="chart-labels"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div></div></div></section><section className="panel"><PanelTitle title="AI insight" action="Open assistant" href="/ai-assistant" /><div className="insight-card"><span className="ai-orb">✦</span><strong>Velocity is trending 12% below plan</strong><p>Payment reconciliation has 3 linked tasks waiting on review. Consider moving one reviewer from the mobile team.</p><a href="/ai-assistant">Analyze bottleneck →</a></div></section><section className="panel"><PanelTitle title="Upcoming deadlines" action="See all" href="/tasks" /><div className="deadline-list">{tasks.slice(0, 3).map((task) => <div key={task[0]}><span className="deadline-dot" /><div><strong>{task[0]}</strong><small>{task[1]} · {task[2]}</small></div><time>{task[3]}</time></div>)}</div></section><section className="panel wide"><PanelTitle title="Recent activity" action="Activity log" href="/notifications" /><div className="activity-list"><div><span className="avatar cyan">AK</span><p><strong>Arun Kumar</strong> completed <b>TASK-284</b><small>12 minutes ago · Atlas Commerce</small></p></div><div><span className="avatar violet">AI</span><p><strong>AI Assistant</strong> detected a schedule risk<small>45 minutes ago · Mobile banking app</small></p></div><div><span className="avatar amber">MK</span><p><strong>You</strong> updated <b>REQ-105</b><small>2 hours ago · Atlas Commerce</small></p></div></div></section></div></> }

function ProjectsPage() { return <><PageHeader eyebrow="DELIVERY PORTFOLIO" title="Projects" description="A live view of every product your teams are building." action={{ label: '+ Create project', href: '/projects/create' }} /><div className="toolbar"><label className="table-search">⌕ <input placeholder="Search projects" /></label><button className="filter-button">Filter <span>⌄</span></button><button className="filter-button">Sort: Recent <span>⌄</span></button></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.name}><div className={`project-accent ${project.color}`} /><div className="project-card-top"><span className="project-icon">{project.name.slice(0, 1)}</span><button className="more-button">•••</button></div><p className="app-kicker">{project.type}</p><h3>{project.name}</h3><p>Connected workspace for planning, development and release visibility.</p><div className="project-progress"><span>Progress <b>{project.progress}%</b></span><div className="progress-track"><i style={{ width: `${project.progress}%` }} /></div></div><div className="project-meta"><span>{project.team}</span><span>Due {project.deadline}</span></div><div className="project-footer"><span className={`status ${project.status === 'At risk' ? 'warning' : 'success'}`}>{project.status}</span><a href="/projects/atlas-commerce">Open project →</a></div></article>)}</div></> }

function TablePage({ type }) { const isRequirements = type === 'requirements'; const headers = isRequirements ? ['ID / requirement', 'Priority', 'Status', 'Linked work'] : ['Task', 'Status', 'Priority', 'Due']; const rows = isRequirements ? requirements.map((r) => [<><b>{r[0]}</b><span>{r[1]}</span></>, r[2], r[3], r[4]]) : tasks.map((r, index) => [<><b>TASK-{284 + index}</b><span>{r[0]}</span></>, r[1], r[2], r[3]]); return <><PageHeader eyebrow={isRequirements ? 'PRODUCT DEFINITION' : 'EXECUTION QUEUE'} title={isRequirements ? 'Requirements' : 'Tasks'} description={isRequirements ? 'Turn product intent into work your team can trace.' : 'Plan, prioritize, and move delivery work forward.'} action={{ label: `+ Create ${isRequirements ? 'requirement' : 'task'}`, href: `/${type}/create` }} /><div className="toolbar"><label className="table-search">⌕ <input placeholder={`Search ${type}`} /></label><button className="filter-button">All statuses <span>⌄</span></button><button className="filter-button">All priorities <span>⌄</span></button></div><div className="panel table-panel"><table><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}<th /></tr></thead><tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}<td><button className="more-button">•••</button></td></tr>)}</tbody></table></div></> }

function BoardPage() { const columns = [['BACKLOG', [['Write onboarding docs', 'Low'], ['Audit API errors', 'Medium']]], ['IN PROGRESS', [['OAuth callback', 'High'], ['Payment webhooks', 'High']]], ['CODE REVIEW', [['Checkout states', 'Medium']]], ['TESTING', [['Mobile navigation', 'Low']]], ['DONE', [['Team roles', 'Medium'], ['Project exports', 'Low']]]]; return <><PageHeader eyebrow="ATLAS COMMERCE / DELIVERY" title="Task board" description="Move work from idea to verified release." action={{ label: '+ Create task', href: '/tasks/create' }} /><div className="board-toolbar"><div className="board-tabs"><a className="active" href="/board">Board</a><a href="/tasks">List</a><a href="/sprints">Sprints</a></div><span>24 tasks · updated just now</span></div><div className="kanban">{columns.map(([name, cards]) => <section className="kanban-column" key={name}><div className="column-title"><span>{name}</span><b>{cards.length}</b></div>{cards.map(([title, priority]) => <article className="task-card" key={title}><div><span className={`priority ${priority.toLowerCase()}`} />{priority}</div><h4>{title}</h4><div className="task-card-meta"><span className="avatar cyan">{title.slice(0, 2).toUpperCase()}</span><span>◷ Sep 22</span><span>◌ 3</span></div></article>)}<button className="add-card">+ Add task</button></section>)}</div></> }

function TraceabilityPage() { const nodes = [['Requirement', 'REQ-105', 'Payment reconciliation'], ['User story', 'US-042', 'Reconcile settlement files'], ['Task', 'TASK-291', 'Build reconciliation worker'], ['Branch', 'feature/reconcile', 'Arun Kumar'], ['Commit', 'a31f8c2', '3 files changed'], ['Pull request', 'PR #88', 'Ready for review'], ['Test result', 'TC-118', 'Passed · 14 checks'], ['Deployment', 'v1.8.0-staging', '18 Sep 2026']]; return <><PageHeader eyebrow="CONNECTED DELIVERY GRAPH" title="Traceability" description="Follow every requirement from intent to production evidence." action={{ label: 'Export matrix', href: '/traceability' }} /><div className="trace-summary"><Metric label="Coverage" value="86%" detail="+8% this sprint" tone="cyan" /><Metric label="Complete chains" value="42" detail="of 49 requirements" tone="green" /><Metric label="Missing links" value="7" detail="Need attention" tone="amber" /></div><div className="trace-layout"><section className="panel trace-graph"><PanelTitle title="REQ-105 delivery chain" action="View requirement" href="/requirements/REQ-105" /><div className="trace-chain">{nodes.map((node, index) => <div className="trace-node-wrap" key={node[1]}><article className={`trace-node ${index === 0 ? 'selected' : ''}`}><span>{node[0]}</span><strong>{node[1]}</strong><small>{node[2]}</small></article>{index < nodes.length - 1 && <div className="trace-arrow">↓</div>}</div>)}</div></section><section className="panel"><PanelTitle title="Coverage by stage" /><div className="coverage-list">{[['Requirements', 100], ['Tasks', 94], ['Commits', 88], ['Pull requests', 82], ['Tests', 76], ['Deployments', 64]].map(([label, value]) => <div key={label}><span>{label}<b>{value}%</b></span><div className="progress-track"><i style={{ width: `${value}%` }} /></div></div>)}</div></section></div></> }

function GenericPage({ type }) { const content = { repositories: ['Repositories', 'Connect codebases to keep delivery context current.', 'Connect repository', ['atlas-commerce', 'mobile-banking', 'developer-portal']], 'pull-requests': ['Pull requests', 'Review code changes with requirements and tests in context.', 'New pull request', ['PR #88 · Reconcile settlement files', 'PR #87 · Add team activity feed', 'PR #86 · Update mobile navigation']], testing: ['Testing', 'Track quality signals before they become release risk.', 'Create test case', ['TC-118 · Settlement reconciliation', 'TC-117 · OAuth callback', 'TC-116 · Activity feed permissions']], teams: ['Teams', 'See ownership, workload, and collaboration across your workspace.', 'Create team', ['Platform team · 8 members', 'Mobile experience · 6 members', 'Quality guild · 10 members']], notifications: ['Notifications', 'Stay close to the events that need your attention.', 'Mark all as read', ['AI detected a schedule risk in Mobile banking app', 'Arun Kumar completed TASK-284', 'PR #88 is ready for your review']], analytics: ['Analytics', 'Understand delivery health with signals that update as work moves.', 'Export report', ['Project completion', 'Task velocity', 'Requirement coverage', 'Test coverage']], settings: ['Settings', 'Configure your workspace, preferences, and integrations.', 'Save changes', ['Profile', 'Appearance', 'Notifications', 'Integrations', 'Security']], help: ['Help center', 'Find answers and contact the team when you need a hand.', 'Contact support', ['Search help center', 'Frequently asked questions', 'Report an issue']] }[type] || ['Workspace', 'Keep every part of delivery connected in one place.', 'Create item', ['Projects', 'Tasks', 'Requirements']]; return <><PageHeader eyebrow="DEVFLOW WORKSPACE" title={content[0]} description={content[1]} action={{ label: content[2], href: '#' }} /><div className="generic-grid">{content[3].map((item, index) => <article className="panel generic-card" key={item}><span className="generic-number">0{index + 1}</span><h3>{item}</h3><p>Connected workspace record</p><a href="#">View details →</a></article>)}</div>{type === 'analytics' && <div className="panel large-chart"><PanelTitle title="Delivery trend" /><div className="bars">{[42, 54, 48, 72, 68, 84, 78, 92, 88].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>}</> }

function Workspace({ path }) { const segment = path.slice(1).split('/')[0] || 'dashboard'; const title = segment === 'dashboard' ? 'Dashboard' : segment.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()); let content = <GenericPage type={segment} />; if (segment === 'dashboard') content = <Dashboard />; if (segment === 'projects') content = <ProjectsPage />; if (segment === 'requirements' || segment === 'tasks') content = <TablePage type={segment} />; if (segment === 'board') content = <BoardPage />; if (segment === 'traceability') content = <TraceabilityPage />; return <div className="app-shell"><AppSidebar path={`/${segment}`} /><div className="app-main"><Topbar title={title} /><main className="app-content">{content}</main></div></div> }

function App() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => { const handlePopState = () => setPath(window.location.pathname); window.addEventListener('popstate', handlePopState); return () => window.removeEventListener('popstate', handlePopState) }, [])
  if (path === '/login') return <AuthPage mode="login" />
  if (path === '/register') return <AuthPage mode="register" />
  if (path === '/forgot-password') return <AuthPage mode="forgot" />
  if (path === '/reset-password') return <AuthPage mode="reset" />
  if (path !== '/') return <Workspace path={path} />
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
