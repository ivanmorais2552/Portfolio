'use client';

import { useState } from 'react';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { FultonImage } from './fulton-image';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './FultonInteractions.module.css';

const workflowItems = [
  {
    id: 'submissions',
    label: 'Submissions',
    description:
      'Presenters provide project details, presenters, mentors, and research materials through a structured submission flow.',
    image: '/images/fulton/submissions/Submission-1.png',
    width: 3840,
    height: 2384,
    alt: 'Fulton submission workflow export',
  },
  {
    id: 'printing',
    label: 'Printing',
    description:
      'Administrators manage poster status, assign printers, and resolve print problems before conference day.',
    image: '/images/fulton/printing/Printing%402x.png',
    width: 3840,
    height: 2462,
    alt: 'Fulton printing management export',
  },
  {
    id: 'judging',
    label: 'Judging',
    description:
      'Judges review assigned work while lead judges manage assignments, progress, scores, and winner selection.',
    image: '/images/fulton/judging/Scoring.png',
    width: 3840,
    height: 2978,
    alt: 'Fulton judging and scoring export',
  },
  {
    id: 'awards',
    label: 'Awards',
    description:
      'Administrators review award information and coordinate award management across the conference workflow.',
    image: '/images/fulton/awards/Awards%20Manager.png',
    width: 3840,
    height: 2540,
    alt: 'Fulton awards manager export',
  },
];

const judgeCards = ['Assigned posters', 'Scoring rubric', 'Evaluation notes'];
const leadJudgeCards = ['Judge assignments', 'Scoring overview', 'Winner selection'];

export function WorkflowMap() {
  const [selected, setSelected] = useState('judging');
  const active = workflowItems.find((item) => item.id === selected) ?? workflowItems[0];
  return (
    <div className={styles.workflowDemo}>
      <div className={styles.workflowMap} aria-label="Conference workflow map">
        <div className={styles.workflowOversight}>
          <span className={styles.workflowOversightLine} />
          Administration / oversight
        </div>
        <div className={styles.workflowNodes}>
          {workflowItems.map((item, index) => (
            <div className={styles.workflowNodeWrap} key={item.id}>
              <button
                className={`${styles.workflowNode} ${selected === item.id ? styles.workflowNodeSelected : ''}`}
                onClick={() => setSelected(item.id)}
                aria-pressed={selected === item.id}
              >
                {item.label}
                <ChevronRight size={15} />
              </button>
              {index < workflowItems.length - 1 && (
                <ArrowRight className={styles.workflowArrow} size={18} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.workflowDetail}>
        <div>
          <p className={utilityStyles.eyebrow}>Selected workflow</p>
          <h3>{active.label}</h3>
          <p>{active.description}</p>
        </div>
        <div className={styles.workflowDetailImage}>
          <FultonImage
            src={active.image}
            alt={active.alt}
            width={active.width}
            height={active.height}
          />
        </div>
      </div>
    </div>
  );
}

export function RoleSwitchDemo() {
  const [role, setRole] = useState<'judge' | 'lead'>('judge');
  const cards = role === 'judge' ? judgeCards : leadJudgeCards;
  return (
    <div className={styles.roleDemo}>
      <div className={styles.demoToolbar}>
        <div>
          <p className={utilityStyles.eyebrow}>Interactive portfolio recreation</p>
          <p className={styles.demoNote}>
            Fictional sample data used to demonstrate the role difference.
          </p>
        </div>
        <div className={styles.roleTabs} role="tablist" aria-label="Judging role">
          <button
            role="tab"
            aria-selected={role === 'judge'}
            className={role === 'judge' ? styles.active : ''}
            onClick={() => setRole('judge')}
          >
            Judge
          </button>
          <button
            role="tab"
            aria-selected={role === 'lead'}
            className={role === 'lead' ? styles.active : ''}
            onClick={() => setRole('lead')}
          >
            Lead Judge
          </button>
        </div>
      </div>
      <div className={styles.demoInterface}>
        <aside>
          <span>Fulton</span>
          <strong>{role === 'judge' ? 'Judge' : 'Lead Judge'}</strong>
          <small>April 2026 · Demo</small>
        </aside>
        <div className={styles.demoMain}>
          <div className={styles.demoTitleRow}>
            <div>
              <p className={utilityStyles.eyebrow}>
                {role === 'judge' ? 'My dashboard' : 'Conference overview'}
              </p>
              <h3>{role === 'judge' ? 'Assigned research' : 'Judging progress'}</h3>
            </div>
            <span className={styles.demoStatus}>
              <span />
              Live demo state
            </span>
          </div>
          <div className={styles.demoCardGrid}>
            {cards.map((card, index) => (
              <div className={styles.demoCard} key={card}>
                <span>0{index + 1}</span>
                <h4>{card}</h4>
                <p>
                  {role === 'judge'
                    ? [
                        'Review the work assigned to you.',
                        'Apply the conference rubric.',
                        'Leave a note for the lead judge.',
                      ][index]
                    : [
                        'Assign judges to submitted work.',
                        'See progress across departments.',
                        'Select and confirm winners.',
                      ][index]}
                </p>
                <div className={styles.demoBar}>
                  <i style={{ width: `${[76, 52, 88][index]}%` }} />
                </div>
              </div>
            ))}
          </div>
          <button className={styles.demoAction}>
            {role === 'judge' ? 'Open assigned work' : 'Review conference progress'}
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

const dashboardAnnotations = [
  {
    id: 'submissions',
    label: 'Submission metrics',
    text: 'A high-level view of total and incomplete submissions, separated by degree.',
  },
  {
    id: 'presenters',
    label: 'Presenter information',
    text: 'A quick read on presenters and mentors connected to the conference.',
  },
  {
    id: 'rsvp',
    label: 'RSVP information',
    text: 'Conference-day planning information is visible alongside the rest of the operational picture.',
  },
  {
    id: 'printing',
    label: 'Printing status',
    text: 'Printed posters and print problems are surfaced for administrative follow-up.',
  },
  {
    id: 'judging',
    label: 'Judging progress',
    text: 'Judging and winner workflows are available from the administrative navigation.',
  },
];

const hotspotStyles: Record<string, string> = {
  submissions: styles.hotspotSubmissions,
  presenters: styles.hotspotPresenters,
  rsvp: styles.hotspotRsvp,
  printing: styles.hotspotPrinting,
  judging: styles.hotspotJudging,
};

export function AnnotatedDashboard() {
  const [selected, setSelected] = useState('submissions');
  const active =
    dashboardAnnotations.find((item) => item.id === selected) ?? dashboardAnnotations[0];
  return (
    <div className={styles.dashboardDemo}>
      <div className={styles.dashboardImageWrap}>
        <FultonImage
          src="/images/fulton/admin/Home%20Dashboard.png"
          alt="Fulton admin home dashboard export"
          width={3840}
          height={2718}
          priority
        />
        <div className={styles.dashboardHotspots}>
          {dashboardAnnotations.map((item) => (
            <button
              key={item.id}
              className={`${styles.dashboardHotspot} ${hotspotStyles[item.id]} ${selected === item.id ? styles.selected : ''}`}
              onClick={() => setSelected(item.id)}
              aria-label={`Show annotation for ${item.label}`}
              aria-pressed={selected === item.id}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.dashboardAnnotation}>
        <span className={styles.annotationIndex}>
          0{dashboardAnnotations.findIndex((item) => item.id === selected) + 1}
        </span>
        <div>
          <p className={utilityStyles.eyebrow}>Dashboard annotation</p>
          <h3>{active.label}</h3>
          <p>{active.text}</p>
        </div>
        <Check size={18} />
      </div>
    </div>
  );
}
