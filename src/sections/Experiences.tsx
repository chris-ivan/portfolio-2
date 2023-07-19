import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const Experiences = () => {
  return (
    <Frame id={FRAME_KEY.EXPERIENCES} {...FRAMES.EXPERIENCES}>
      <h1>Experiences</h1>
    </Frame>
  );
};

export default Experiences;
