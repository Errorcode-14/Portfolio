import Section from './Section';
import Card from './Card';
import { CERTS } from '../data';

export default function Certifications() {
  return (
    <Section id="certs" heading="~/certifications.sh" subtitle="Professional Credentials">
      <div className="grid gap-5 md:grid-cols-3">
        {CERTS.map((c, i) => (
          <Card key={i} className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 rounded border border-matrix/30 bg-matrix/10 flex items-center justify-center text-lg">&#128274;</div>
            <div>
              <h3 className="text-body font-bold leading-tight">{c.name}</h3>
              <p className="text-muted text-xs mb-2">{c.issuer}</p>
              <span className={`text-[10px] rounded px-2 py-0.5 ${c.status === 'Verified' ? 'text-matrix border border-matrix/30' : 'text-cyber border border-cyber/30'}`}>{c.status}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
