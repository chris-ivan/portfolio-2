import useTheme from "../hooks/useTheme";
import LandingPageSection from "../components/LandingPage";
import SkillsSection from "../components/Skills";
import ExperiencesSection from "../components/Experiences";
import ProjectSection from "../components/Projects";
import AboutSection from "../components/About";
import ContactSection from "../components/Contact";
import NormalLayoutContainer from "../components/template/NormalLayoutContainer";
import NoiseBG from "../assets/images/Noise.png";
import ScrollingGallery from "../components/ScrollingGallery";
import Flashlight from "../components/UI/Flashlight";
import { COLOR } from "../interfaces/theme";

const NormalLayout = () => {
  const { theme } = useTheme();

  return (
    <div
      className="normal-layout-container"
      style={{
        backgroundColor: theme.colorBgBase,
      }}
    >
      <LandingPageSection />
      <NormalLayoutContainer border>
        <Flashlight color={COLOR.BLUE}>
          <div className="border border-solid border-light-grey dark:border-dark-grey" />
          <SkillsSection />
          <NormalLayoutContainer maxWidth="1000px" border>
            <ExperiencesSection />
          </NormalLayoutContainer>
          <ProjectSection />
          <NormalLayoutContainer maxWidth="1000px">
            <AboutSection />
          </NormalLayoutContainer>
          <ScrollingGallery />
          <NormalLayoutContainer maxWidth="1000px">
            <ContactSection />
          </NormalLayoutContainer>
        </Flashlight>
      </NormalLayoutContainer>
      <img
        src={NoiseBG}
        className="fixed top-0 left-0 right-0 bottom-0 opacity-60 pointer-events-none touch-none h-screen w-screen object-cover z-[300]"
        alt=""
      />
    </div>
  );
};

export default NormalLayout;
