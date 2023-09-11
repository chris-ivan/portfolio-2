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
        border ? "border border-solid border-grey dark:border-dark-grey" : ""
      } mx-auto`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
};

export default NormalLayoutContainer;
