import Frame from "../../components/template/Frame";
import { FRAME_KEY } from "../../interfaces/frame";
import { FRAMES } from "../../static/frames";
import { lazy } from "react";

const LandingPageSection = lazy(
  () => import("../../components/LandingPage/index")
);

const LandingPage = () => {
  return (
    <Frame id={FRAME_KEY.LANDING} {...FRAMES.LANDING}>
      <LandingPageSection />
    </Frame>
  );
};

export default LandingPage;
