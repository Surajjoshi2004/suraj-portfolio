import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="reveal">
        <p className="section-label">04 — Experience</p>
        <h2 className="section-title">Where I've Contributed</h2>
      </div>

      <div className="exp-list reveal">
        {experience.map(({ role, org, description }) => (
          <div key={role} className="exp-card">
            <div className="exp-role">{role}</div>
            <div className="exp-org">{org}</div>
            <p className="exp-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
