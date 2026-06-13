import Section from './Section';
import Card from './Card';
import { STATS, EDUCATION } from '../data';

const PILLS = ['Security', 'Pentesting', 'Cloud Security', 'CTF Player'];

export default function About() {
  return (
    <Section id="about" heading="~/about.sh" subtitle="About Me">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="text-center md:text-left">
          <div
            className="w-44 h-44 mx-auto md:mx-0 border-2 border-matrix flex items-center justify-center text-matrix text-4xl shadow-glow mb-5"
            style={{ clipPath: 'polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)' }}
          >
            {'</>'}
          </div>
          <h3 className="text-2xl font-bold text-body">[YOUR NAME]</h3>
          <p className="text-cyber text-sm mb-3">Cybersecurity Specialist &amp; Ethical Hacker</p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {PILLS.map((p) => (
              <span key={p} className="text-xs border border-matrix/30 text-matrix rounded px-2 py-1">{p}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-muted mb-6 leading-relaxed">[YOUR BIO HERE]</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {STATS.map((s) => (
              <Card key={s.label} className="text-center !p-4">
                <p className="text-2xl font-bold text-matrix">{s.value}</p>
                <p className="text-muted text-xs">{s.label}</p>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {PILLS.map((p) => (
              <span key={p} className="text-xs bg-card border border-matrix/20 rounded px-2 py-1">{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <p className="text-cyber text-sm mb-6">Academic Journey</p>
        <div className="border-l border-matrix/30 ml-3">
          {EDUCATION.map((e) => (
            <div key={e.school} className="relative pl-8 pb-8">
              <span className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-matrix shadow-glow" />
              <span className="absolute -left-12 top-0 w-7 h-7 rounded-full border border-matrix/30 hidden md:flex items-center justify-center text-[10px] text-muted">logo</span>
              <h4 className="text-body font-bold">{e.school}</h4>
              <p className="text-cyber text-sm">{e.degree}</p>
              <p className="text-muted text-xs">{e.years} &middot; {e.score}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
