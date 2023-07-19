import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const Skills = () => {
  return (
    <Frame id={FRAME_KEY.SKILLS} {...FRAMES.SKILLS}>
      <h1>Skills</h1>
    </Frame>
  );
};

export default Skills;
