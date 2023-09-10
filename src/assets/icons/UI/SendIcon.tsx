import { IIcon } from "../../../interfaces/icon";

const SendIcon = (props?: IIcon) => {
  const { fill, ...res } = props || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill={fill || "#0c8ce9"}
      {...res}
    >
      <path d="M11.772 20.995l7.995-5.785c.143-.104.143-.315 0-.419l-7.995-5.785c-.172-.123-.413 0-.413.211v1.524a1.04 1.04 0 0 0 .429.842l4.725 3.416-4.725 3.419c-.27.195-.429.507-.429.842v1.524c0 .211.24.335.413.211zM26.96 2H3.04A1.04 1.04 0 0 0 2 3.04v23.92A1.04 1.04 0 0 0 3.04 28h23.92A1.04 1.04 0 0 0 28 26.96V3.04A1.04 1.04 0 0 0 26.96 2zm-1.3 23.66H4.34V4.34h21.32v21.32z" />
    </svg>
  );
};

export default SendIcon;
