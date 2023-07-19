import "./App.css";
import Navigation from "./components/navigation";
import Container from "./components/template/Container/Container";
import Frame from "./components/template/Frame";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Interests from "./sections/Interests";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Container>
        <Frame id="">
          <About />
          <Contact />
          <Experiences />
          <Interests />
          <LandingPage />
          <Projects />
          <Skills />
        </Frame>
      </Container>
      <Navigation />
    </>
  );
}

export default App;
