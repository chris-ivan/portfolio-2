import useTheme from "../../hooks/useTheme";
import SkillCard from "./SkillCard";
import { SKILLS } from "./Skills.static";

const SkillsSection = () => {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme.colorText }} className="px-[76px] py-[88px]">
      <h2 className="max-w-[45ch]">
        Primarily a <span className="text-blue">frontend developer</span>, but
        as an IT guy, I am expected to be capable of fixing even your grandma’s
        printer. Hence, I’ve learned how to create several clones of myself 🤖.
      </h2>
      <div className="flex mt-[60px] gap-[80px]">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
