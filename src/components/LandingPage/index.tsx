import { useMemo, useRef } from "react";
import LandingCanvas from "./Canvas/LandingCanvas";
import { Stage as StageType } from "konva/lib/Stage";
import Toolbar from "./Toolbar";
import ChatForm from "./Chat/ChatForm";

const LandingPageSection = () => {
  const stageRef = useRef<StageType>(null);

  const canvas = useMemo(() => <LandingCanvas stageRef={stageRef} />, []);

  return (
    <div className="relative">
      <Toolbar stageRef={stageRef} />
      {canvas}
      <ChatForm />
    </div>
  );
};

export default LandingPageSection;
