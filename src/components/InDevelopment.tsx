import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { IN_DEVELOPMENT, PROJECT_CATEGORIES } from '../data';

export default function InDevelopment() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? IN_DEVELOPMENT : IN_DEVELOPMENT.filter((p) => p.category === filter);

  return (
    <Section id="in-dev" heading="Works in Progress" subtitle="In Development">
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

      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((p, i) => (
          <div key={i} className="bg-card border border-matrix/20 rounded-lg p-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-body font-bold">{p.title}</h3>
              <span className="text-[10px] text-cyber border border-cyber/30 rounded px-2 py-0.5">{p.category}</span>
            </div>
            <p className="text-muted text-sm mb-4">{p.desc}</p>
            <div className="flex justify-between text-xs text-muted mb-1">
              <span>{p.stage}</span><span>{p.progress}%</span>
            </div>
            <div className="h-2 bg-bg rounded overflow-hidden border border-matrix/20">
              <motion.div
                className="h-full bg-matrix"
                initial={{ width: 0 }}
                whileInView={{ width: `${p.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
