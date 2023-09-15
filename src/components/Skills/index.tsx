import useTheme from "../../hooks/useTheme";
import AnimateText from "../template/AnimateText";
import FadeIn from "../template/FadeIn";
import SkillCard from "./SkillCard";
import { SKILLS } from "./Skills.static";

const text1 = "Primarily a ";
const text2 = "frontend developer";
const text3 =
  ", but as an IT guy, I am expected to be capable of fixing even your grandma’s printer. Hence, I’ve learned how to create several clones of myself 🤖.";

const SkillsSection = () => {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme.colorText }} className="px-[76px] py-[88px]">
      <FadeIn>
        <h2 className="max-w-[45ch]">
          <AnimateText>{text1}</AnimateText>
          <span className="text-blue">
            <AnimateText charDelay={text1.length}>{text2}</AnimateText>
          </span>
          <AnimateText charDelay={text1.length + text2.length}>
            {text3}
          </AnimateText>
        </h2>
      </FadeIn>
      <div className="flex mt-[60px] gap-[80px]">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
