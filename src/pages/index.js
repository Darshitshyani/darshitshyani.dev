import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="text-text overflow-auto h-full">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
