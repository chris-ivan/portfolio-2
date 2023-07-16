import "./App.css";
import Container from "./components/template/Container";
import Frame from "./components/template/Frame";
import usePinchZoom from "./hooks/usePinchZoom";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Interests from "./sections/Interests";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  usePinchZoom();
  return (
    <>
      <Container>
        <Frame>
          <About />
          <Contact />
          <Experiences />
          <Interests />
          <LandingPage />
          <Projects />
          <Skills />
        </Frame>
      </Container>
    </>
  );
}

export default App;
