import NewTabIcon from "../../../assets/icons/UI/NewTabIcon";
import useTheme from "../../../hooks/useTheme";
import { useState } from "react";

interface INewTab {
  fontSize?: number;
  href: string;
  children: React.ReactNode;
}

const NewTab: React.FC<INewTab> = (props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { href, fontSize = 16, children } = props;
  const { theme } = useTheme();

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <a
      href={href}
      className="hover:text-blue underline transition-colors"
      style={{ fontSize }}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <span className="mx-4 inline-block translate-y-2">
        <NewTabIcon
          fill={isHovering ? theme.colorPrimary : theme.colorTextSecondary}
        />
      </span>
    </a>
  );
};

export default NewTab;
