import useTheme from "../../hooks/useTheme";
import { IIcon } from "../../interfaces/icon";

interface IEditorButton {
  onClick: () => void;
  Icon: (props: IIcon) => JSX.Element;
  label: string;
}

const EditorButton = (props: IEditorButton) => {
  const { onClick, Icon, label } = props;
  const { theme } = useTheme();

  const iconColor = theme.colorTextSecondary;

  return (
    <button
      className={` hover:bg-light-grey hover:dark:bg-black mx-[2px]`}
      onClick={onClick}
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
