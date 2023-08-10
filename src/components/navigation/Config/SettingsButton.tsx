interface ISettingsButton {
  onClick: () => void;
  label: string;
}

const SettingsButton = (props: ISettingsButton) => {
  const { onClick, label } = props;

  return (
    <button
      className="p-2 w-full border-b border-solid border-grey bg-white hover:bg-light-grey dark:bg-black dark:hover:bg-darker-grey text-black dark:text-white text-sm text-left transition-colors"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SettingsButton;
