import { ReactNode, FC } from "react";

interface IMobileContainer {
  children: ReactNode;
}

const MobileContainer: FC<IMobileContainer> = (props) => {
  const { children } = props;

  return <div className="px-[5vw]">{children}</div>;
};

export default MobileContainer;
