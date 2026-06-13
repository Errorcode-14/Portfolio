import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import InDevelopment from './components/InDevelopment';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Certifications from './components/Certifications';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Experience />
        <Projects />
        <InDevelopment />
        <Skills />
        <Tools />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
