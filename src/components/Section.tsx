import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  id: string;
  heading: string;
  subtitle?: string;
  tagline?: string;
  children: ReactNode;
}

// Wraps a section with a terminal-style heading and scroll-triggered fade-in.
export default function Section({ id, heading, subtitle, tagline, children }: Props) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-matrix text-sm tracking-widest mb-1">{heading}</p>
        {subtitle && <h2 className="text-2xl md:text-3xl font-bold text-body mb-1">{subtitle}</h2>}
        {tagline && <p className="text-muted text-sm mb-8">{tagline}</p>}
        {!tagline && <div className="mb-8" />}
        {children}
      </motion.div>
    </section>
  );
}
