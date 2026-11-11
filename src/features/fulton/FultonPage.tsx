import { FultonHero } from './components/FultonHero';
import { FultonOverview } from './components/FultonOverview';
import { FultonWorkflow } from './components/FultonWorkflow';
import { FultonDesignProcess } from './components/FultonDesignProcess';
import { FultonSolution } from './components/FultonSolution';
import { FultonReflection } from './components/FultonReflection';
import styles from './FultonPage.module.css';

export function FultonPage() {
  return (
    <div className={styles.page}>
      <main className={styles.caseStudy}>
        <FultonHero />
        <FultonOverview />
        <FultonWorkflow />
        <FultonDesignProcess />
        <FultonSolution />
        <FultonReflection />
      </main>
    </div>
  );
}
