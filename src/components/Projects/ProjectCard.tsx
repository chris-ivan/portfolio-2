import { FC, lazy } from "react";
import { IProject } from "./Projects.static";
import useTheme from "../../hooks/useTheme";
import SkillTag from "../Skills/SkillTag";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectHighlightCard from "./ProjectHighlightCard";
import useGlobalStore from "../../hooks/useGlobalStore";
import AnimateText from "../template/AnimateText";
import LoadingSpinner from "../UI/Loading/LoadingSpinner";
import LoadingFallback from "../../sections/Adventure/LoadingFallback";

const ReactPlayer = lazy(() => import("react-player"));

const ProjectCard: FC<IProject> = (props) => {
  const { tag, title, tldr, role, techStack, highlights, video, mainImage } =
    props;
  const { theme } = useTheme();
  const { isAdventure } = useGlobalStore();

  return (
    <div style={{ color: theme.colorText }} className="flex min-h-fit">
      <div
        style={{
          maxHeight: isAdventure ? undefined : "100vh",
          padding: isAdventure ? "40px 72px" : "32px 72px",
        }}
        className="sticky top-[56px] w-[60%] flex flex-col overflow-hidden border-t border-solid border-light-grey dark:border-dark-grey"
      >
        <h5 style={{ color: theme.colorPrimary }}>{tag}</h5>
        <h2
          style={{
            margin: isAdventure ? "20px 0" : "8px 0",
          }}
        >
          <AnimateText interval={30}>{title}</AnimateText>
        </h2>
        <div
          style={{
            margin: isAdventure ? "8px 0 16px" : "8px 0",
          }}
          className="flex items-center justify-center flex-[7] aspect-video h-0 bg-light-grey dark:bg-black max-h-[600px] border border-solid border-light-grey dark:border-dark-grey overflow-hidden"
        >
          {video ? (
            <LoadingFallback height="100%">
              <ReactPlayer
                playing
                url={video}
                loop
                width="100%"
                height="100%"
                fallback={<LoadingSpinner />}
              />
            </LoadingFallback>
          ) : (
            <img src={mainImage.src} alt={mainImage.alt} />
          )}
        </div>
        <div className="flex flex-[4] flex-col mt-3 gap-3">
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
