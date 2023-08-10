interface IColorButton {
  color: string;
}

const ColorButton = (props: IColorButton) => {
  const { color } = props;

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="h-full w-full border border-solid border-grey dark:border-dark-grey"
    />
  );
};

export default ColorButton;
