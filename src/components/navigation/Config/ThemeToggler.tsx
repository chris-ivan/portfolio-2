import useTheme from "../../../hooks/useTheme";
// @ts-ignore
import { ReactComponent as DarkIcon } from "../../../assets/icons/UI/moon.svg";
// @ts-ignore
import { ReactComponent as LightIcon } from "../../../assets/icons/UI/sun.svg";

const ThemeToggler = () => {
  const { isDarkMode, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      role="button"
      onClick={toggleTheme}
      className="scale-[60%] md:scale-75 cursor-pointer text-black hover:text-dark-grey dark:text-white dark:hover:text-grey"
    >
      {isDarkMode ? <LightIcon /> : <DarkIcon />}
    </div>
  );
};

export default ThemeToggler;
