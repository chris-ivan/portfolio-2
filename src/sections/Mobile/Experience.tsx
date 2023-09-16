import ExperienceCard from "../../components/Experiences/ExperienceCard";
import { EXPERIENCES } from "../../components/Experiences/Experiences.static";
import NewTab from "../../components/UI/NewTab";
import AnimateText from "../../components/template/AnimateText";
import FadeIn from "../../components/template/FadeIn";

const text1 = "And here's my ";
const text2 = "LinkedIn";
const text3 = " TL;DR.";

const Experience = () => {
  return (
    <div className="my-12">
      <h2 className="inline-block">
        <AnimateText>{text1}</AnimateText>
      </h2>
      &nbsp;
      <h2 className="inline-block">
        <NewTab
          fontSize={24}
          href="https://www.linkedin.com/in/christopher-ivan-gunardi/"
        >
          <AnimateText charDelay={text1.length}>{text2}</AnimateText>
        </NewTab>
      </h2>
      <h2 className="inline-block">
        <AnimateText charDelay={text1.length + text2.length}>
          {text3}
        </AnimateText>
      </h2>
      <div className="mt-8 flex flex-col gap-6">
        {EXPERIENCES.map((experience, idx) => (
          <FadeIn key={idx}>
            <ExperienceCard {...experience} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Experience;
