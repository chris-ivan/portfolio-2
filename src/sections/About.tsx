import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const About = () => {
  return (
    <Frame id={FRAME_KEY.ABOUT} {...FRAMES.ABOUT}>
      <h1>About</h1>
    </Frame>
  );
};

export default About;
