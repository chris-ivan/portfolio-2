import SkillsSection from "../components/Skills";
import Frame from "../components/template/Frame";
import { FRAME_KEY } from "../interfaces/frame";
import { FRAMES } from "../static/frames";
import { useMemo } from "react";

const Skills = () => {
  const SkillsComponent = useMemo(() => <SkillsSection />, []);

  return (
    <Frame id={FRAME_KEY.SKILLS} {...FRAMES.SKILLS}>
      {SkillsComponent}
    </Frame>
  );
};

export default Skills;
