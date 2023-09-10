import Container from "../components/template/Container/Container";
import { FrameRefProvider } from "../context/FrameRefContext";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experiences from "../sections/Experiences";
import Interests from "../sections/Interests";
import LandingPage from "../sections/LandingPage";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

const AdventureLayout = () => {
  return (
    <FrameRefProvider>
      <Container>
        <About />
        <Contact />
        <Experiences />
        <Interests />
        <LandingPage />
        <Projects />
        <Skills />
      </Container>
    </FrameRefProvider>
  );
};

export default AdventureLayout;
