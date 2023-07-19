import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const LandingPage = () => {
  return (
    <Frame id={FRAME_KEY.LANDING} {...FRAMES.LANDING}>
      <h1>LandingPage</h1>
    </Frame>
  );
};

export default LandingPage;
