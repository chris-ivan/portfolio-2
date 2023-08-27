import InterestsSection from "../components/Interests";
import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";
import { useMemo } from "react";

const Interests = () => {
  const InterestsContent = useMemo(() => <InterestsSection />, []);
  return (
    <Frame id={FRAME_KEY.INTERESTS} {...FRAMES.INTERESTS}>
      {InterestsContent}
    </Frame>
  );
};

export default Interests;
