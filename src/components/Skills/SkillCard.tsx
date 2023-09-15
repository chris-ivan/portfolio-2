import SkillTag from "./SkillTag";
import { ISkill } from "./Skills.static";
import { FC, lazy } from "react";
import RenderWhenInView from "../template/RenderWhenInView";
import FadeIn from "../template/FadeIn";
import AnimateText from "../template/AnimateText";

const SkillCardPhoto = lazy(() => import("./SkillCardPhoto"));

interface ISkillCard {
  title: string;
  status: string;
  skills: ISkill[];
}

const SkillCard: FC<ISkillCard> = (props) => {
  const { title, status, skills } = props;

  return (
    <div className="max-w-[30%] min-w-[18%]">
      <FadeIn>
        <RenderWhenInView height={300}>
          <SkillCardPhoto />
        </RenderWhenInView>
      </FadeIn>
      <FadeIn>
        <h3 className="mt-8">
          <AnimateText interval={30}>{title}</AnimateText>
        </h3>
      </FadeIn>
      <FadeIn>
        <h5 className="text-blue mt-2 mb-6">{status}</h5>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillTag key={skill.name} {...skill} />
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default SkillCard;
