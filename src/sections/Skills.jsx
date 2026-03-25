import './Skills.css';

const skillIcons = [
  { name: 'Python',      color: '#3776AB', icon: 'python' },
  { name: 'C++',         color: '#00599C', icon: 'cpp' },
  { name: 'JavaScript',  color: '#F7DF1E', icon: 'js' },
  { name: 'XGBoost',     color: '#00BFFF', icon: 'xgboost' },
  { name: 'Scikit-learn',color: '#F89939', icon: 'sklearn' },
  { name: 'Pandas',      color: '#150458', icon: 'pandas' },
  { name: 'NumPy',       color: '#4DABCF', icon: 'numpy' },
  { name: 'Java',        color: '#007396', icon: 'java' },
  { name: 'FastAPI',     color: '#009688', icon: 'fastapi' },
  { name: 'Git',         color: '#F05032', icon: 'git' },
  { name: 'Linux',       color: '#FCC624', icon: 'linux' },
  { name: 'Postman',     color: '#FF6C37', icon: 'postman' },
  { name: 'Docker',      color: '#2496ED', icon: 'docker' },
];

// SVG icons as components
const icons = {
  python: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <linearGradient id="py1" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 703.317)">
        <stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/>
      </linearGradient>
      <linearGradient id="py2" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 703.317)">
        <stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/>
      </linearGradient>
      <path fill="url(#py1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill="url(#py2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
  ),
  cpp: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <path fill="#00599C" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
      <path fill="#004482" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
      <path fill="#659AD2" d="M64 8.7l47.3 27.3v54.7L64 117.9 16.7 90.6V36.1z"/>
      <path fill="#fff" d="M64 79.7c-8.7 0-15.8-7.1-15.8-15.8S55.3 48.1 64 48.1c5.4 0 10.2 2.7 13.1 6.9l11.5-6.6C83.1 39.1 74.1 33.3 64 33.3c-16.9 0-30.6 13.7-30.6 30.6S47.1 94.5 64 94.5c10.2 0 19.2-5.9 24.6-14.6L77.1 73c-2.9 4.2-7.7 6.7-13.1 6.7z"/>
      <path fill="#fff" d="M88.5 61.6v4h-4v-4h-4v-4h4v-4h4v4h4v4zM100.5 61.6v4h-4v-4h-4v-4h4v-4h4v4h4v4z"/>
    </svg>
  ),
  js: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/>
      <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.348-13.084-14.761-3.204-1.574-6.912-2.48-7.177-6.206-.07-2.244.578-3.947 1.934-5.188 1.009-.734 2.996-1.519 5.785-1.344 2.854.208 5.356.972 7.176 2.959.77.861 1.315 2.074 1.344 3.292h6.912c-.084-6.38-4.348-11.489-12.168-12.593-4.006-.498-8.349.126-11.394 2.166-3.754 2.4-6.13 6.34-6.38 11.017-.413 8.28 5.878 12.59 14.332 14.718 2.165.494 4.418.91 5.928 2.166 1.608 1.344 1.786 3.456 1.386 5.272-.671 3.109-3.794 5.19-7.92 5.232-5.356-.085-9.362-2.64-10.924-7.921-.505-1.69-.505-3.604.084-5.355h-6.912c-.335 5.712 1.26 10.768 4.64 14.332 3.875 4.099 9.591 5.87 15.619 5.712 8.994-.253 14.942-4.878 16.376-12.507zM69.092 39.019H62.18v41.361c0 6.794.168 13.165-.671 14.929-1.092 2.565-3.458 3.109-5.88 3.025-1.933-.085-3.866-.754-5.04-1.764-.419-.419-1.008-1.02-1.173-1.597-.168-.672-.168-1.429-.168-2.1h-6.996c.084 1.849.168 3.617.671 5.19 1.429 4.725 5.02 7.584 10.096 8.113 3.291.336 6.83-.084 9.698-1.764 4.221-2.48 5.88-6.38 6.04-11.089.084-13.335 0-26.67 0-40.005v-14.3z"/>
    </svg>
  ),
  xgboost: () => (
    <svg viewBox="0 0 64 64" width="46" height="46">
      <rect width="64" height="64" rx="12" fill="#00BFFF" opacity="0.15"/>
      <text x="32" y="44" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#00BFFF" fontFamily="monospace">XG</text>
    </svg>
  ),
  sklearn: () => (
    <svg viewBox="0 0 64 64" width="46" height="46">
      <rect width="64" height="64" rx="12" fill="#F89939" opacity="0.15"/>
      <circle cx="32" cy="32" r="18" fill="none" stroke="#F89939" strokeWidth="4"/>
      <path d="M22 32 Q32 18 42 32 Q32 46 22 32Z" fill="#F89939" opacity="0.8"/>
    </svg>
  ),
  pandas: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <rect width="128" height="128" rx="20" fill="#150458" opacity="0.3"/>
      <rect x="40" y="10" width="20" height="50" rx="10" fill="#E70488"/>
      <rect x="68" y="68" width="20" height="50" rx="10" fill="#E70488"/>
      <rect x="40" y="68" width="20" height="50" rx="10" fill="#150458" stroke="#E70488" strokeWidth="2"/>
      <rect x="68" y="10" width="20" height="50" rx="10" fill="#150458" stroke="#E70488" strokeWidth="2"/>
    </svg>
  ),
  numpy: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <path fill="#4DABCF" d="M 64 4 L 4 36 L 4 92 L 64 124 L 124 92 L 124 36 Z"/>
      <path fill="#013243" d="M 64 14 L 14 42 L 14 86 L 64 114 L 114 86 L 114 42 Z"/>
      <path fill="#4DABCF" d="M 64 30 L 30 50 L 30 78 L 64 98 L 98 78 L 98 50 Z" opacity="0.5"/>
      <text x="64" y="72" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#4DABCF" fontFamily="monospace">Nu</text>
    </svg>
  ),
  java: () => (
    <svg viewBox="0 0 64 64" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="12" fill="#007396" opacity="0.1"/>
      <path d="M21 41c0 5.5 5.5 10 12 10s12-4.5 12-10H21z" fill="#fff"/>
      <path d="M18 34c3.5 2.5 8.4 4 13 4s9.5-1.5 13-4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 30c3.5 2.5 8.4 4 13 4s9.5-1.5 13-4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 26c3.5 2.5 8.4 4 13 4s9.5-1.5 13-4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 21c2.5 0 4.5-1.5 4.5-3.5 0-2.1-2-3.5-4.5-3.5s-4.5 1.4-4.5 3.5S21.5 21 24 21z" fill="#fff" opacity="0.6"/>
      <text x="32" y="59" textAnchor="middle" fill="#001F3F" fontFamily="Verdana,Arial,Helvetica,sans-serif" fontSize="10" fontWeight="700">Java</text>
    </svg>
  ),
  flask: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <path fill="#fff" d="M 52 8 L 52 52 L 16 100 C 16 116 40 120 64 120 C 88 120 112 116 112 100 L 76 52 L 76 8 Z"/>
      <path fill="#ccc" d="M 52 8 L 76 8 L 76 52 L 52 52 Z"/>
      <ellipse cx="64" cy="120" rx="48" ry="8" fill="#aaa"/>
      <rect x="48" y="4" width="32" height="8" rx="4" fill="#888"/>
    </svg>
  ),
  fastapi: () => (
    <svg viewBox="0 0 64 64" width="46" height="46">
      <circle cx="32" cy="32" r="30" fill="#009688" opacity="0.2"/>
      <circle cx="32" cy="32" r="30" fill="none" stroke="#009688" strokeWidth="3"/>
      <path d="M36 14 L20 34 H32 L28 50 L44 30 H32 Z" fill="#009688"/>
    </svg>
  ),
  git: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <path fill="#F05032" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.785-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00.004-11.501z"/>
    </svg>
  ),
  linux: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <path fill="#FCC624" d="M64.047 3.677c-5.213.05-10.23 2.042-15.694 6.854-6.578 5.788-8.98 15.907-11.313 25.675-1.607 6.696-3.068 13.62-6.44 18.903-2.595 4.072-6.353 6.807-9.967 9.656-3.613 2.849-7.156 6.041-8.617 11.147-1.461 5.107.127 12.204 4.75 15.955 4.624 3.751 11.485 4.13 17.384 3.068 5.9-1.062 11.233-3.565 17.384-4.626 6.153-1.063 13.33-.353 18.596 2.474 5.264 2.827 8.332 7.695 11.488 12.33 3.157 4.635 6.445 9.187 12.065 11.2 5.62 2.016 14.162.51 19.26-4.75 5.097-5.26 6.698-13.98 6.082-21.845-.618-7.866-3.454-15.32-6.727-22.04-1.637-3.363-3.337-6.632-4.624-10.024-1.286-3.393-2.145-6.944-1.77-11.2.53-6.092 3.345-12.184 2.478-18.155-.867-5.97-5.72-11.932-11.713-13.858-2.997-.963-6.21-.924-9.3-.13-2.398.617-4.67 1.74-6.928 1.918-2.26.178-4.554-.602-6.815-.708-.77-.036-1.536-.048-2.3-.044zm-1.073 6.71c6.558-.1 12.29 3.13 15.252 9.193.607 1.24.978 2.586.993 3.945.015 1.359-.326 2.755-1.1 3.915-1.547 2.327-4.495 3.423-7.25 3.202-2.756-.22-5.294-1.648-7.365-3.455-2.072-1.807-3.72-4.02-4.83-6.455-1.107-2.435-1.607-5.135-1.138-7.747.225-1.26.704-2.494 1.551-3.396.38-.404.82-.75 1.33-.99.51-.24 1.079-.35 1.557-.212z"/>
    </svg>
  ),
  postman: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <circle cx="64" cy="64" r="60" fill="#FF6C37" opacity="0.2"/>
      <circle cx="64" cy="64" r="60" fill="none" stroke="#FF6C37" strokeWidth="4"/>
      <path d="M90 64 C90 78.36 78.36 90 64 90 C49.64 90 38 78.36 38 64 C38 49.64 49.64 38 64 38" stroke="#FF6C37" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <line x1="64" y1="38" x2="90" y2="64" stroke="#FF6C37" strokeWidth="6" strokeLinecap="round"/>
      <line x1="72" y1="56" x2="60" y2="68" stroke="#FF6C37" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  docker: () => (
    <svg viewBox="0 0 128 128" width="46" height="46">
      <path fill="#2496ED" d="M88.9 49h-9.1c-.5-3.5-2.5-6.7-5.5-8.8v-1.2h-10v5.5c-6.1.6-11 5.6-11 11.7 0 6.5 5.3 11.8 11.8 11.8h23.8c6.5 0 11.8-5.3 11.8-11.8 0-6.2-4.9-11.2-11-11.2z"/>
      <path fill="#2496ED" d="M88.9 65h-56c-6.5 0-11.8 5.3-11.8 11.8 0 6.3 4.8 11.4 10.8 11.7v5.5h10v-1.2c3 2.1 5 5.3 5.5 8.8h41.5c6.5 0 11.8-5.3 11.8-11.8s-5.3-11.8-11.8-11.8z"/>
      <path fill="#2496ED" d="M29.7 30c-6.5 0-11.8 5.3-11.8 11.8 0 6.3 4.8 11.4 10.8 11.7v5.5h10v-1.2c3 2.1 5 5.3 5.5 8.8h41.5v-7c-6.1.6-11 5.6-11 11.7 0 6.5 5.3 11.8 11.8 11.8h23.8c6.5 0 11.8-5.3 11.8-11.8 0-6.2-4.9-11.2-11-11.2h-9.1c-.5-3.5-2.5-6.7-5.5-8.8v-1.2h-10v5.5c-6.1.6-11 5.6-11 11.7 0 1.4.2 2.8.6 4.1H28.1V30h1.6z"/>
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="reveal">
        <p className="section-label">02 — Skills</p>
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-subtitle">Tools and technologies I work with</p>
      </div>

      <div className="skills-icon-grid reveal">
        {skillIcons.map(({ name, icon }, i) => {
          const IconComp = icons[icon];
          return (
            <div
              key={name}
              className="skill-icon-card"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="skill-icon-wrap">
                {IconComp ? <IconComp /> : <span className="skill-fallback">{name[0]}</span>}
                <div className="skill-icon-glow" />
              </div>
              <span className="skill-icon-label">{name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
