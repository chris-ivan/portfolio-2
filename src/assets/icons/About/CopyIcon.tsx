import { IIcon } from "../../../interfaces/icon";

const DownloadIcon = (props?: IIcon) => {
  const { fill, ...res } = props || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      {...res}
    >
      <g clip-path="url(#A)">
        <path
          d="M24.571 4H10.214c-.118 0-.214.096-.214.214v1.5c0 .118.096.214.214.214h13.286v18.429c0 .118.096.214.214.214h1.5c.118 0 .214-.096.214-.214v-19.5c0-.474-.383-.857-.857-.857zm-3.429 3.429H7.428c-.474 0-.857.383-.857.857v14.215c0 .228.091.445.252.605l4.642 4.642c.059.059.126.107.198.147v.051h.112a.84.84 0 0 0 .295.054h9.072c.474 0 .857-.383.857-.857V8.286c0-.474-.383-.857-.857-.857zM11.66 25.22l-2.306-2.309h2.306v2.309zm8.411.852h-6.696v-3.803a1.07 1.07 0 0 0-1.072-1.072H8.499V9.357h11.571v16.714z"
          fill={fill || "#767676"}
        />
      </g>
      <defs>
        <clipPath id="A">
          <path fill="#fff" transform="translate(4 4)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DownloadIcon;
