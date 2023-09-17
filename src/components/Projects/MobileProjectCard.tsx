import { FC, lazy } from "react";
import { IProject } from "./Projects.static";
import useTheme from "../../hooks/useTheme";
import ProjectCardInfo from "./ProjectCardInfo";
import SkillTag from "../Skills/SkillTag";
import AnimateText from "../template/AnimateText";
import FadeIn from "../template/FadeIn";
import Image from "../UI/Image";
import LoadingSpinner from "../UI/Loading/LoadingSpinner";
import LoadingFallback from "../../sections/Adventure/LoadingFallback";

const ReactPlayer = lazy(() => import("react-player"));

const MobileProjectCard: FC<IProject> = (props) => {
  const { tag, title, tldr, role, techStack, highlights, video, mainImage } =
    props;
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
        <AnimateText charDelay={10} interval={30}>
          {title}
        </AnimateText>
      </h3>
      <div className="my-4">
        <FadeIn>
          <div className="w-full aspect-video">
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
        </FadeIn>
        <FadeIn>
          <div className="flex w-full gap-2 mt-2">
            {highlights.map(({ title, image }) => (
              <div key={title} className="flex-1 aspect-video">
                <Image src={image.src} tinySrc={image.lazySrc} />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <FadeIn>
          <ProjectCardInfo title="TL;DR" content={tldr} />
        </FadeIn>
        <FadeIn>
          <ProjectCardInfo
            title="Higlight"
            content={
              <ul className="list-disc ml-4">
                {highlights.map(({ title, summary }) => (
                  <li key={title}>{summary}</li>
                ))}
              </ul>
            }
          />
        </FadeIn>
        <FadeIn>
          <ProjectCardInfo title="Role" content={role.join(", ")} />
        </FadeIn>
        <FadeIn>
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
        </FadeIn>
      </div>
    </div>
  );
};

export default MobileProjectCard;
