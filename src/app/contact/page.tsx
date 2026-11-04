import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/page-intro';

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        label="03 / Contact"
        title={
          <>
            Let&apos;s talk about
            <br />
            <em>good problems.</em>
          </>
        }
        description="For opportunities, collaborations, or a thoughtful conversation about product design and development."
      />
      <section className="section page-container contact-content">
        <div className="contact-list">
          <div>
            <span className="eyebrow">Email</span>
            <strong>email placeholder</strong>
            <small>Contact information will be added soon.</small>
          </div>
          <div>
            <span className="eyebrow">LinkedIn</span>
            <strong>
              LinkedIn placeholder <ArrowUpRight size={18} />
            </strong>
            <small>Social link will be added soon.</small>
          </div>
        </div>
      </section>
    </main>
  );
}
