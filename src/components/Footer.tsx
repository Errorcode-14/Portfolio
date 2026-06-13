export default function Footer() {
  return (
    <footer className="border-t border-matrix/20 py-8 text-center text-sm text-muted">
      <div className="flex gap-5 justify-center mb-3 text-matrix">
        <a href="[YOUR GITHUB]" aria-label="GitHub" className="hover:text-cyber">&lt;/&gt;</a>
        <a href="[YOUR LINKEDIN]" aria-label="LinkedIn" className="hover:text-cyber">in</a>
        <a href="#contact" aria-label="Contact" className="hover:text-cyber">&#9993;</a>
      </div>
      <p>&copy; 2026 - [YOUR NAME] <span className="text-matrix">[PROTECTED]</span></p>
      <a href="#contact" className="text-matrix hover:underline">Contact</a>
    </footer>
  );
}
