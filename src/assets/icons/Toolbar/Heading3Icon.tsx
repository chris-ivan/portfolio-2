import { IIcon } from "../../../interfaces/icon";

const Heading3Icon = (props?: IIcon) => {
  const { fill, ...res } = props || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill={fill || "#767676"}
      {...res}
    >
      <path d="M13.238 14.54V8.158h3.03V24h-3.03v-6.359H6.01V24H3V8.158h3.01v6.382h7.228zm7.101-.746h-2.95c0-3.395 1.663-5.793 5.624-5.793 4.079 0 5.287 2.625 5.287 4.843 0 2.241-1.465 2.987-1.743 3.055.257.045 2.099.566 2.099 3.53 0 1.494-.772 4.571-5.881 4.571-4.693 0-5.426-3.259-5.426-5.839h2.95c0 2.195 1.168 2.784 2.515 2.784.495 0 3.069.136 3.069-1.742 0-1.675-2.594-1.901-4.357-1.901v-2.603c2.357 0 3.98-.566 3.98-1.833 0-1.584-1.347-1.742-2.693-1.742-1.703 0-2.475.95-2.475 2.67z" />
    </svg>
  );
};

export default Heading3Icon;