
const heroImage =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85'

const storySteps = [
  {
    number: '01',
    title: 'Monitor',
    description:
      'Bring project locations, sanctioned funds, expenditure and reported progress into one view.',
    color: 'navy',
  },
  {
    number: '02',
    title: 'Identify',
    description:
      'Surface unusual gaps between physical progress and financial progress for closer review.',
    color: 'saffron',
  },
  {
    number: '03',
    title: 'Verify',
    description:
      'Help reviewers prioritise records, inspect supporting evidence and decide the next action.',
    color: 'green',
  },
]

export default function StoryIntro() {
  return (
    <section className="story-page">
      <div className="story-hero">
        <div className="story-copy">
          <div className="story-eyebrow">
            <span className="story-eyebrow-dot" />
            PUBLIC INFRASTRUCTURE INTELLIGENCE
          </div>

          <h1>
            Every project has a plan.
            <span> Every rupee deserves scrutiny.</span>
          </h1>

          <p className="story-lead">
            YONO-MPLAD brings project progress, financial indicators
            and risk signals together — helping reviewers see where
            closer verification may be needed.
          </p>

          <div className="story-actions">
            <a className="story-primary" href="#command-center">
              Explore the Command Center <span>↗</span>
            </a>
            <a className="story-secondary" href="#how-it-works">
              See how it works <span>↓</span>
            </a>
          </div>

          <div className="story-trust-note">
            <span className="story-trust-icon">✓</span>
            Evidence-led monitoring. Human-led decisions.
          </div>
        </div>

        <div className="story-visual">
          <img
            src={heroImage}
            alt="Illustrative photograph of infrastructure construction"
          />

          <div className="story-image-shade" />

          <div className="story-photo-label">
            <span>THE BIGGER PICTURE</span>
            <strong>Infrastructure that serves people.</strong>
            <p>Progress should be visible, measurable and verifiable.</p>
          </div>

          <div className="story-floating-card">
            <span className="story-floating-icon">↗</span>
            <div>
              <strong>Progress vs expenditure</strong>
              <p>Compare indicators. Flag gaps for review.</p>
            </div>
          </div>

          <div className="story-image-caption">
            Illustrative infrastructure imagery
          </div>
        </div>

        <div className="story-bottom-line">
          <span>MONITOR WITH CLARITY</span>
          <span className="story-bottom-divider" />
          <span>INVESTIGATE WITH EVIDENCE</span>
          <span className="story-bottom-divider" />
          <span>VERIFY BEFORE CONCLUDING</span>
        </div>
      </div>

      <section className="story-explainer" id="how-it-works">
        <div className="story-section-heading">
          <div>
            <span className="story-section-kicker">THE IDEA, SIMPLIFIED</span>
            <h2>From project data to informed action.</h2>
          </div>
          <p>
            Instead of looking at isolated numbers, bring important
            indicators together to understand which projects may need
            attention.
          </p>
        </div>

        <div className="story-steps">
          {storySteps.map((step) => (
            <article className="story-step" key={step.number}>
              <div className={`story-step-number ${step.color}`}>
                {step.number}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="story-transition">
          <div>
            <span className="story-section-kicker">SEE THE SYSTEM IN ACTION</span>
            <h2>One view. Clearer priorities.</h2>
            <p>
              Explore the demonstration dashboard below. Its sample
              records illustrate how the monitoring workflow could work.
            </p>
          </div>
          <a className="story-primary" href="#command-center">
            Open project intelligence <span>↓</span>
          </a>
        </div>
      </section>
    </section>
  )
}