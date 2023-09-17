import useTheme from "../../hooks/useTheme";
import { AnalyticsEvent } from "../../interfaces/analytics";
import { IIcon } from "../../interfaces/icon";
import { trackEvent } from "../../utils/analytics";

interface IEditorButton {
  onClick: (() => void) | (() => Promise<void>);
  Icon: (props: IIcon) => JSX.Element;
  label: string;
}

const EditorButton = (props: IEditorButton) => {
  const { onClick, Icon, label } = props;
  const { theme } = useTheme();

  const iconColor = theme.colorTextSecondary;

  const handleClick = () => {
    void onClick();
    trackEvent(AnalyticsEvent.INTERACTION, `click ${label} editor button`);
  };

  return (
    <button
      className={` hover:bg-light-grey hover:dark:bg-black mx-[2px]`}
      onClick={handleClick}
      title={label}
      aria-label={label}
    >
      <div className="scale-75 text-red">
        <Icon fill={iconColor} />
      </div>
    </button>
  );
};

export default EditorButton;
