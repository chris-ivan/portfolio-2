import { useRef } from "react";
import LandingCanvas from "./Canvas/LandingCanvas";
import { Stage as StageType } from "konva/lib/Stage";
import Toolbar from "./Toolbar";

const LandingPageSection = () => {
  const stageRef = useRef<StageType>(null);

  return (
    <>
      <Toolbar stageRef={stageRef} />
      <LandingCanvas stageRef={stageRef} />
    </>
  );
};

export default LandingPageSection;
