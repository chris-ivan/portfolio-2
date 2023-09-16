import SkillCard from "../../components/Skills/SkillCard";
import { SKILLS } from "../../components/Skills/Skills.static";
import AnimateText from "../../components/template/AnimateText";
import FadeIn from "../../components/template/FadeIn";
import useTheme from "../../hooks/useTheme";

const Skills = () => {
  const { theme } = useTheme();
  return (
    <div>
      <FadeIn>
        <h2>
          <AnimateText>
            Primarily a frontend developer, but I’m an entire IT department.
          </AnimateText>
        </h2>
        <p style={{ color: theme.colorTextSecondary }} className="mt-2 mb-6">
          As an IT guy, I am expected to be capable of fixing even your
          grandma’s printer. Hence, I’ve learned how to create several clones of
          myself 🤖.
        </p>
      </FadeIn>
      <div className="flex flex-col w-full gap-6">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
