import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const Projects = () => {
  return (
    <Frame id={FRAME_KEY.PROJECTS} {...FRAMES.PROJECTS}>
      <h1>Projects</h1>
    </Frame>
  );
};

export default Projects;
