import { FC } from "react";
import { IProject } from "./Projects.static";
import useTheme from "../../hooks/useTheme";
import ProjectCardInfo from "./ProjectCardInfo";
import SkillTag from "../Skills/SkillTag";
import AnimateText from "../template/AnimateText";

const MobileProjectCard: FC<IProject> = (props) => {
  const { tag, title, tldr, role, techStack, highlights } = props;
  const { theme } = useTheme();

  return (
    <div
      style={{
        color: theme.colorText,
      }}
      className="my-8"
    >
      <h5 style={{ color: theme.colorPrimary }}>{tag}</h5>
      <h3 className="my-2">
        <AnimateText interval={30}>{title}</AnimateText>
      </h3>
      <div className="my-4">
        <img className="bg-grey w-full aspect-video" />
        <div className="flex w-full gap-2 mt-2">
          {highlights.map((highlight) => (
            <img
              key={highlight.title}
              className="flex-1 bg-grey aspect-video"
            />
          ))}
        </div>
      </div>
      <ProjectCardInfo title="TL;DR" content={tldr} />
      <ProjectCardInfo
        title="Higlight"
        content={
          <ul className="list-disc ml-4">
            {highlights.map((highlight) => (
              <li key={highlight.title}>{highlight.summary}</li>
            ))}
          </ul>
        }
      />
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
  );
};

export default MobileProjectCard;
