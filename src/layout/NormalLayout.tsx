import { lazy } from "react";
import useTheme from "../hooks/useTheme";

const LandingPageSection = lazy(
  () => import("../components/LandingPage/index")
);

const NormalLayout = () => {
  const { theme } = useTheme();

  return (
    <div
      className="relative h-screen"
      style={{
        backgroundColor: theme.colorBgBase,
      }}
    >
      <LandingPageSection />
    </div>
  );
};

export default NormalLayout;
