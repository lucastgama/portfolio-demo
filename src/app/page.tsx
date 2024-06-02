import Info from "./components/jumbotron/info";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { SkillProvider } from "./context/skillContext";

export default function Home() {
  return (
    <>
      <SkillProvider>
          <Info />
          <About />
          <Skills />
          <Projects />
          <Contact />
      </SkillProvider>
    </>
  );
}
