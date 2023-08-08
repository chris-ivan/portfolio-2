import { IIcon } from "../../../interfaces/icon";

const PencilIcon = (props?: IIcon) => {
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
        d="M7.242 25.984c-.062.009-.125.016-.187.016a1.06 1.06 0 0 1-.744-.309c-.121-.12-.211-.267-.262-.429s-.062-.334-.032-.502l.922-5.256c.013-.062.041-.119.088-.166L20.273 6.091A.31.31 0 0 1 20.495 6a.31.31 0 0 1 .222.091l5.194 5.197a.31.31 0 0 1 .091.22.31.31 0 0 1-.091.22L12.664 24.975c-.044.047-.103.075-.166.087l-5.256.922zM20.495 9.219L9.161 20.55l-.487 2.781 2.778-.491 11.334-11.331-2.291-2.291z"
        fill={fill || "#767676"}
      />
    </svg>
  );
};

export default PencilIcon;
