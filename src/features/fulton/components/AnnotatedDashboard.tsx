'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { FultonImage } from './FultonImage';
import { dashboardAnnotations } from '../data/dashboardAnnotations';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './AnnotatedDashboard.module.css';

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
