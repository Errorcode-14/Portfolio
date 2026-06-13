import Section from './Section';
import Card from './Card';
import { FEATURES } from '../data';

export default function Features() {
  return (
    <Section id="features" heading="~/features.sh" subtitle="What I Bring">
      <div className="grid gap-5 md:grid-cols-3">
        {FEATURES.map((f) => (
          <Card key={f.title}>
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-matrix font-bold mb-1">{f.title}</h3>
            <p className="text-muted text-sm">{f.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
