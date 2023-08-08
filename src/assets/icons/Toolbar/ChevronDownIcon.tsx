import { IIcon } from "../../../interfaces/icon";

const ChevronDownIcon = (props?: IIcon) => {
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
        d="M31.215 6h-3.013c-.205 0-.398.1-.518.265L16.268 21.999 4.854 6.265C4.733 6.1 4.54 6 4.335 6H1.322c-.261 0-.414.297-.261.51l14.167 19.531c.514.707 1.567.707 2.077 0L31.472 6.51a.32.32 0 0 0-.257-.51z"
        fill={fill || "#131313"}
      />
    </svg>
  );
};

export default ChevronDownIcon;
