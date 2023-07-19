import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const Interests = () => {
  return (
    <Frame id={FRAME_KEY.INTERESTS} {...FRAMES.INTERESTS}>
      <h1>Interests</h1>
    </Frame>
  );
};

export default Interests;
