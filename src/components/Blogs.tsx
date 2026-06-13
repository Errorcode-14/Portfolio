import Section from './Section';
import { BLOGS } from '../data';

export default function Blogs() {
  return (
    <Section id="blog" heading="Featured Blogs" subtitle="Latest Writeups">
      <div className="grid gap-5 md:grid-cols-3">
        {BLOGS.map((b, i) => (
          <div key={i} className="bg-card border border-matrix/20 rounded-lg p-5 transition-all hover:border-matrix hover:shadow-glow">
            <div className="flex gap-2 mb-3">
              <span className="text-[10px] text-matrix border border-matrix/30 rounded px-2 py-0.5">Featured</span>
              <span className="text-[10px] text-muted border border-matrix/20 rounded px-2 py-0.5">{b.category}</span>
            </div>
            <h3 className="text-body font-bold mb-2">{b.title}</h3>
            <p className="text-muted text-sm mb-3">{b.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-muted text-xs">{b.date} &middot; {b.read}</span>
              <a href={b.url} className="text-matrix text-xs hover:underline">Read More &rarr;</a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="[YOUR BLOG URL]" className="text-matrix text-sm hover:underline">Explore All Blogs &rarr;</a>
      </div>
    </Section>
  );
}
