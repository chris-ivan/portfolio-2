import { FC } from "react";
import { IProjectHighlight } from "./Projects.static";
import useTheme from "../../hooks/useTheme";

const ProjectHighlightCard: FC<IProjectHighlight> = (props) => {
  const { title, description } = props;
  const { theme } = useTheme();

  return (
    <div className="flex flex-col w-full h-full py-10 pl-8 pr-12 border-t border-l border-solid border-light-grey dark:border-dark-grey">
      <h3 style={{ color: theme.colorTextSecondary }} className="mb-6">
        {title}
      </h3>
      <div className="flex gap-6 h-full">
        <div className="flex-1 h-full bg-grey" />
        <div className="w-[200px]">{description}</div>
      </div>
    </div>
  );
};

export default ProjectHighlightCard;
