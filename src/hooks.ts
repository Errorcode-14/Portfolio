import { useEffect, useRef, useState } from 'react';

// Live clock as HH:MM:SS AM/PM, updates every second.
export function useClock(): string {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// Typewriter that cycles through phrases with a blinking cursor handled in CSS.
export function useTypewriter(phrases: string[], typeSpeed = 90, deleteSpeed = 45, pause = 1400): string {
  const [text, setText] = useState('');
  const idx = useRef(0);
  const char = useRef(0);
  const deleting = useRef(false);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const run = () => {
      const cur = phrases[idx.current];
      if (!deleting.current) {
        char.current++;
        setText(cur.slice(0, char.current));
        if (char.current === cur.length) {
          deleting.current = true;
          timeout = setTimeout(run, pause);
          return;
        }
      } else {
        char.current--;
        setText(cur.slice(0, char.current));
        if (char.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % phrases.length;
        }
      }
      timeout = setTimeout(run, deleting.current ? deleteSpeed : typeSpeed);
    };
    timeout = setTimeout(run, typeSpeed);
    return () => clearTimeout(timeout);
  }, [phrases, typeSpeed, deleteSpeed, pause]);
  return text;
}

// Tracks which section id is currently active in the viewport.
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}
