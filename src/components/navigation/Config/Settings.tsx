// import SettingsIcon from "../../../assets/icons/UI/Settings";
import { useRef } from "react";
// @ts-ignore
import { ReactComponent as SettingsIcon } from "../../../assets/icons/UI/Settings.svg";
import SettingsButton from "./SettingsButton";
import { useNavigationStore } from "../../../store/navigationStore";
import useTheme from "../../../hooks/useTheme";
import { Transition } from "@headlessui/react";
import useShowSettings from "./useShowSettings";

const Settings = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigation = useNavigationStore();
  const { showMiniMap, showNavigation, toggleMiniMap, toggleNavigation } =
    navigation;
  const { isDarkMode, setTheme } = useTheme();
  const { showSettings, toggleShowSettings } = useShowSettings({ ref });

  const themeLabel = isDarkMode ? "Light Mode" : "Dark Mode";
  const navigationLabel = showNavigation
    ? "Disable Navigation"
    : "Enable Navigation";
  const miniMapLabel = showMiniMap ? "Disable Mini Map" : "Enable Mini Map";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="relative">
      <Transition
        enter="transition ease-linear duration-150 opacity transform"
        enterFrom="opacity-0 translate-y-20"
        enterTo="opacity-100 translate-y-8"
        leave="transition ease-linear duration-150 opacity transform"
        leaveFrom="opacity-100 translate-y-8"
        leaveTo="opacity-0 translate-y-20"
        show={showSettings}
      >
        <div
          ref={ref}
          className="absolute bottom-12 right-0 flex flex-col items-start w-36"
        >
          <SettingsButton label={themeLabel} onClick={toggleTheme} />
          <SettingsButton label={navigationLabel} onClick={toggleNavigation} />
          <SettingsButton label={miniMapLabel} onClick={toggleMiniMap} />
        </div>
      </Transition>

      <div className="cursor-pointer scale-75" onClick={toggleShowSettings}>
        <SettingsIcon className="text-black hover:text-grey dark:text-white dark:hover:text-grey" />
      </div>
    </div>
  );
};

export default Settings;
