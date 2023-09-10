import { lazy } from "react";
import useTheme from "../hooks/useTheme";

const LandingPageSection = lazy(
  () => import("../components/LandingPage/index")
);

const SkillsSection = lazy(() => import("../components/Skills/index"));

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
      <SkillsSection />
    </div>
  );
};

export default NormalLayout;
