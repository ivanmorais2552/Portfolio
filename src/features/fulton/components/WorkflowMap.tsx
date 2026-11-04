'use client';

import { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { FultonImage } from './FultonImage';
import { workflowItems } from '../data/workflowContent';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './WorkflowMap.module.css';

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
