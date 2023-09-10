import SettingsButton from "./SettingsButton";
import { Transition } from "@headlessui/react";
import { FC, lazy } from "react";
import useTheme from "../../../hooks/useTheme";
import AdventureOnly from "../../template/AdventureOnly";
import { NavigationMode, useGlobalStore } from "../../../store/globalStore";

const AdventureSettingsMenu = lazy(() => import("./AdventureSettingsMenu"));

interface ISettingsMenu {
  showSettings: boolean;
  closeSettings: () => void;
}

const SettingsMenu: FC<ISettingsMenu> = (props) => {
  const { showSettings, closeSettings } = props;
  const { isDarkMode, setTheme } = useTheme();
  const { navigationMode, setNavigationMode } = useGlobalStore();
  const isAdventure = navigationMode === NavigationMode.ADVENTURE;

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    closeSettings();
  };

  const toggleNavigationMode = () => {
    setNavigationMode(
      isAdventure ? NavigationMode.NORMAL : NavigationMode.ADVENTURE
    );
    closeSettings();
  };

  const themeLabel = isDarkMode ? "Light Mode" : "Dark Mode";
  const navigationModeLabel = isAdventure ? "Normal Mode" : "Adventure Mode";

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
        <SettingsButton
          label={navigationModeLabel}
          onClick={toggleNavigationMode}
        />
        <AdventureOnly>
          <AdventureSettingsMenu />
        </AdventureOnly>
      </div>
    </Transition>
  );
};

export default SettingsMenu;
