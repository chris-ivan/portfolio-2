import { FC } from "react";

interface INormalLayoutContainer {
  children: React.ReactNode;
  maxWidth?: string | number;
}

const NormalLayoutContainer: FC<INormalLayoutContainer> = (props) => {
  const { children, maxWidth = 1600 } = props;
  return (
    <div className="mx-auto" style={{ maxWidth }}>
      {children}
    </div>
  );
};

export default NormalLayoutContainer;
