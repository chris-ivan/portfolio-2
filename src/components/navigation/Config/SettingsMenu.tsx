import SettingsButton from "./SettingsButton";
import { Transition } from "@headlessui/react";
import { FC } from "react";
import { useNavigationStore } from "../../../store/navigationStore";
import useTheme from "../../../hooks/useTheme";

interface ISettingsMenu {
  showSettings: boolean;
}

const SettingsMenu: FC<ISettingsMenu> = (props) => {
  const { showSettings } = props;

  const { isDarkMode, setTheme } = useTheme();
  const navigation = useNavigationStore();

  const { showMiniMap, showNavigation, toggleMiniMap, toggleNavigation } =
    navigation;

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const themeLabel = isDarkMode ? "Light Mode" : "Dark Mode";
  const navigationLabel = showNavigation
    ? "Disable Navigation"
    : "Enable Navigation";
  const miniMapLabel = showMiniMap ? "Disable Mini Map" : "Enable Mini Map";

  return (
    <Transition
      appear
      enter="transition ease-linear duration-150 opacity transform"
      enterFrom="opacity-0 translate-y-20"
      enterTo="opacity-100 translate-y-8"
      leave="transition ease-linear duration-150 opacity transform"
      leaveFrom="opacity-100 translate-y-8"
      leaveTo="opacity-0 translate-y-20"
      show={showSettings}
    >
      <div className="absolute shadow-md bottom-12 right-0 flex flex-col border border-b-0 border-solid border-grey items-start w-36">
        <SettingsButton label={themeLabel} onClick={toggleTheme} />
        <SettingsButton label={navigationLabel} onClick={toggleNavigation} />
        <SettingsButton label={miniMapLabel} onClick={toggleMiniMap} />
      </div>
    </Transition>
  );
};

export default SettingsMenu;
