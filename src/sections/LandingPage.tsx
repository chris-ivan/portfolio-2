import LandingPageSection from "../components/LandingPage";
import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const LandingPage = () => {
  return (
    <Frame id={FRAME_KEY.LANDING} {...FRAMES.LANDING}>
      <LandingPageSection />
    </Frame>
  );
};

export default LandingPage;
