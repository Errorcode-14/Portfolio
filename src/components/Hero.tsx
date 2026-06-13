import { motion } from 'framer-motion';
import MatrixRain from './MatrixRain';
import { useTypewriter } from '../hooks';
import { ROLES } from '../data';

export default function Hero() {
  const typed = useTypewriter(ROLES);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <MatrixRain />
      <motion.div
        className="relative text-center px-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-28 h-28 mx-auto rounded-full border-2 border-matrix flex items-center justify-center text-3xl text-matrix mb-6 shadow-glow">
          {'</>'}
        </div>
        <span className="inline-flex items-center gap-2 text-matrix text-xs border border-matrix/30 rounded px-3 py-1 mb-6">
          <span className="w-2 h-2 rounded-full bg-matrix animate-pulseDot" /> ONLINE
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-body mb-3">[YOUR NAME]</h1>
        <p className="text-xl md:text-2xl text-cyber mb-4">
          {typed}
          <span className="animate-blink text-matrix">_</span>
        </p>
        <p className="text-muted max-w-xl mx-auto mb-8">
          Breaking systems ethically to build unbreakable security solutions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="px-6 py-2 rounded bg-matrix text-bg font-bold hover:shadow-glow transition">Contact Me</a>
          <a href="#projects" className="px-6 py-2 rounded border border-matrix text-matrix hover:bg-matrix/10 transition">View My Work</a>
          <a href="[YOUR RESUME URL]" className="px-6 py-2 rounded border border-cyber text-cyber hover:bg-cyber/10 transition">View Resume</a>
        </div>
      </motion.div>
    </section>
  );
}
