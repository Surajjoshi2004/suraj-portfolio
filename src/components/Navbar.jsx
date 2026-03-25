import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [ropePulled, setRopePulled] = useState(false);

  const handleRopePull = () => {
    setRopePulled(true);
    setTimeout(() => setRopePulled(false), 600);
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);

      // detect active section
      const sections = links.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-progress" style={{ width: `${progress}%` }} />
      <span className="nav-logo">sj.dev</span>
      <ul className="nav-links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className={active === href ? 'active' : ''}>{label}</a>
          </li>
        ))}
      </ul>
      <button 
        className={`bell-rope-toggle ${ropePulled ? 'pulled' : ''}`}
        onClick={handleRopePull}
        aria-label="Toggle theme"
        title={isDark ? 'Light mode' : 'Dark mode'}
      >
        <span className="theme-toggle-label">{isDark ? 'Light mode' : 'Dark mode'}</span>
        <div className={`theme-toggle-icon ${ropePulled ? 'ringing' : ''}`}>
          {isDark ? <SunIcon /> : <MoonIcon />}
        </div>
      </button>
    </nav>
  );
}

function MoonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 15.2A7.9 7.9 0 0 1 8.8 4 9 9 0 1 0 20 15.2Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.72 5.28l-1.56 1.56M6.84 17.16l-1.56 1.56M18.72 18.72l-1.56-1.56M6.84 6.84 5.28 5.28" />
    </svg>
  );
}
