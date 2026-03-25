import './styles/globals.css';

import Cursor   from './components/Cursor';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import AmbientScene from './components/AmbientScene';

import Hero           from './sections/Hero';
import About          from './sections/About';
import Education      from './sections/Education';
import Skills         from './sections/Skills';
import Projects       from './sections/Projects';
import Experience     from './sections/Experience';
import Hackathons     from './sections/Hackathons';
import Achievements   from './sections/Achievements';
import Certificates   from './sections/Certificates';
import Research       from './sections/Research';
import Patents        from './sections/Patents';
import Contact        from './sections/Contact';

import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <AmbientScene />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
