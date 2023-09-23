import AdventureNavigation from "../components/navigation/AdventureNavigation";
import Container from "../components/template/Container/Container";
import { FrameProvider } from "../context/FrameContext";
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
    <FrameProvider>
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
      <AdventureNavigation />
    </FrameProvider>
  );
};

export default AdventureLayout;
