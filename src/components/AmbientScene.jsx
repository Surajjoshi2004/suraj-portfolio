import './AmbientScene.css';

export default function AmbientScene() {
  const particles = [
    { left: '8%', top: '18%', size: '10px', delay: '0s', duration: '13s' },
    { left: '18%', top: '72%', size: '7px', delay: '1.2s', duration: '16s' },
    { left: '26%', top: '34%', size: '12px', delay: '2.4s', duration: '18s' },
    { left: '38%', top: '84%', size: '8px', delay: '0.8s', duration: '15s' },
    { left: '46%', top: '22%', size: '9px', delay: '3s', duration: '17s' },
    { left: '58%', top: '64%', size: '11px', delay: '1.8s', duration: '14s' },
    { left: '66%', top: '28%', size: '6px', delay: '2.8s', duration: '12s' },
    { left: '74%', top: '78%', size: '10px', delay: '0.4s', duration: '19s' },
    { left: '82%', top: '42%', size: '8px', delay: '2.2s', duration: '16s' },
    { left: '90%', top: '68%', size: '12px', delay: '1s', duration: '18s' },
  ];

  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-plane ambient-plane-1" />
      <div className="ambient-plane ambient-plane-2" />
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="ambient-particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="ambient-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
