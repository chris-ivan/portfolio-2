import { useEffect, useRef } from "react";
import { FRAME_KEY, IFrame } from "../../interfaces/frame";
import { useNavigationStore } from "../../store/navigationStore";
import { useIntersectionObserver } from "usehooks-ts";
import useTheme from "../../hooks/useTheme";
import NoiseBG from "../../assets/images/Noise.png";

interface IFrameProps extends IFrame {
  children: React.ReactNode;
  id: FRAME_KEY;
}

const Frame = (props: IFrameProps) => {
  const { children, size, position, title, id } = props;
  const { transform, removeRecommendedFrame, changeFrameVisibility } =
    useNavigationStore();
  const { theme, isDarkMode } = useTheme();

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
        backgroundColor: theme.colorBgBase,
      }}
      id={id}
      ref={ref}
      className="absolute shadow-xl"
    >
      {title && (
        <div
          className="absolute bottom-[100%] text-grey"
          style={{
            transform: `scale(${1 / transform.scale})`,
            transformOrigin: "bottom left",
            color: theme.colorBorder,
          }}
        >
          {title}
        </div>
      )}
      {children}
      <img
        src={NoiseBG}
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none touch-none object-cover w-full h-full"
        style={{ opacity: isDarkMode ? 0.2 : 0.5 }}
        alt=""
      />
    </div>
  );
};

export default Frame;
