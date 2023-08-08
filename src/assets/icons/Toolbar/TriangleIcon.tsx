import { IIcon } from "../../../interfaces/icon";

const TriangleIcon = (props?: IIcon) => {
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
        d="M15.547 6L4 26h23.094L15.547 6zm0 5.6L8.85 23.2h13.395l-6.697-11.6z"
        fill={fill || "#767676"}
      />
    </svg>
  );
};

export default TriangleIcon;
