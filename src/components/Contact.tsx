import Section from './Section';
import { CONTACT } from '../data';

const ITEMS = [
  { icon: '\u2709', label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: '</>', label: 'GitHub', value: CONTACT.github, href: CONTACT.github },
  { icon: 'in', label: 'LinkedIn', value: CONTACT.linkedin, href: CONTACT.linkedin },
  { icon: '\u260E', label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      heading="~/contact.sh"
      subtitle="Get In Touch"
      tagline="Have a project in mind? Let's connect and build something secure together"
    >
      <div className="bg-card border border-matrix/20 rounded-lg p-6 max-w-2xl">
        <p className="text-cyber text-sm mb-5">~/contact_info.sh</p>
        <div className="space-y-4">
          {ITEMS.map((it) => (
            <a key={it.label} href={it.href} className="flex items-center gap-4 group">
              <span className="w-9 h-9 rounded border border-matrix/20 bg-matrix/5 flex items-center justify-center text-sm text-matrix">{it.icon}</span>
              <span>
                <span className="block text-muted text-[10px] uppercase tracking-wide">{it.label}</span>
                <span className="block text-body text-sm group-hover:text-matrix transition-colors">{it.value}</span>
              </span>
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted border-t border-matrix/20 pt-4">
          <span className="text-matrix">Secure Communication:</span> PGP key available on request.
        </p>
      </div>
    </Section>
  );
}
