import { useState } from 'react';
import Section from './Section';
import { PROJECTS, PROJECT_CATEGORIES } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section id="projects" heading="~/projects.sh" subtitle="Featured Projects">
      <div className="flex flex-wrap gap-2 mb-8">
        {PROJECT_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-xs rounded px-3 py-1 border transition ${
              filter === c ? 'bg-matrix text-bg border-matrix' : 'border-matrix/30 text-muted hover:text-matrix'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {shown.map((p, i) => (
          <div key={i} className="bg-card border border-matrix/20 border-l-4 border-l-matrix rounded-lg p-5 transition-all hover:border-matrix hover:shadow-glow">
            <div className="flex justify-between items-center mb-3">
              <span className={`text-[10px] rounded px-2 py-0.5 ${p.status === 'Completed' ? 'text-matrix border border-matrix/30' : 'text-cyber border border-cyber/30'}`}>{p.status}</span>
              <span className="text-[10px] text-muted border border-matrix/20 rounded px-2 py-0.5">Featured</span>
            </div>
            <h3 className="text-body font-bold mb-1">{p.title}</h3>
            <p className="text-muted text-sm mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {p.stack.map((s) => (
                <span key={s} className="text-[10px] text-cyber border border-cyber/20 rounded px-2 py-0.5">{s}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {p.overview && <a href={p.overview} className="text-xs text-matrix hover:underline">Project Overview</a>}
              {p.code && <a href={p.code} className="text-xs text-matrix hover:underline">Code</a>}
              {p.demo && <a href={p.demo} className="text-xs text-matrix hover:underline">Demo</a>}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="[YOUR PROJECTS URL]" className="text-matrix text-sm hover:underline">View All Projects &rarr;</a>
      </div>
    </Section>
  );
}
