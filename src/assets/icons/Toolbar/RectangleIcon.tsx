import { IIcon } from "../../../interfaces/icon";

const RectangleIcon = (props?: IIcon) => {
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
        fillRule="evenodd"
        d="M23.2 8.8H8.8V23.2H23.2V8.8ZM6 6V26H26V6H6Z"
        fill={fill || "#767676"}
      />
    </svg>
  );
};

export default RectangleIcon;
