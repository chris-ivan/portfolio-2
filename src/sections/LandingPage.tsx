import Frame from "../components/template/Frame";
import { FRAMES } from "../static/frames";

const LandingPage = () => {
  return (
    <Frame {...FRAMES.LANDING}>
      <h1>LandingPage</h1>
    </Frame>
  );
};

export default LandingPage;
