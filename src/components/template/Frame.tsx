import { IFrame } from "../../interfaces/frame";

interface IFrameProps extends IFrame {
  children: React.ReactNode;
}

const Frame = (props: IFrameProps) => {
  const { children, size, position } = props;
  return (
    <div
      style={{
        ...size,
        ...position,
      }}
      className="absolute bg-white"
    >
      {children}
    </div>
  );
};

export default Frame;
