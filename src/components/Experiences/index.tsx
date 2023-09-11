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

const ExperiencesSection = () => {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme.colorText }} className="pt-[88px]">
      <h2 className="mb-[60px] max-w-[900px] px-[72px]">
        You can find the details on my{" "}
        <NewTab
          fontSize={44}
          href="https://www.linkedin.com/in/christopher-ivan-gunardi/"
        >
          LinkedIn profile
        </NewTab>
        , but here’s a quick summary 📝
      </h2>
      <div className="flex flex-col">
        {EXPERIENCES.map((experience, idx) => (
          <div
            className="px-[72px] py-[40px] border-t border-solid border-light-grey dark:border-dark-grey"
            key={idx}
          >
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
      <AdventureOnly>
        <div className="p-[40px] flex w-full justify-end border-t border-solid border-light-grey dark:border-dark-grey">
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
