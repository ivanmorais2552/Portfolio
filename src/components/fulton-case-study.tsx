import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FultonImage } from './fulton-image';
import { FultonReveal } from './fulton-reveal';
import { AnnotatedDashboard, RoleSwitchDemo, WorkflowMap } from './fulton-interactions';

export function FultonCaseStudy() {
  return (
    <main className="fulton-case-study">
      <section className="fulton-hero page-container">
        <div className="fulton-hero-copy">
          <div className="fulton-breadcrumb">
            <Link href="/work">
              <ArrowLeft size={14} /> Work
            </Link>
            <span>/</span>
            <span>Fulton</span>
          </div>
          <p className="eyebrow">Flagship case study / 01</p>
          <h1>Fulton Conference Management</h1>
          <p className="fulton-subtitle">
            Redesigning the workflows behind a university research conference.
          </p>
          <div className="fulton-meta">
            <span>
              <b>Role</b>Lead UX/UI Designer
            </span>
            <span>
              <b>Organization</b>BYU
            </span>
            <span>
              <b>Year</b>2026
            </span>
          </div>
        </div>
        <div className="fulton-hero-image">
          <FultonImage
            src="/images/fulton/admin/Home%20Dashboard.png"
            alt="Fulton admin home dashboard showing conference operations"
            width={3840}
            height={2718}
            priority
          />
          <p>Original Fulton design export · Main dashboard</p>
        </div>
        <a className="fulton-scroll" href="#overview" aria-label="Scroll to project overview">
          <span>Scroll to explore</span>
          <ArrowDown size={15} />
        </a>
      </section>
      <FultonReveal>
        <section className="fulton-section page-container" id="overview">
          <div className="fulton-section-label">
            <p className="eyebrow">01 / Project overview</p>
          </div>
          <div className="fulton-section-content">
            <h2>
              One platform.
              <br />
              <em>Many responsibilities.</em>
            </h2>
            <div className="fulton-copy-grid">
              <p>
                Fulton Conference Management was transitioning from Mendix to Angular. Instead of
                reproducing the old interface, the team used the transition as an opportunity to
                rethink the product experience from the ground up.
              </p>
              <p>
                Faculty had expressed frustrations with confusing workflows, the judging process,
                and slow, problematic printing operations. I owned the design work and collaborated
                with faculty leadership and the web team manager, with stakeholders providing final
                approval on features and designs.
              </p>
            </div>
          </div>
        </section>
      </FultonReveal>
      <FultonReveal>
        <section className="fulton-section fulton-section-muted">
          <div className="page-container">
            <div className="fulton-section-label">
              <p className="eyebrow">02 / The design process</p>
            </div>
            <div className="fulton-section-content">
              <h2>
                Work through one
                <br />
                <em>workflow at a time.</em>
              </h2>
              <div className="process-steps">
                {[
                  'Define workflow',
                  'Design',
                  'Stakeholder review',
                  'Iterate',
                  'Finalize',
                  'Next workflow',
                ].map((step, index) => (
                  <div key={step}>
                    <span>0{index + 1}</span>
                    <strong>{step}</strong>
                    {index < 5 && <ArrowRight size={15} />}
                  </div>
                ))}
              </div>
              <div className="fulton-wireframe">
                <FultonImage
                  src="/images/fulton/wireframes/Fulton%20Judging%20Wireframe.png"
                  alt="Original Fulton judging workflow wireframe"
                  width={14786}
                  height={4929}
                />
                <p>Original judging wireframe · workflow relationships and role responsibilities</p>
              </div>
              <p className="fulton-supporting-copy">
                Meetings occurred biweekly. Each cycle focused on clarifying a single workflow,
                reviewing the proposed direction with stakeholders, incorporating feedback, and
                finalizing the experience before moving to the next one.
              </p>
            </div>
          </div>
        </section>
      </FultonReveal>
      <FultonReveal>
        <section className="fulton-section page-container">
          <div className="fulton-section-label">
            <p className="eyebrow">03 / Interactive workflow map</p>
          </div>
          <div className="fulton-section-content">
            <h2>
              Connected work,
              <br />
              <em>made visible.</em>
            </h2>
            <p className="fulton-lead">
              The conference experience moves through four connected workflows. Administration
              provides the oversight layer across each one.
            </p>
            <WorkflowMap />
          </div>
        </section>
      </FultonReveal>
      <FultonReveal>
        <section className="fulton-section fulton-section-muted">
          <div className="page-container">
            <div className="fulton-section-label">
              <p className="eyebrow">04 / Judging experience</p>
            </div>
            <div className="fulton-section-content">
              <h2>
                Make the next decision
                <br />
                <em>easier to see.</em>
              </h2>
              <p className="fulton-lead">
                The judging experience needed to support different responsibilities without making
                the overall system feel disconnected. The exports show assignment, evaluation,
                scoring rubrics, progress, and winner selection.
              </p>
              <div className="fulton-image-pair">
                <figure>
                  <FultonImage
                    src="/images/fulton/judging/Assign%20Judges%20(Lead%20Judge).png"
                    alt="Lead judge assignment screen"
                    width={3840}
                    height={2978}
                  />
                  <figcaption>Lead judge assignment · original export</figcaption>
                </figure>
                <figure>
                  <FultonImage
                    src="/images/fulton/judging/Scoring.png"
                    alt="Lead judge scoring screen"
                    width={3840}
                    height={2978}
                  />
                  <figcaption>Scoring overview · original export</figcaption>
                </figure>
              </div>
              <RoleSwitchDemo />
            </div>
          </div>
        </section>
      </FultonReveal>
      <FultonReveal>
        <section className="fulton-section page-container">
          <div className="fulton-section-label">
            <p className="eyebrow">05 / Printing experience</p>
          </div>
          <div className="fulton-section-content">
            <h2>
              Operational clarity
              <br />
              <em>before conference day.</em>
            </h2>
            <p className="fulton-lead">
              Printing management brings poster status, printer assignment, and issue reporting into
              one operational workflow.
            </p>
            <figure className="fulton-image-wide">
              <FultonImage
                src="/images/fulton/printing/Printing%402x.png"
                alt="Fulton printing management screen"
                width={3840}
                height={2462}
              />
              <figcaption>Printing management · original export</figcaption>
            </figure>
            <div className="fulton-image-pair fulton-image-pair-small">
              <figure>
                <FultonImage
                  src="/images/fulton/printing/Print%20Modal%402x.png"
                  alt="Fulton print modal"
                  width={3600}
                  height={2000}
                />
                <figcaption>Print action · supporting export</figcaption>
              </figure>
              <figure>
                <FultonImage
                  src="/images/fulton/printing/Manage%20Printers%402x.png"
                  alt="Fulton printer management screen"
                  width={3840}
                  height={1712}
                />
                <figcaption>Printer management · supporting export</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </FultonReveal>
      <FultonReveal>
        <section className="fulton-section fulton-section-muted">
          <div className="page-container">
            <div className="fulton-section-label">
              <p className="eyebrow">06 / Administrative experience</p>
            </div>
            <div className="fulton-section-content">
              <h2>
                One view of the
                <br />
                <em>operational picture.</em>
              </h2>
              <p className="fulton-lead">
                The admin experience connects conference setup, submissions, presenters, RSVP
                information, printing, judging progress, and awards into a shared view of the event.
              </p>
              <AnnotatedDashboard />
            </div>
          </div>
        </section>
      </FultonReveal>
      <FultonReveal>
        <section className="fulton-section page-container">
          <div className="fulton-section-label">
            <p className="eyebrow">07 / Submissions and awards</p>
          </div>
          <div className="fulton-section-content">
            <h2>
              From first submission
              <br />
              <em>to final recognition.</em>
            </h2>
            <p className="fulton-lead">
              Submission and award management complete the conference loop. These screens show the
              connected moments without making claims about outcomes beyond the implemented designs.
            </p>
            <div className="fulton-image-pair">
              <figure>
                <FultonImage
                  src="/images/fulton/submissions/Submission-1.png"
                  alt="Fulton submission workflow screen"
                  width={3840}
                  height={2384}
                />
                <figcaption>Submission workflow · original export</figcaption>
              </figure>
              <figure>
                <FultonImage
                  src="/images/fulton/awards/Awards%20Manager.png"
                  alt="Fulton awards manager screen"
                  width={3840}
                  height={2540}
                />
                <figcaption>Awards manager · original export</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </FultonReveal>
      <FultonReveal>
        <section className="fulton-section fulton-section-muted">
          <div className="page-container">
            <div className="fulton-section-label">
              <p className="eyebrow">08 / Implementation and reflection</p>
            </div>
            <div className="fulton-section-content">
              <h2>
                Designing for the
                <br />
                <em>people in the system.</em>
              </h2>
              <div className="fulton-copy-grid">
                <p>
                  The designs were implemented in the Angular platform. My contribution was the
                  product design work across the conference workflows, including the judging
                  experience, administrative controls, printing management, submissions, awards, and
                  the reusable interface system.
                </p>
                <p>
                  The platform supports semiannual conferences with approximately 500 participants
                  per event. The work reinforced how much clarity comes from designing the
                  relationships between workflows, not just the screens within them.
                </p>
              </div>
              <div className="fulton-next">
                <Link className="text-link" href="/work">
                  Back to selected work <ArrowUpRight size={16} />
                </Link>
                <Link className="text-link" href="/contact">
                  Discuss a project <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FultonReveal>
    </main>
  );
}
