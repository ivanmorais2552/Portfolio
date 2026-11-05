'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { ResearchGrantRoleId, ResearchGrantScreen } from './data/researchGrantsContent';
import { researchGrantRoles } from './data/researchGrantsContent';
import styles from './ResearchGrantsRoleExplorer.module.css';

export function ResearchGrantsRoleExplorer() {
  const [activeRoleId, setActiveRoleId] = useState<ResearchGrantRoleId>('faculty');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const activeRole =
    researchGrantRoles.find((role) => role.id === activeRoleId) ?? researchGrantRoles[0];
  const selectedScreen = selectedIndex === null ? null : activeRole.screens[selectedIndex];

  useEffect(() => {
    if (!selectedScreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + activeRole.screens.length) % activeRole.screens.length,
        );
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % activeRole.screens.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeRole, selectedScreen]);

  function selectRole(roleId: ResearchGrantRoleId) {
    setActiveRoleId(roleId);
    setSelectedIndex(null);
  }

  function openScreen(index: number) {
    setSelectedIndex(index);
  }

  function moveScreen(direction: -1 | 1) {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current + direction + activeRole.screens.length) % activeRole.screens.length,
    );
  }

  return (
    <>
      <div className={styles.explorer}>
        <div className={styles.roleTabs} role="tablist" aria-label="Research Grants user roles">
          {researchGrantRoles.map((role) => (
            <button
              className={activeRoleId === role.id ? styles.active : ''}
              id={`${role.id}-tab`}
              key={role.id}
              type="button"
              role="tab"
              aria-controls={`${role.id}-panel`}
              aria-selected={activeRoleId === role.id}
              onClick={() => selectRole(role.id)}
            >
              {role.label}
            </button>
          ))}
        </div>

        <div
          className={styles.rolePanel}
          id={`${activeRole.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeRole.id}-tab`}
          tabIndex={0}
        >
          <div className={styles.roleIntro}>
            <div>
              <p className={styles.roleLabel}>Current role</p>
              <h3>{activeRole.label}</h3>
            </div>
            <p>{activeRole.responsibility}</p>
          </div>
          <div className={styles.screenGrid}>
            {activeRole.screens.map((screen, index) => (
              <button
                className={styles.screenButton}
                key={screen.src}
                type="button"
                onClick={() => openScreen(index)}
                aria-label={`Expand ${screen.label} screenshot`}
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 40vw"
                />
                <span>{screen.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedScreen && selectedIndex !== null && (
        <ResearchGrantsImageDialog
          activeRoleLabel={activeRole.label}
          index={selectedIndex}
          screen={selectedScreen}
          total={activeRole.screens.length}
          onClose={() => setSelectedIndex(null)}
          onNext={() => moveScreen(1)}
          onPrevious={() => moveScreen(-1)}
        />
      )}
    </>
  );
}

function ResearchGrantsImageDialog({
  activeRoleLabel,
  index,
  screen,
  total,
  onClose,
  onNext,
  onPrevious,
}: {
  activeRoleLabel: string;
  index: number;
  screen: ResearchGrantScreen;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  return (
    <div className={styles.dialogBackdrop} role="presentation" onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="research-grants-image-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.dialogToolbar}>
          <p id="research-grants-image-title">
            {activeRoleLabel} · {index + 1} / {total}
          </p>
          <button type="button" onClick={onClose} aria-label="Close screenshot viewer">
            Close
          </button>
        </div>
        <div className={styles.dialogImage}>
          <Image
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            sizes="90vw"
            priority
          />
        </div>
        <div className={styles.dialogControls}>
          <button type="button" onClick={onPrevious} aria-label="Previous screenshot">
            Previous
          </button>
          <button type="button" onClick={onNext} aria-label="Next screenshot">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
