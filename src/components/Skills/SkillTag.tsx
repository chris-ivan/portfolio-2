import { FC } from "react";
import { ISkill } from "./Skills.static";
import useTheme from "../../hooks/useTheme";

const SkillTag: FC<ISkill> = (props) => {
  const { name, icon, darkIcon } = props;
  const { isDarkMode } = useTheme();

  return (
    <div className="flex items-center p-1 pl-2 pr-[10px] gap-2 border border-solid border-light-grey dark:border-dark-grey">
      <img
        className="w-4 h-4"
        src={isDarkMode ? darkIcon || icon : icon}
        alt={name}
        loading="lazy"
      />
      <p className="text-dark-grey dark:text-light-grey">{name}</p>
    </div>
  );
};

export default SkillTag;
