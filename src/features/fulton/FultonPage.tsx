import { FultonHero } from './components/FultonHero';
import { FultonOverview } from './components/FultonOverview';
import { FultonDesignProcess } from './components/FultonDesignProcess';
import { FultonWorkflow } from './components/FultonWorkflow';
import { FultonJudging } from './components/FultonJudging';
import { FultonPrinting } from './components/FultonPrinting';
import { FultonAdministration } from './components/FultonAdministration';
import { FultonSubmissionsAwards } from './components/FultonSubmissionsAwards';
import { FultonReflection } from './components/FultonReflection';
import styles from './FultonPage.module.css';

export function FultonPage() {
  return (
    <div className={styles.page}>
      <main className={styles.caseStudy}>
        <FultonHero />
        <FultonOverview />
        <FultonDesignProcess />
        <FultonWorkflow />
        <FultonJudging />
        <FultonPrinting />
        <FultonAdministration />
        <FultonSubmissionsAwards />
        <FultonReflection />
      </main>
    </div>
  );
}
