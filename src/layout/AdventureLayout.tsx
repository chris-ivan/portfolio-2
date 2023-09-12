import Container from "../components/template/Container/Container";
import { FrameRefProvider } from "../context/FrameRefContext";
import About from "../sections/Adventure/About";
import Contact from "../sections/Adventure/Contact";
import Experiences from "../sections/Adventure/Experiences";
import Gallery from "../sections/Adventure/Gallery";
import Interests from "../sections/Adventure/Interests";
import LandingPage from "../sections/Adventure/LandingPage";
import Projects from "../sections/Adventure/Projects";
import Skills from "../sections/Adventure/Skills";

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
        <Gallery />
      </Container>
    </FrameRefProvider>
  );
};

export default AdventureLayout;
