import { PageIntro } from '@/components/page-intro';

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        label="02 / About"
        title={
          <>
            A designer who
            <br />
            <em>likes to understand.</em>
          </>
        }
        description="I work at the intersection of product design, engineering, and business. I enjoy understanding complex problems, designing thoughtful experiences, and building technology that solves real problems."
      />
      <section className="section page-container about-content">
        <div className="about-grid">
          <div>
            <p className="eyebrow">Background</p>
            <p className="large-copy">
              I&apos;m Ivan Morais, an Information Systems student at Brigham Young University. My
              work spans product design, development, and the systems that connect them.
            </p>
          </div>
          <div className="about-facts">
            <div>
              <span>Education</span>
              <strong>BYU · Information Systems</strong>
              <small>Expected graduation: April 2029</small>
            </div>
            <div>
              <span>Academic standing</span>
              <strong>GPA: 3.92</strong>
            </div>
          </div>
        </div>
        <div className="experience-block">
          <p className="eyebrow">Experience</p>
          <div className="experience-row">
            <div>
              <strong>Web Developer</strong>
              <span>BYU College of Family, Home, and Social Sciences</span>
            </div>
            <span>August 2026 — present</span>
          </div>
          <p className="experience-detail">
            Develop full-stack applications, build custom research reports, troubleshoot database
            issues with researchers, and implement frontend features and bug fixes based on user
            feedback and requirements.
          </p>
          <div className="experience-row">
            <div>
              <strong>Product Designer</strong>
              <span>BYU College of Family, Home, and Social Sciences</span>
            </div>
            <span>January — August 2026</span>
          </div>
          <p className="experience-detail">
            Independently led the Fulton Conference Platform redesign, created 38 screens across
            five workflows, built a Figma design system with 102 component variants, and redesigned
            three research websites into a unified experience.
          </p>
          <div className="experience-row">
            <div>
              <strong>Inside Sales Specialist</strong>
              <span>Sila Services</span>
            </div>
            <span>June — November 2025</span>
          </div>
        </div>
        <div className="experience-block additional-experience">
          <p className="eyebrow">Leadership &amp; involvement</p>
          <div className="experience-row">
            <div>
              <strong>Missionary &amp; leadership experience</strong>
              <span>Lima, Peru</span>
            </div>
            <span>October 2022 — September 2024</span>
          </div>
          <p className="experience-detail">
            Mentored 30 volunteers and served on a leadership council coordinating more than 150
            volunteers.
          </p>
          <div className="experience-row">
            <div>
              <strong>Student involvement</strong>
              <span>Brigham Young University</span>
            </div>
            <span>Current &amp; previous</span>
          </div>
          <p className="experience-detail">
            BYU FlexGE Student Council Member; BYU Student Association for Latin American Studies
            officer.
          </p>
        </div>
        <div className="award-block">
          <p className="eyebrow">Recognition</p>
          <p className="award-copy">
            <strong>First place</strong> in a Figma-sponsored UX/UI Design Challenge in 2026, a
            timed team-based competition hosted by the BYU UX Design Club.
          </p>
        </div>
        <div className="skills-block">
          <p className="eyebrow">Capabilities &amp; tools</p>
          <div className="skill-group">
            <span>Product</span>
            <div className="skill-list">
              <span>Figma</span>
              <span>Requirements gathering</span>
              <span>User research</span>
              <span>Prioritization</span>
              <span>Roadmapping</span>
              <span>Prototyping</span>
            </div>
          </div>
          <div className="skill-group">
            <span>Technical</span>
            <div className="skill-list">
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>Angular</span>
              <span>SQL</span>
              <span>PostgreSQL</span>
              <span>Prisma</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>Git / GitHub</span>
            </div>
          </div>
          <div className="skill-group">
            <span>Language</span>
            <div className="skill-list">
              <span>Spanish · Full professional proficiency</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
