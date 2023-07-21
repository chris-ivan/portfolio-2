import { IFrame } from "../../interfaces/frame";
import { useNavigationStore } from "../../store/navigationStore";

interface IFrameProps extends IFrame {
  children: React.ReactNode;
  id: string;
}

const Frame = (props: IFrameProps) => {
  const { children, size, position, title, id } = props;
  const { transform } = useNavigationStore();

  return (
    <div
      style={{
        ...size,
        ...position,
      }}
      id={id}
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
