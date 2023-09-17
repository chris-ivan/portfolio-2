import { ReactNode, FC } from "react";
import useTheme from "../../hooks/useTheme";

interface IProjectCardInfo {
  title: string;
  content: ReactNode;
}

const ProjectCardInfo: FC<IProjectCardInfo> = (props) => {
  const { title, content } = props;
  const { theme } = useTheme();

  return (
    <div className="flex">
      <p
        className="min-w-[88px] uppercase"
        style={{ color: theme.colorTextSecondary }}
      >
        {title}
      </p>
      <div>{content}</div>
    </div>
  );
};

export default ProjectCardInfo;
