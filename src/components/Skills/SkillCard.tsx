import SkillTag from "./SkillTag";
import { ISkill } from "./Skills.static";
import { FC, lazy } from "react";
import RenderWhenInView from "../template/RenderWhenInView";
import FadeIn from "../template/FadeIn";
import AnimateText from "../template/AnimateText";
import { IS_MOBILE } from "../../utils/device";

const SkillCardPhoto = lazy(() => import("./SkillCardPhoto"));

interface ISkillCard {
  title: string;
  status: string;
  skills: ISkill[];
}

const SkillCard: FC<ISkillCard> = (props) => {
  const { title, status, skills } = props;

  return (
    <div className="flex gap-3 md:block md:max-w-[30%] md:min-w-[18%]">
      <FadeIn>
        <RenderWhenInView
          small
          minHeight={IS_MOBILE ? 0 : undefined}
          height={IS_MOBILE ? 40 : 300}
        >
          <SkillCardPhoto />
        </RenderWhenInView>
      </FadeIn>
      <div>
        <FadeIn>
          <h3 className="md:mt-8">
            <AnimateText charDelay={10} interval={30}>
              {title}
            </AnimateText>
          </h3>
        </FadeIn>
        <FadeIn>
          <h5 className="text-blue mt-1 md:mt-2 mb-2 md:mb-6">{status}</h5>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-wrap gap-[6px] md:gap-2">
            {skills.map((skill) => (
              <SkillTag key={skill.name} {...skill} />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default SkillCard;
