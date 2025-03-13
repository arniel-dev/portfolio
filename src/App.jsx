import { useEffect } from "react";
import Header from "./components/Header/Header";
import TagCloud from "./components/TagCloud/TagCloud";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import "./styles/main.scss";

const App = () => {
  useEffect(() => {
    document.title = "Arniel Canillo - Frontend Developer";
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="section hero">
          <div className="hero__content">
            <h1 className="hero__title">Arniel Canillo</h1>
            <h2 className="hero__subtitle">Frontend Developer</h2>
            <TagCloud />
          </div>
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
