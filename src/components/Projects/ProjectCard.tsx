import { FC } from "react";
import { IProject } from "./Projects.static";
import useTheme from "../../hooks/useTheme";
import SkillTag from "../Skills/SkillTag";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectHighlightCard from "./ProjectHighlightCard";
import { NavigationMode, useGlobalStore } from "../../store/globalStore";

const ProjectCard: FC<IProject> = (props) => {
  const { tag, title, tldr, role, techStack, highlights } = props;
  const { theme } = useTheme();
  const { navigationMode } = useGlobalStore();
  const isAdventure = navigationMode === NavigationMode.ADVENTURE;

  return (
    <div style={{ color: theme.colorText }} className="flex min-h-fit">
      <div
        style={{
          maxHeight: isAdventure ? undefined : "100vh",
        }}
        className="sticky top-[72px] w-[60%] flex flex-col py-10 px-[72px] overflow-hidden border-t border-solid border-light-grey dark:border-dark-grey"
      >
        <h5 style={{ color: theme.colorPrimary }}>{tag}</h5>
        <h2 className="my-5">{title}</h2>
        <img className="flex-1 bg-grey mt-2 mb-4 aspect-video h-0 max-h-[600px]" />
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
      <div className="w-[40%] flex flex-col">
        {highlights.map((highlight) => (
          <ProjectHighlightCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
