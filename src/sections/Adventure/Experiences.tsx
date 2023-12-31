import { useMemo, lazy } from "react";
import Frame from "../../components/template/Frame";
import { FRAME_KEY } from "../../interfaces/frame";
import { FRAMES } from "../../static/frames";

const ExperiencesSection = lazy(() => import("../../components/Experiences"));

const Experiences = () => {
  const ExperiencesContent = useMemo(() => <ExperiencesSection />, []);
  return (
    <Frame id={FRAME_KEY.EXPERIENCES} {...FRAMES.EXPERIENCES}>
      {ExperiencesContent}
    </Frame>
  );
};

export default Experiences;
