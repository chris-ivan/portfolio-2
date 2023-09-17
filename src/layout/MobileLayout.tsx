import ContactSection from "../components/Contact";
import ScrollingGallery from "../components/ScrollingGallery";
import MobileContainer from "../components/template/MobileContainer";
import useTheme from "../hooks/useTheme";
import AIChatBox from "../sections/Mobile/AIChatBox";
import About from "../sections/Mobile/About";
import Experience from "../sections/Mobile/Experience";
import Landing from "../sections/Mobile/Landing";
import Projects from "../sections/Mobile/Projects";
import Skills from "../sections/Mobile/Skills";

const NormalLayout = () => {
  const { theme } = useTheme();

  return (
    <div
      className="normal-layout-container pb-10"
      style={{
        color: theme.colorText,
        backgroundColor: theme.colorBgBase,
      }}
    >
      <Landing />
      <MobileContainer>
        <AIChatBox />
        <Skills />
        <Experience />
      </MobileContainer>
      <Projects />
      <ScrollingGallery />
      <MobileContainer>
        <About />
        <ContactSection />
      </MobileContainer>
    </div>
  );
};

export default NormalLayout;
