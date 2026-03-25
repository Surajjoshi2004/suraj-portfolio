import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top  = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      const p = pos.current;
      p.tx += (p.mx - p.tx) * 0.15;
      p.ty += (p.my - p.ty) * 0.15;
      if (trailRef.current) {
        trailRef.current.style.left = p.tx + 'px';
        trailRef.current.style.top  = p.ty + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const grow = () => {
      if (cursorRef.current) cursorRef.current.classList.add('hover');
      if (trailRef.current)  trailRef.current.classList.add('hover');
    };
    const shrink = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('hover');
      if (trailRef.current)  trailRef.current.classList.remove('hover');
    };

    const targets = document.querySelectorAll('a, button, .skill-tag, .project-card, .stat-card');
    targets.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-trail" ref={trailRef} />
    </>
  );
}
