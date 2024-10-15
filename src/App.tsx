import "./App.scss";
import MainHeader from "./components/MainHeader";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

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
