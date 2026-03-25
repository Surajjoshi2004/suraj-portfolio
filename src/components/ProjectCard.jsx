import { useRef } from 'react';
import './ProjectCard.css';

export default function ProjectCard({ id, title, description, tags, github, demo, image }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    // Move spotlight
    card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
    card.classList.add('tilting');
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = '';
    card.classList.remove('tilting');
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-spotlight" />
      {image && (
        <div className="project-media">
          <img className="project-image" src={image} alt={`${title} preview`} />
        </div>
      )}
      <div className="project-num">PROJECT_{id}</div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-tags">
        {tags.map(tag => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="project-btn project-btn-gh">
            <GitHubIcon /> GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="project-btn project-btn-demo">
            ↗ Demo
          </a>
        )}
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
