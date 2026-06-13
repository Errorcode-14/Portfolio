import { useState } from 'react';
import Section from './Section';
import { SKILL_GROUPS } from '../data';

export default function Skills() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="skills"
      heading="~/skills.sh"
      subtitle="Technical Skills"
      tagline="A comprehensive toolkit for offensive and defensive security operations"
    >
      <div className="space-y-3">
        {SKILL_GROUPS.map((g, i) => (
          <div key={g.name} className="bg-card border border-matrix/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left"
            >
              <span className="text-body font-bold">{g.name}</span>
              <span className="flex items-center gap-3">
                <span className="text-[10px] text-matrix border border-matrix/30 rounded px-2 py-0.5">{g.subgroups.length} skill areas</span>
                <span className={`text-muted transition-transform ${open === i ? 'rotate-180' : ''}`}>&#9660;</span>
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 border-t border-matrix/20 pt-4 space-y-4">
                {g.subgroups.map((sg) => (
                  <div key={sg.name}>
                    <p className="text-cyber text-xs mb-2">{sg.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {sg.tools.map((t) => (
                        <span key={t} className="text-[11px] bg-bg border border-matrix/20 rounded px-2 py-1">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
