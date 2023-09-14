import { FC } from "react";

interface INormalLayoutContainer {
  children: React.ReactNode;
  maxWidth?: string | number;
  border?: boolean;
}

const NormalLayoutContainer: FC<INormalLayoutContainer> = (props) => {
  const { children, maxWidth = 1600, border } = props;
  return (
    <div
      className={`${
        border
          ? "outline outline-1 outline-light-grey dark:outline-dark-grey"
          : ""
      } mx-auto`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
};

export default NormalLayoutContainer;
