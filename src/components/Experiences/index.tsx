import useTheme from "../../hooks/useTheme";
import ExperienceCard from "./ExperienceCard";
import { EXPERIENCES } from "./Experiences.static";
import NewTab from "../UI/NewTab";
import Button from "../UI/Button";
// @ts-ignore
import { ReactComponent as RightChevronIcon } from "../../assets/icons/UI/ChevronRight.svg";
import { navigateToFrame } from "../../utils/navigation";
import { FRAME_KEY } from "../../interfaces/frame";
import AdventureOnly from "../template/AdventureOnly";
import FadeIn from "../template/FadeIn";
import useGlobalStore from "../../hooks/useGlobalStore";
import AnimateText from "../template/AnimateText";

const text1 = "You can find the details on my ";
const text2 = "LinkedIn profile";
const text3 = ", but here’s a quick summary 📝";

const ExperiencesSection = () => {
  const { theme } = useTheme();
  const { isAdventure } = useGlobalStore();

  return (
    <div
      className="relative"
      style={{
        color: theme.colorText,
        margin: isAdventure ? "-2px" : undefined,
      }}
    >
      <FadeIn>
        <div
          style={{
            backgroundColor: theme.colorBgBase,
          }}
          className="experience-section pt-[88px] pb-[60px] px-[72px] border border-solid border-light-grey dark:border-dark-grey"
        >
          <h2 className="max-w-[900px]">
            <AnimateText>{text1}</AnimateText>
            <NewTab
              fontSize={44}
              href="https://www.linkedin.com/in/christopher-ivan-gunardi/"
            >
              <AnimateText charDelay={text1.length}>{text2}</AnimateText>
            </NewTab>
            <AnimateText charDelay={text1.length + text2.length}>
              {text3}
            </AnimateText>
          </h2>
        </div>
      </FadeIn>
      <div className="flex flex-col">
        {EXPERIENCES.map((experience, idx) => (
          <FadeIn animationClass="experience-section">
            <div
              className="px-[72px] mt-[-1px] py-[40px] border border-solid border-light-grey dark:border-dark-grey"
              key={idx}
              style={{
                backgroundColor: theme.colorBgBase,
              }}
            >
              <ExperienceCard {...experience} />
            </div>
          </FadeIn>
        ))}
      </div>
      <AdventureOnly>
        <div className="p-[40px] flex w-full justify-end">
          <Button onClick={() => navigateToFrame(FRAME_KEY.PROJECTS)}>
            Take a quick glance at my past Projects{" "}
            <span className="inline-block translate-y-[2px]">
              <RightChevronIcon />
            </span>
          </Button>
        </div>
      </AdventureOnly>
    </div>
  );
};

export default ExperiencesSection;
