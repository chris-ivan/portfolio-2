import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";
import { useMemo, lazy } from "react";

const InterestsSection = lazy(() => import("../components/Interests"));

const Interests = () => {
  const InterestsContent = useMemo(() => <InterestsSection />, []);
  return (
    <Frame id={FRAME_KEY.INTERESTS} {...FRAMES.INTERESTS}>
      {InterestsContent}
    </Frame>
  );
};

export default Interests;
