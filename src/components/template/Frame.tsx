import { useEffect, useRef } from "react";
import { FRAME_KEY, IFrame } from "../../interfaces/frame";
import { useNavigationStore } from "../../store/navigationStore";
import { useIntersectionObserver } from "usehooks-ts";

interface IFrameProps extends IFrame {
  children: React.ReactNode;
  id: FRAME_KEY;
}

const Frame = (props: IFrameProps) => {
  const { children, size, position, title, id } = props;
  const { transform, removeRecommendedFrame, changeFrameVisibility } =
    useNavigationStore();

  const ref = useRef<HTMLDivElement>(null);
  const isInitiated = useRef(false);
  const entry = useIntersectionObserver(ref, {});

  useEffect(() => {
    changeFrameVisibility(id, !!entry?.isIntersecting);

    if (isInitiated.current || !entry?.isIntersecting) return;
    removeRecommendedFrame(id);
    isInitiated.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry?.isIntersecting]);

  return (
    <div
      style={{
        ...size,
        ...position,
      }}
      id={id}
      ref={ref}
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
