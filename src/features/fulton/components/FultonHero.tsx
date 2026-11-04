import { ArrowDown, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FultonImage } from './FultonImage';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <div className={styles.breadcrumb}>
          <Link href="/work">
            <ArrowLeft size={14} /> Work
          </Link>
          <span>/</span>
          <span>Fulton</span>
        </div>
        <p className={`${utilityStyles.eyebrow} ${styles.heroKicker}`}>Flagship case study / 01</p>
        <h1>Fulton Conference Management</h1>
        <p className={styles.subtitle}>
          Redesigning the workflows behind a university research conference.
        </p>
        <div className={styles.meta}>
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
      <div className={styles.heroImage}>
        <FultonImage
          src="/images/fulton/admin/Home%20Dashboard.png"
          alt="Fulton admin home dashboard showing conference operations"
          width={3840}
          height={2718}
          priority
        />
        <p>Original Fulton design export · Main dashboard</p>
      </div>
      <a className={styles.scroll} href="#overview" aria-label="Scroll to project overview">
        <span>Scroll to explore</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
