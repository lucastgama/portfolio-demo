"use client";
import Info from "./components/jumbotron/info";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { SkillProvider } from "./context/skillContext";
import { useEffect, useState } from "react";
import Loading from "./components/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : (
        <SkillProvider> */}
          <Info />
          {/* <About />
          <Skills />
          <Projects />
          <Contact /> */}
        {/* </SkillProvider>
      )} */}
    </>
  );
}
