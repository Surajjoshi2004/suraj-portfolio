import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // stagger children with .stagger class
            entry.target.querySelectorAll('.stagger').forEach((child, i) => {
              child.style.transitionDelay = `${i * 0.08}s`;
              child.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
