import About from "./component/About";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import ProjectList from "./component/ProjectsList";
import Skills from "./component/Skills";
import Snowfall from "./component/Snowfall";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#00110b] text-gray-100 transition-colors">
      <Snowfall />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Education />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}
