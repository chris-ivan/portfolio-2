// import SettingsIcon from "../../../assets/icons/UI/Settings";
import { useRef, lazy, Suspense } from "react";
// @ts-ignore
import { ReactComponent as SettingsIcon } from "../../../assets/icons/UI/Settings.svg";
import useShowSettings from "./useShowSettings";

const SettingsMenu = lazy(() => import("./SettingsMenu"));

const Settings = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { showSettings, toggleShowSettings } = useShowSettings({ ref });
  const isClicked = useRef<boolean>(false);

  const handleClick = () => {
    if (!isClicked.current) {
      isClicked.current = true;
    }

    toggleShowSettings();
  };

  return (
    <div ref={ref} className="relative">
      {isClicked.current && (
        <Suspense>
          <SettingsMenu showSettings={showSettings} />
        </Suspense>
      )}
      <div className="cursor-pointer scale-75" onClick={handleClick}>
        <SettingsIcon className="text-black hover:text-grey dark:text-white dark:hover:text-grey" />
      </div>
    </div>
  );
};

export default Settings;
