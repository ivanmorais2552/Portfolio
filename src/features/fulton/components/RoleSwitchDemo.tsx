'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './RoleSwitchDemo.module.css';

const judgeCards = ['Assigned posters', 'Scoring rubric', 'Evaluation notes'];
const leadJudgeCards = ['Judge assignments', 'Scoring overview', 'Winner selection'];

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
