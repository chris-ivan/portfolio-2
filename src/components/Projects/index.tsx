import useTheme from "../../hooks/useTheme";
import AnimateText from "../template/AnimateText";
import FadeIn from "../template/FadeIn";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./index.static";

const ProjectSection = () => {
  const { theme } = useTheme();

  return (
    <div className="pt-[100px] pb-10">
      <div className="px-[76px]">
        <FadeIn>
          <h2 style={{ color: theme.colorText }}>
            <AnimateText>
              I mean, I've built tens of projects, but it's not like you'll read
              them all anyway. Here’s some.
            </AnimateText>
          </h2>
        </FadeIn>
        <FadeIn>
          <h5
            style={{ color: theme.colorTextSecondary }}
            className="mt-6 mb-10"
          >
            not including websites I developed during internship/full-time jobs
            for obvious reasons.
          </h5>
        </FadeIn>
      </div>
      <div className="border-b border-solid border-light-grey dark:border-dark-grey">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.tag} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
