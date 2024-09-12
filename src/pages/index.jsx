import {CoverParticles} from '../components/particles'
import About from '../components/section/About';
import Skills from "../components/section/Skills";
import Projects from '../components/section/Projects';  
import Journy from '../components/section/Journy';
import Contact from "../components/section/Contact";

export default function Portfolio() {
  return (
    <main className="relative">
      <CoverParticles /> {/* Partículas de fondo */}
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <About />
        <Skills />
        <Projects />
        <Journy />
        <Contact />
      </div>
    </main>
  );
}
