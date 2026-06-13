import Section from './Section';
import Card from './Card';
import { EXPERIENCE } from '../data';

export default function Experience() {
  const e = EXPERIENCE;
  return (
    <Section id="experience" heading="Career Journey" subtitle="Experience">
      <Card className="border-l-4 border-l-matrix">
        <div className="flex flex-wrap justify-between gap-2 mb-2">
          <div>
            <h3 className="text-body font-bold">{e.role}</h3>
            <p className="text-cyber text-sm">{e.company}</p>
          </div>
          <span className="text-matrix text-xs border border-matrix/30 rounded px-2 py-1 h-fit">{e.duration}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs text-muted border border-matrix/20 rounded px-2 py-1">{e.workType}</span>
          <span className="text-xs text-muted border border-matrix/20 rounded px-2 py-1">{e.department}</span>
        </div>
        <ul className="space-y-2">
          {e.bullets.map((b, i) => (
            <li key={i} className="text-muted text-sm pl-5 relative">
              <span className="absolute left-0 text-matrix">&rarr;</span>{b}
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
