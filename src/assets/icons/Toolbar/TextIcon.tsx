import { IIcon } from "../../../interfaces/icon";

const TextIcon = (props?: IIcon) => {
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
        d="M7 7v.982 2.592 2.55h3.908v-2.55h2.87v10.498h-1.963v3.908h1.963V25h3.903v-.019h1.989v-3.908h-1.989V10.574h2.877v2.55h3.908v-2.55h.019V7H7z"
        fill={fill || "#767676"}
      />
    </svg>
  );
};

export default TextIcon;
