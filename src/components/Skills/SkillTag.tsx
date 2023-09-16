import { FC } from "react";
import { ISkill } from "./Skills.static";
import useTheme from "../../hooks/useTheme";

const SkillTag: FC<ISkill> = (props) => {
  const { name, icon, darkIcon } = props;
  const { isDarkMode } = useTheme();

  return (
    <div className="flex items-center p-[3px] pl-[6px] md:p-1 md:pl-2 pr-[10px] gap-[4px] md:gap-2 border border-solid border-light-grey dark:border-dark-grey">
      <img
        className="w-3 h-3 md:w-4 md:h-4"
        src={isDarkMode ? darkIcon || icon : icon}
        alt={name}
        loading="lazy"
      />
      <p className="text-xs md:text-sm text-dark-grey dark:text-light-grey">
        {name}
      </p>
    </div>
  );
};

export default SkillTag;
