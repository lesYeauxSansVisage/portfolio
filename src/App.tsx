import "./App.scss";
import MainHeader from "./components/MainHeader";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <MainHeader />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
