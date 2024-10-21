import "./App.scss";

import MainHeader from "./components/MainHeader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <MainHeader />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
