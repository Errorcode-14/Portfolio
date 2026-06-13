import { useState } from 'react';
import { NAV_LINKS } from '../data';
import { useClock, useActiveSection } from '../hooks';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const clock = useClock();
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur border-b border-matrix/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-matrix font-bold tracking-wide">./[YOUR_NAME].sh</a>

        <ul className="hidden md:flex gap-6 text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`transition-colors ${active === l.id ? 'text-matrix' : 'text-muted hover:text-matrix'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <span className="text-cyber text-xs tabular-nums">{clock}</span>
          <span className="flex items-center gap-1 text-matrix text-xs border border-matrix/30 rounded px-2 py-1">
            <span className="w-2 h-2 rounded-full bg-matrix animate-pulseDot" /> SECURE
          </span>
        </div>

        <button className="md:hidden text-matrix" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? '[ x ]' : '[ menu ]'}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-3 px-6 pb-4 border-t border-matrix/20">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={active === l.id ? 'text-matrix' : 'text-muted'}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3 pt-2">
            <span className="text-cyber text-xs">{clock}</span>
            <span className="flex items-center gap-1 text-matrix text-xs">
              <span className="w-2 h-2 rounded-full bg-matrix animate-pulseDot" /> SECURE
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
}
