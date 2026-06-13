import { ReactNode } from 'react';

// Reusable card with the green hover glow.
export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-card border border-matrix/20 rounded-lg p-6 transition-all hover:border-matrix hover:shadow-glow ${className}`}
    >
      {children}
    </div>
  );
}
