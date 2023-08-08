import { IIcon } from "../../../interfaces/icon";

const Heading2Icon = (props?: IIcon) => {
  const { fill, ...res } = props || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill={fill || "#767676"}
      {...res}
    >
      <path d="M13.281 14.5V8.091h3.043V24h-3.043v-6.386H6.023V24H3V8.091h3.023V14.5h7.259zm15.404-1.341c0 5.545-6.702 5.182-7.418 7.682h7.219V24H17.41s-.139-2.386.736-3.977c2.645-4.773 7.477-3.25 7.477-6.795 0-.977-.338-1.977-2.466-1.977-2.148 0-2.386 1.546-2.466 2.636h-3.062C17.708 11.659 18.921 8 23.356 8c3.997 0 5.33 2.977 5.33 5.159z" />
    </svg>
  );
};

export default Heading2Icon;
