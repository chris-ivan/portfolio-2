import useTheme from "../../../hooks/useTheme";
import { AnalyticsEvent } from "../../../interfaces/analytics";
import { IIcon } from "../../../interfaces/icon";
import { trackEvent } from "../../../utils/analytics";

interface IToolbarButton {
  onClick: () => void;
  Icon: (props: IIcon) => JSX.Element;
  isActive: boolean;
  label: string;
  visible?: boolean;
}

const ToolbarButton = (props: IToolbarButton) => {
  const { onClick, Icon, isActive, label, visible = true } = props;
  const { theme } = useTheme();

  const iconColor = isActive ? theme.colorPrimary : theme.colorTextSecondary;
  const tailwindBgClass = isActive
    ? "bg-light-grey dark:bg-black"
    : "bg-transparent";

  const handleClick = () => {
    trackEvent(AnalyticsEvent.KONVA, `clicked ${label} toolbar button`);
    onClick();
  };

  if (!visible) return null;

  return (
    <button
      className={`${tailwindBgClass} hover:bg-light-grey hover:dark:bg-black mx-[2px]`}
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

export default ToolbarButton;
