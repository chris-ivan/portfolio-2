import { FC } from "react";
import { IProject } from "./Projects.static";
import useTheme from "../../hooks/useTheme";
import SkillTag from "../Skills/SkillTag";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectHighlightCard from "./ProjectHighlightCard";

const ProjectCard: FC<IProject> = (props) => {
  const { tag, title, tldr, role, techStack, highlights } = props;
  const { theme } = useTheme();

  return (
    <div
      style={{ color: theme.colorText }}
      className="flex items-center h-[100vh]"
    >
      <div className="w-[60%] h-full flex-1 flex flex-col py-10 px-[72px] border-t border-solid border-light-grey dark:border-dark-grey">
        <h5 style={{ color: theme.colorPrimary }}>{tag}</h5>
        <h2 className="my-5">{title}</h2>
        <img className="flex-1 bg-grey my-8" />
        <ProjectCardInfo title="TL;DR" content={tldr} />
        <ProjectCardInfo title="Role" content={role.join(", ")} />
        <ProjectCardInfo
          title="Stack"
          content={
            <div className="flex flex-wrap gap-2">
              {techStack.map((skill) => (
                <SkillTag {...skill} key={skill.name} />
              ))}
            </div>
          }
        />
      </div>
      <div className="w-[40%] h-full flex flex-col">
        {highlights.map((highlight) => (
          <ProjectHighlightCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
