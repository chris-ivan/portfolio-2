import { useMemo, useRef } from "react";
import LandingCanvas from "./Canvas/LandingCanvas";
import { Stage as StageType } from "konva/lib/Stage";
import Toolbar from "./Toolbar";

const LandingPageSection = () => {
  const stageRef = useRef<StageType>(null);

  const canvas = useMemo(() => <LandingCanvas stageRef={stageRef} />, []);

  return (
    <div>
      <Toolbar stageRef={stageRef} />
      {canvas}
    </div>
  );
};

export default LandingPageSection;
