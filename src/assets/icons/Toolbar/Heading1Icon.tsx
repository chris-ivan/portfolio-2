import { IIcon } from "../../../interfaces/icon";

const Heading1Icon = (props?: IIcon) => {
  const { fill, ...res } = props || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill={fill || "#767676"}
      {...res}
    >
      <path d="M15.34 14.446V8h3.06v16h-3.06v-6.423h-7.3V24H5V8h3.04v6.446h7.3zm8.132-6.423h3.04V24h-3.04V13.829h-3.98s0 .023 0-2.629c3.88 0 3.98-3.177 3.98-3.177z" />
    </svg>
  );
};

export default Heading1Icon;
