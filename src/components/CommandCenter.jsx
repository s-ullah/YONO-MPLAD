import { IndiaMap } from 'vardhan-maps/react'
import { useMemo, useState } from 'react'
import { projects } from '../data/projects.js'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'


const riskColors = {
  HIGH: '#c24135',
  MEDIUM: '#c17b16',
  LOW: '#138808',
}


const projectImages = {
  'MP-20481':
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=240&q=80',
  'MP-19372':
    'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=240&q=80',
  'MP-18231':
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=240&q=80',
  'MP-17621':
    'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=240&q=80',
  'MP-16804':
    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=240&q=80',
}

function formatAmount(value) {
  return `₹${value.toFixed(1)}L`
}

export default function CommandCenter({ onSelectProject }) {
  const [selectedId, setSelectedId] = useState('MP-20481')
  const [filter, setFilter] = useState('ALL')

  const selectedProject = projects.find(
    (project) => project.id === selectedId,
  )

  
const progressGap = selectedProject
  ? selectedProject.financialProgress -
    selectedProject.physicalProgress
  : 0

const evidenceCategory = selectedProject
  ? selectedProject.signals.map((signal) => {
      if (signal === 'Physical-financial mismatch') {
        return {
          title: 'Physical–financial mismatch',
          category: 'FINANCIAL VERIFICATION',
          description:
            'Reported financial progress exceeds physical progress.',
          recommendation:
            'Verify expenditure statements, bills, measurement records, and completion evidence.',
        }
      }

      if (signal === 'Timeline deviation') {
        return {
          title: 'Timeline deviation',
          category: 'SCHEDULE REVIEW',
          description:
            'The recorded project timeline warrants a closer review.',
          recommendation:
            'Check the approved schedule, milestone dates, and documented extension requests.',
        }
      }

      if (signal === 'Agency concentration') {
        return {
          title: 'Agency concentration',
          category: 'AGENCY REVIEW',
          description:
            'The demo record flags an agency-related pattern for review.',
          recommendation:
            'Review agency allocation records, work orders, and applicable procurement documentation.',
        }
      }

      return {
        title: signal,
        category: 'ROUTINE MONITORING',
        description:
          'No specific exception is identified by this demo signal.',
        recommendation:
          'Continue routine progress updates and standard documentation checks.',
      }
    })
  : []

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) => filter === 'ALL' || project.risk === filter,
      ),
    [filter],
  )

  const chartData = projects.map((project) => ({
    name: project.id,
    physical: project.physicalProgress,
    financial: project.financialProgress,
  }))

  const highPriority = projects.filter(
    (project) => project.risk === 'HIGH',
  ).length

  const totalSanctioned = projects.reduce(
    (total, project) => total + project.sanctioned,
    0,
  )

  return (
    <div className="command-center" id="command-center">
      <div className="cc-heading">
        <div>
          <div className="cc-eyebrow">NATIONAL PROJECT INTELLIGENCE</div>
          <h2>Command Center</h2>
          <p>
            An evidence-led view of implementation patterns across
            the demonstration dataset.
          </p>
        </div>

        <div className="demo-chip">
          <span />
          SIMULATED DATA
        </div>
      </div>

      <div className="cc-metrics">
        <article className="metric-card">
          <div className="metric-label">PROJECTS MONITORED</div>
          <div className="metric-value">{projects.length}</div>
          <div className="metric-note">Demo project records</div>
        </article>

        <article className="metric-card">
          <div className="metric-label">PRIORITY REVIEWS</div>
          <div className="metric-value risk-value">{highPriority}</div>
          <div className="metric-note">Require closer verification</div>
        </article>

        <article className="metric-card">
          <div className="metric-label">SANCTIONED VALUE</div>
          <div className="metric-value">
            {formatAmount(totalSanctioned)}
          </div>
          <div className="metric-note">Across demo records</div>
        </article>

        <article className="metric-card">
          <div className="metric-label">EVIDENCE SIGNALS</div>
          <div className="metric-value">
            {projects.reduce(
              (total, project) =>
                total +
                project.signals.filter(
                  (signal) => signal !== 'Routine monitoring',
                ).length,
              0,
            )}
          </div>
          <div className="metric-note">Patterns for human review</div>
        </article>
      </div>

      <div className="cc-main-grid">
        <section className="cc-panel map-panel">
          <div className="cc-panel-header">
            <div>
              <h3>Geospatial Intelligence</h3>
              <p>Illustrative locations · Not official project coordinates</p>
            </div>
            <span className="panel-index">01 / MAP</span>
          </div>

          
<div className="map-frame">
  <div className="india-map-scene">
    <div className="map-topline">
      <span className="map-live-dot" />
      PROJECT SIGNAL NETWORK
      <span className="map-live-label">DEMO</span>
    </div>

    <div className="india-map-canvas">
      <div className="india-real-map">
  <IndiaMap level="state" resolution="low" />
</div>

      <div className="map-grid-glow" />
      
{/* Option B — clean golden intelligence network */}

<svg
  className="golden-intelligence-overlay"
  viewBox="0 0 900 1000"
  preserveAspectRatio="xMidYMid meet"
  aria-hidden="true"
>

<g className="golden-ripple-markers">
  {[
    { x: 270, y: 180 }, // Jammu and Kashmir
    { x: 270, y: 385 }, // Rajasthan
    { x: 190, y: 480 }, // Gujarat boundary
    { x: 300, y: 550 }, // Maharashtra boundary
    { x: 350, y: 790 }, // Tamil Nadu
    { x: 470, y: 625 }, // Telangana–Andhra Pradesh
    { x: 610, y: 520 }, // West Bengal–Odisha
    { x: 520, y: 360 }, // Bihar
    { x: 690, y: 300 }, // Assam–Nagaland
  ].map(({ x, y }, index) => (
    <g key={index} transform={`translate(${x} ${y}) scale(2.4)`}>
      {/* Water-ripple rings */}
      <ellipse
        cx="0" cy="0" rx="24" ry="9"
        fill="none"
        stroke="#e8c96f"
        strokeWidth="1.3"
        opacity="0.8"
      />
      <ellipse
        cx="0" cy="0" rx="13" ry="4.5"
        fill="none"
        stroke="#fff0ad"
        strokeWidth="1.2"
      />
      <ellipse
        cx="0" cy="0" rx="7" ry="2.3"
        fill="none"
        stroke="#e8c96f"
        strokeWidth="1"
        opacity="0.85"
      />

  

{/* Three shorter, clearly unequal golden signal bars */}
<g
  fill="none"
  stroke="#FFD76A"
  strokeWidth="0.9"
  strokeLinecap="round"
>
  {/* Shortest bar — 7 lines */}
  {Array.from({ length: 7 }, (_, i) => (
    <path key={`a-${i}`} d={`M -8 ${-5 - i * 3} h 2.8`} />
  ))}

  {/* Tallest bar — 13 lines */}
  {Array.from({ length: 13 }, (_, i) => (
    <path key={`b-${i}`} d={`M -1 ${-5 - i * 3} h 2.8`} />
  ))}

  {/* Medium bar — 10 lines */}
  {Array.from({ length: 10 }, (_, i) => (
    <path key={`c-${i}`} d={`M 6 ${-5 - i * 3} h 2.8`} />
  ))}
</g>

    </g>
  ))}
</g>


</svg>

      {projects.map((project) => {
        const [lat, lon] = project.coordinates
        const left = ((lon - 68) / 30) * 100
        const top = ((37 - lat) / 31) * 100
        const isSelected = selectedId === project.id

        return (
          <button
            key={project.id}
            type="button"
            className={[
              'india-project-marker',
              `risk-${project.risk.toLowerCase()}`,
              isSelected ? 'is-selected' : '',
            ].join(' ')}
            style={{ left: `${left}%`, top: `${top}%` }}
            onClick={() => setSelectedId(project.id)}
            aria-label={`Select ${project.id}: ${project.name}`}
            title={`${project.id} — ${project.name}`}
          >
            <span className="marker-pulse" />
            <span className="marker-core" />

            {isSelected && (
              <span className="marker-label">
                <strong>{project.id}</strong>
                <small>{project.risk} PRIORITY</small>
              </span>
            )}
          </button>
        )
      })}

      <div className="map-compass" aria-hidden="true">
        <span>N</span>
        <span className="compass-arrow">↑</span>
      </div>

      <div className="map-coordinate-note">
        ILLUSTRATIVE PROJECT LOCATIONS
      </div>
    </div>

    <div className="map-bottomline">
      <span>
        <i className="map-key-dot high" /> HIGH
      </span>
      <span>
        <i className="map-key-dot medium" /> MEDIUM
      </span>
      <span>
        <i className="map-key-dot low" /> LOW
      </span>
      <span className="map-selected-count">
        {projects.length} DEMO SIGNALS
      </span>
    </div>
  </div>
</div>

          <div className="map-legend">
            <span><i className="legend-dot high" /> Priority review</span>
            <span><i className="legend-dot medium" /> Review</span>
            <span><i className="legend-dot low" /> Routine</span>
          </div>
        </section>

        <section className="cc-panel queue-panel">
          <div className="cc-panel-header">
            <div>
              <h3>Investigation Queue</h3>
              <p>Patterns ranked for verification</p>
            </div>
            <span className="panel-index">02 / QUEUE</span>
          </div>

          <div className="queue-filters">
            {['ALL', 'HIGH', 'MEDIUM', 'LOW'].map((level) => (
              <button
                key={level}
                className={filter === level ? 'filter-btn selected' : 'filter-btn'}
                onClick={() => setFilter(level)}
              >
                {level === 'ALL' ? 'All' : level}
              </button>
            ))}
          </div>

          <div className="queue-list">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                className={
                  selectedId === project.id
                    ? 'queue-item queue-selected'
                    : 'queue-item'
                }
                onClick={() => setSelectedId(project.id)}
              >
                <span
                  className="queue-risk-bar"
                  style={{ background: riskColors[project.risk] }}
                />
                
<img
  className="queue-project-image"
  src={projectImages[project.id]}
  alt={`Illustrative image for ${project.name}`}
  loading="lazy"
/>
                <span className="queue-item-content">
                  <span className="queue-item-top">
                    <strong>{project.id}</strong>
                    <span
                      className="risk-pill"
                      style={{
                        color: riskColors[project.risk],
                        background: `${riskColors[project.risk]}12`,
                      }}
                    >
                      {project.risk}
                    </span>
                  </span>

                  <span className="queue-project-name">
                    {project.name}
                  </span>

                  <span className="queue-signal">
                    {project.signals[0]}
                  </span>
                </span>

                <span className="queue-arrow">›</span>
              </button>
            ))}

            {filteredProjects.length === 0 && (
              <p className="empty-queue">No records in this category.</p>
            )}
          </div>
        </section>
      </div>

      
      <div className="cc-bottom-grid">
        {/* ROW 1 — Graph */}
        <section className="cc-panel progress-panel">
          <div className="cc-panel-header">
            <div>
              <h3
                style={{
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 700,
                  opacity: 1,
                }}
              >
                Physical vs Financial Progress
              </h3>
              <p>Compare reported progress across demo projects</p>
            </div>
            <span className="panel-index">03 / ANALYSIS</span>
          </div>

          <div className="chart-legend">
            <span><i className="chart-dot physical" /> Physical</span>
            <span><i className="chart-dot financial" /> Financial</span>
          </div>

          <div className="chart-frame">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 12, left: -20, bottom: 4 }}
                barGap={3}
                isAnimationActive={true}
                animationDuration={1100}
                animationEasing="ease-out"
              >
                <CartesianGrid stroke="#2c3b4c" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10, fill: '#aab8c9' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fontSize: 10, fill: '#aab8c9' }}
                  axisLine={false}
                  tickLine={false}
                  unit="%"
                />
                <Tooltip
                  formatter={(value) => [`${value}%`]}
                  contentStyle={{
                    backgroundColor: '#142233',
                    color: '#ffffff',
                    borderRadius: 10,
                    border: '1px solid #D4B76B',
                    fontSize: 12,
                  }}
                  labelStyle={{
                    color: '#ffffff',
                    fontWeight: 700,
                  }}
                  itemStyle={{ color: '#ffffff' }}
                />
                <Bar
                  dataKey="physical"
                  name="Physical"
                  radius={[3, 3, 0, 0]}
                  isAnimationActive={true}
                  animationDuration={1100}
                  animationEasing="ease-out"
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill="#43d18b" />
                  ))}
                </Bar>
                <Bar
                  dataKey="financial"
                  name="Financial"
                  radius={[3, 3, 0, 0]}
                  isAnimationActive={true}
                  animationDuration={1100}
                  animationEasing="ease-out"
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill="#76a9ff" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* ROW 1 — AI Evidence Observation */}
        <section className="cc-panel observation-panel">
          <div className="cc-panel-header">
            <div>
              <h3>AI Evidence Observation</h3>
              <p>Illustrative rule-based analysis</p>
            </div>
            <span className="panel-index">04 / INSIGHT</span>
          </div>

          {selectedProject && (
            <div className="observation-content">
              <div className="observation-project">
                <span className="observation-marker">!</span>
                <div>
                  <strong>{selectedProject.id}</strong>
                  <p>{selectedProject.name}</p>
                </div>
              </div>

              <div className="observation-stat">
                <div>
                  <span>FINANCIAL PROGRESS</span>
                  <strong>{selectedProject.financialProgress}%</strong>
                </div>
                <div>
                  <span>PHYSICAL PROGRESS</span>
                  <strong>{selectedProject.physicalProgress}%</strong>
                </div>
              </div>

              <div className="observation-gap">
                <span>PROGRESS DIFFERENCE</span>
                <strong>
                  {Math.abs(progressGap)} percentage points
                </strong>
              </div>

              <p className="observation-explanation">
                {progressGap >= 20
                  ? 'Financial progress is at least 20 percentage points above physical progress in this demo record. Verify supporting documents before drawing conclusions.'
                  : 'Review the recorded progress alongside the available supporting documents. A small difference does not eliminate the need for routine verification.'}
              </p>

              <button
                className="inspect-button"
                onClick={() => onSelectProject?.(selectedProject)}
              >
                Inspect project evidence <span>→</span>
              </button>

              <div className="disclaimer">
                Simulated demo data. Risk classifications are review
                priorities, not proof of fraud or wrongdoing.
              </div>
            </div>
          )}
        </section>

        {/* ROW 2 — Evidence Classification */}

<section className="cc-panel evidence-classification-panel">
  <div className="cc-panel-header">
    <div>
      <h3>Evidence Classification</h3>
      <p>Signals and recommended verification</p>
    </div>
    <span className="panel-index">05 / EVIDENCE</span>
  </div>

{selectedProject && (
<> <div className="evidence-review-heading"> <span>EVIDENCE CLASSIFICATION</span>
<span
className={`evidence-priority priority-${selectedProject.risk.toLowerCase()}`}
>
{selectedProject.risk} PRIORITY </span> </div>


  <div className="evidence-category-list">
    {evidenceCategory.map((item) => (
      <article
        className="evidence-category-card"
        key={item.title}
      >
        <div className="evidence-category-top">
          <strong>{item.title}</strong>
          <span>{item.category}</span>
        </div>

        <p>{item.description}</p>

        <div className="evidence-recommendation">
          <span>RECOMMENDED VERIFICATION</span>
          <p>{item.recommendation}</p>
        </div>
      </article>
    ))}
  </div>
</>


)}

</section>

{/* ROW 3 — Satyamev Jayate image */}

<div className="national-emblem">
  <img
    src="/satyamev-jayate-black.png"
    alt="Satyamev Jayate emblem"
  />
</div>

      </div>
          
      
      <footer className="cc-footer">
        <span>YONO-MPLAD · BEYOND ALERTS. INTO EVIDENCE.</span>
        <span>DEMONSTRATION DATA ONLY · NOT AN OFFICIAL GOVERNMENT SYSTEM</span>
      </footer>
    </div>
  )
}