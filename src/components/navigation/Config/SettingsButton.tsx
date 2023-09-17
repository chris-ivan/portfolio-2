import { useCallback } from "react";
import { trackEvent } from "../../../utils/analytics";
import { AnalyticsEvent } from "../../../interfaces/analytics";

interface ISettingsButton {
  onClick: () => void;
  label: string;
}

const SettingsButton = (props: ISettingsButton) => {
  const { onClick, label } = props;

  const handleClick = useCallback(() => {
    onClick();
    trackEvent(AnalyticsEvent.NAVIGATION, `click ${label} settings button`);
  }, [onClick, label]);

  return (
    <button
      className="p-2 w-full border-b border-solid border-grey bg-white hover:bg-light-grey dark:bg-black dark:hover:bg-darker-grey text-black dark:text-white text-sm text-left transition-colors"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default SettingsButton;
