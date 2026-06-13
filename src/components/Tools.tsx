import Section from './Section';
import { TOOLS } from '../data';

function Col({ title, tools, color }: { title: string; tools: string[]; color: string }) {
  return (
    <div className="bg-card border border-matrix/20 rounded-lg p-5">
      <p className="font-bold mb-4" style={{ color }}>{title}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <span key={t} className="text-xs bg-bg border border-matrix/20 rounded px-3 py-1">
            <span style={{ color }}>&#9656;</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <Section id="tools" heading="~/tools.sh" subtitle="Tools & Frameworks">
      <div className="grid gap-5 md:grid-cols-2">
        <Col title="Red Teaming" tools={TOOLS.red} color="#ef4444" />
        <Col title="Blue Teaming" tools={TOOLS.blue} color="#00ccff" />
      </div>
    </Section>
  );
}
