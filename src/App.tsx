import "./App.css";
import Navigation from "./components/navigation";
import Container from "./components/template/Container/Container";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Interests from "./sections/Interests";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <ThemeProvider>
      <Container>
        <About />
        <Contact />
        <Experiences />
        <Interests />
        <LandingPage />
        <Projects />
        <Skills />
      </Container>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
