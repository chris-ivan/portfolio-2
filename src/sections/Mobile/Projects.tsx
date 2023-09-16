import MobileProjectCard from "../../components/Projects/MobileProjectCard";
import { PROJECTS } from "../../components/Projects/index.static";
import AnimateText from "../../components/template/AnimateText";
import MobileContainer from "../../components/template/MobileContainer";
import useTheme from "../../hooks/useTheme";

const Projects = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className="bg-light-blue dark:bg-darker-grey py-4">
        <MobileContainer>
          <h2>
            <AnimateText>The highlights of my freelance career.</AnimateText>
          </h2>
          <p style={{ color: theme.colorTextSecondary }} className="mt-2">
            I mean, I've built tens of projects, but it's not like you'll read
            them all anyway. Here’s some.
          </p>
        </MobileContainer>
      </div>
      <MobileContainer>
        {PROJECTS.map((project) => (
          <MobileProjectCard key={project.title} {...project} />
        ))}
      </MobileContainer>
    </div>
  );
};

export default Projects;
