import { useState } from 'react';
import { personal } from '../data/portfolio';
import './Contact.css';

const contactLinks = [
  personal.phone ? { label: 'PHONE', value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, '')}`, icon: '☎' } : null,
  { label: 'EMAIL', value: personal.email, href: `mailto:${personal.email}`, icon: '✉' },
  { label: 'GITHUB', value: 'github.com/surajjoshi', href: personal.github, icon: null, isGH: true },
  { label: 'LINKEDIN', value: 'linkedin.com/in/surajjoshi', href: personal.linkedin, icon: 'in' },
].filter(Boolean);

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact">
      <div className="contact-bg contact-bg-grid" />
      <div className="contact-bg contact-bg-plane contact-bg-plane-1" />
      <div className="contact-bg contact-bg-plane contact-bg-plane-2" />
      <div className="contact-bg contact-bg-orb" />
      <div className="reveal">
        <p className="section-label">05 — Contact</p>
        <h2 className="section-title">Let's Connect</h2>
      </div>

      <div className="contact-wrapper reveal">
        <div>
          <p className="contact-intro">
            I'm open to internships, collaborations, and interesting projects. Feel free to reach out!
          </p>
          <div className="contact-links">
            {contactLinks.map(({ label, value, href, icon, isGH }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">
                  {isGH ? <GitHubIcon /> : icon}
                </div>
                <div className="contact-info">
                  <div className="contact-label">{label}</div>
                  <div className="contact-value">{value}</div>
                </div>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">YOUR NAME</label>
            <input type="text" className="form-input" placeholder="e.g. Jane Smith" required />
          </div>
          <div className="form-group">
            <label className="form-label">EMAIL</label>
            <input type="email" className="form-input" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">MESSAGE</label>
            <textarea className="form-textarea" placeholder="Tell me about an opportunity or just say hi..." required />
          </div>
          <button type="submit" className="btn-primary">
            {sent ? '✓ Sent!' : <><SendIcon /> Send Message</>}
          </button>
        </form>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>;
}
function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color:'var(--muted)'}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}
function SendIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
}
