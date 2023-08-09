import LandingPageSection from "../components/LandingPage";
import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const LandingPage = () => {
  return (
    <Frame id={FRAME_KEY.LANDING} {...FRAMES.LANDING}>
      <LandingPageSection />
      <h1>Bambang</h1>
      <h2>Bambang</h2>
      <h3>Bambang</h3>
      <h4>Bambang</h4>
      <h5>Bambang</h5>
      <p>Bambang</p>
    </Frame>
  );
};

export default LandingPage;
