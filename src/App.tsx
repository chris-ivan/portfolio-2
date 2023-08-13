import "./App.css";
import Navigation from "./components/navigation";
import Container from "./components/template/Container/Container";
import { NotificationProvider } from "./context/NotificationContext";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Interests from "./sections/Interests";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
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
      </NotificationProvider>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
