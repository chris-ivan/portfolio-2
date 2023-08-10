import { useRef } from "react";
import LandingCanvas from "./Canvas/LandingCanvas";
import { Stage as StageType } from "konva/lib/Stage";
import Toolbar from "./Toolbar";

const LandingPageSection = () => {
  const stageRef = useRef<StageType>(null);

  return (
    <div>
      <Toolbar stageRef={stageRef} />
      <LandingCanvas stageRef={stageRef} />
    </div>
  );
};

export default LandingPageSection;
