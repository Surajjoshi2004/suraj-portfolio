import { useEffect, useRef, useState } from 'react';
import { personal, stats } from '../data/portfolio';
import './About.css';

function useCountUp(target, duration = 1200, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || isNaN(parseInt(target, 10))) return;

    const end = parseInt(target, 10);
    const step = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      setValue(Math.floor(current));
      if (current >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [start, target, duration]);

  return Number.isNaN(parseInt(target, 10))
    ? target
    : value + (target.toString().includes('+') ? '+' : '');
}

function StatCard({ num, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const display = useCountUp(num, 1000, visible);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-num">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  const focusAreas = [
    'Machine Learning',
    'Backend Systems',
    'Problem Solving',
    'Data Analysis',
  ];

  return (
    <section id="about">
      <div className="reveal">
        <p className="section-label">01 - About</p>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="about-grid reveal">
        <div className="about-text">
          <div className="about-intro-card">
            <p className="about-kicker">Driven by real-world problem solving</p>
            <h3 className="about-headline">
              Building practical software with
              <span> machine learning and backend engineering.</span>
            </h3>
            <p className="about-lead">
              I'm <strong>{personal.name}</strong>, a Computer Science student at{' '}
              <strong>{personal.university}</strong>, pursuing a {personal.degree} and
              focusing on systems that turn data into useful decisions.
            </p>
          </div>

          <div className="about-copy">
            <p>
              I'm passionate about applying <strong>machine learning</strong> and{' '}
              <strong>backend engineering</strong> to real-world problems, from predicting
              power outages to analyzing carbon emissions at scale.
            </p>
            <p>
              When I'm not training models or building APIs, I'm sharpening{' '}
              <strong>Data Structures and Algorithms</strong> skills and exploring new tools
              across the ML ecosystem.
            </p>
          </div>

          <div className="about-focus">
            {focusAreas.map((area) => (
              <span key={area} className="focus-pill">{area}</span>
            ))}
          </div>
        </div>

        <div className="about-stats">
          {stats.map(({ num, label }) => (
            <StatCard key={label} num={num} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
