import { projects } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="reveal">
        <p className="section-label">03 — Projects</p>
        <h2 className="section-title">What I've Built</h2>
      </div>

      <div className="projects-grid reveal">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
