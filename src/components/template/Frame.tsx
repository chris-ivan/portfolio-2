import { IFrame } from "../../interfaces/frame";
import { useZoomStore } from "../../store/zoomStore";

interface IFrameProps extends IFrame {
  children: React.ReactNode;
}

const Frame = (props: IFrameProps) => {
  const { children, size, position, title } = props;
  const { transform } = useZoomStore();

  return (
    <div
      style={{
        ...size,
        ...position,
      }}
      className="absolute bg-white"
    >
      {title && (
        <div
          className="absolute bottom-[100%] text-grey"
          style={{
            transform: `scale(${1 / transform.scale})`,
            transformOrigin: "bottom left",
          }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Frame;
