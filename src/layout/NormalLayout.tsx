import useTheme from "../hooks/useTheme";
import LandingPageSection from "../components/LandingPage";
import SkillsSection from "../components/Skills";
import ExperiencesSection from "../components/Experiences";
import ProjectSection from "../components/Projects";
import AboutSection from "../components/About";
import ContactSection from "../components/Contact";
import NormalLayoutContainer from "../components/template/NormalLayoutContainer";

const NormalLayout = () => {
  const { theme } = useTheme();

  return (
    <div
      className="normal-layout-container"
      style={{
        backgroundColor: theme.colorBgBase,
      }}
    >
      <NormalLayoutContainer>
        <LandingPageSection />
        <SkillsSection />
        <NormalLayoutContainer maxWidth="1000px">
          <ExperiencesSection />
        </NormalLayoutContainer>
        <ProjectSection />
        <NormalLayoutContainer maxWidth="1000px">
          <AboutSection />
          <ContactSection />
        </NormalLayoutContainer>
      </NormalLayoutContainer>
    </div>
  );
};

export default NormalLayout;
