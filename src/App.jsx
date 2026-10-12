import { useState } from 'react'
import './App.css'
import CommandCenter from './components/CommandCenter.jsx'
import StoryIntro from './components/StoryIntro.jsx'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <div className="app-shell">

      {/* TOP HEADER */}
      <header className="top-header">
        
        <div className="brand">
          <img
            className="brand-logo"
            src="/yono-mplad-logo.png"
            alt="YONO-MPLAD — AI Evidence Intelligence"
          />
        </div>

        <div className="header-right">
          <div className="demo-label">
            DATA: DEMO ENVIRONMENT
          </div>

          <div className="system-status">
            <span className="status-dot"></span>
            SYSTEM ONLINE
          </div>
        </div>
      </header>

      {/* APPLICATION BODY */}
      <div className="application-body">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="sidebar-section">
            <div className="sidebar-label">
              OPERATIONS
            </div>

            <nav>
              <button className="nav-item active">
                <span className="nav-number">01</span>
                Command Center
              </button>

              <button className="nav-item">
                <span className="nav-number">02</span>
                Investigations
              </button>

              <button className="nav-item">
                <span className="nav-number">03</span>
                Projects
              </button>
            </nav>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-label">
              INTELLIGENCE
            </div>

            <nav>
              <button className="nav-item">
                <span className="nav-number">04</span>
                Network
              </button>

              <button className="nav-item">
                <span className="nav-number">05</span>
                Simulation
              </button>
            </nav>
          </div>

          
          <div className="sidebar-footer">
            <div className="footer-line"></div>

            <img
              className="footer-logo"
              src="/yono-mplad-logo.png"
              alt="YONO-MPLAD — AI Evidence Intelligence"
            />
          </div>

        </aside>

        {/* MAIN WORKSPACE */}
        <main className="workspace">

          <div className="workspace-header">
            <div>
              <div className="workspace-kicker">
                MPLAD IMPLEMENTATION INTELLIGENCE
              </div>

              <h1>
                Command Center
              </h1>
            </div>

            <div className="workspace-date">
              <span>ENVIRONMENT</span>
              <strong>DEMO DATA</strong>
            </div>
          </div>

          <section className="command-intro">

            <div className="intro-accent"></div>

            <div>
              <h2>
                Detect. Explain. Investigate.
              </h2>

              <p>
                YONO-MPLAD identifies unusual implementation patterns
                and connects the evidence required for investigation.
              </p>
            </div>

          </section>

          
        

{selectedProject ? (
  <section className="project-xray">
    <div className="xray-eyebrow">
      YONO-MPLAD / PROJECT INTELLIGENCE
    </div>

    <div className="xray-header">
      <div>
        <h2 className="xray-title">Project X-Ray</h2>
        <p className="xray-subtitle">
          Project implementation, financial progress and evidence review
        </p>
      </div>

      <span
        className="xray-priority"
        style={{
          color:
            selectedProject.risk === 'HIGH'
              ? '#ff6258'
              : selectedProject.risk === 'MEDIUM'
                ? '#FFD76A'
                : '#55E69A',
        }}
      >
        {selectedProject.risk} PRIORITY
      </span>
    </div>

    <div className="xray-identity">
      <div className="xray-identity-card">
        <span className="xray-label">PROJECT IDENTIFIER</span>
        <strong className="xray-value">{selectedProject.id}</strong>
      </div>

      <div className="xray-identity-card">
        <span className="xray-label">PROJECT LOCATION</span>
        <strong className="xray-value">{selectedProject.location}</strong>
      </div>

      <div className="xray-identity-card">
        <span className="xray-label">DELAY REPORTED</span>
        <strong className="xray-value">
          {selectedProject.delayDays} days
        </strong>
      </div>
    </div>

    <div className="xray-section">
      <h3 className="xray-section-title">Implementation analysis</h3>
      <p className="xray-section-description">
        Compare recorded physical completion with financial utilisation.
      </p>

      <div className="xray-progress-row">
        <span className="xray-progress-label">Physical progress</span>
        <div className="xray-progress-track">
          <div
            className="xray-progress-fill"
            style={{
              width: `${selectedProject.physicalProgress}%`,
              background: '#55E69A',
            }}
          />
        </div>
        <strong className="xray-progress-number">
          {selectedProject.physicalProgress}%
        </strong>
      </div>

      <div className="xray-progress-row">
        <span className="xray-progress-label">Financial progress</span>
        <div className="xray-progress-track">
          <div
            className="xray-progress-fill"
            style={{
              width: `${selectedProject.financialProgress}%`,
              background: '#D4B76B',
            }}
          />
        </div>
        <strong className="xray-progress-number">
          {selectedProject.financialProgress}%
        </strong>
      </div>

      <div className="xray-gap-card">
        <div>
          <span className="xray-label">PHYSICAL–FINANCIAL GAP</span>
          <p className="xray-section-description">
            Difference between the two reported progress figures.
          </p>
        </div>
        <strong className="xray-gap-number">
          {Math.abs(
            selectedProject.financialProgress -
              selectedProject.physicalProgress
          )} percentage points
        </strong>
      </div>
    </div>

    <div className="xray-section">
      <h3 className="xray-section-title">Evidence signals to verify</h3>
      <p className="xray-section-description">
        Items that may require further review by an authorised officer.
      </p>

      <div className="xray-evidence-list">
        {selectedProject.signals.map((signal, index) => (
          <div className="xray-evidence-item" key={signal}>
            <span className="xray-evidence-icon">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="xray-evidence-text">{signal}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="xray-disclaimer">
      DEMO DATA NOTICE — These records are simulated for demonstration.
      Evidence signals are review indicators, not proof of wrongdoing.
    </div>

    <button
      className="xray-back-button"
      onClick={() => setSelectedProject(null)}
    >
      ← Back to Command Center
    </button>
  </section>
) : (
  <>
    <StoryIntro />
    <CommandCenter onSelectProject={setSelectedProject} />
  </>
)}

        </main>

      </div>

      {/* MOBILE NAVIGATION */}
      <nav className="mobile-navigation">

        <button className="mobile-nav-item active">
          <span>01</span>
          Home
        </button>

        <button className="mobile-nav-item">
          <span>02</span>
          Investigate
        </button>

        <button className="mobile-nav-item">
          <span>03</span>
          Projects
        </button>

        <button className="mobile-nav-item">
          <span>04</span>
          Network
        </button>

        <button className="mobile-nav-item">
          <span>05</span>
          Simulate
        </button>

      </nav>

    </div>
  )
}

export default App