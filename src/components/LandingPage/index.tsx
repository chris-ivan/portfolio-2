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
      <div className="absolute w-[500px] left-[50%] translate-x-[-50%]">
        <ChatForm />
      </div>
    </div>
  );
};

export default LandingPageSection;
