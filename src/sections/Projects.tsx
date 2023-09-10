import { useMemo, lazy } from "react";
import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";

const ProjectSection = lazy(() => import("../components/Projects"));

const Projects = () => {
  const ProjectsContent = useMemo(() => <ProjectSection />, []);
  return (
    <Frame id={FRAME_KEY.PROJECTS} {...FRAMES.PROJECTS}>
      {ProjectsContent}
    </Frame>
  );
};

export default Projects;
