import { IIcon } from "../../../interfaces/icon";

const CursorIcon = (props?: IIcon) => {
  const { fill, ...res } = props || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      {...res}
    >
      <path
        fill-rule="evenodd"
        d="M12.359 26L7 6l18.566 10.719-6.596 1.767 3.658 4.721-2.923 2.265-3.962-5.113L12.359 26z"
        fill={fill || "#767676"}
      />
    </svg>
  );
};

export default CursorIcon;
