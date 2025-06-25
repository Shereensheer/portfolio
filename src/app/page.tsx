import{ About } from "./component/about";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";
import { Hero } from "./component/hero";
import KeyHighlights from "./component/key";
import { Navbar } from "./component/navbar";
import { Projects } from "./component/project";
import TechnicalSkills from "./skill";



export default function Home() {
  return (
    <main className="bg-gradient-to-r  from-black via-gray-900 to-gray-700 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <KeyHighlights/>
      <TechnicalSkills/>
      <Contact />
      <Footer />
      
    </main>
  );
}



