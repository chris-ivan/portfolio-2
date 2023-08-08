import { IIcon } from "../../../interfaces/icon";

const EllipseIcon = (props?: IIcon) => {
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
        d="M8.8 16a7.2 7.2 0 0 0 14.4 0 7.2 7.2 0 0 0-14.4 0zM16 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10S21.523 6 16 6z"
        fill={fill || "#767676"}
      />
    </svg>
  );
};

export default EllipseIcon;
