import {
  useEffect,
  useRef,
  useContext,
  useMemo,
  RefObject,
  useState,
} from "react";
import { FRAME_KEY, IFrame } from "../../interfaces/frame";
import { useNavigationStore } from "../../store/navigationStore";
import useTheme from "../../hooks/useTheme";
import NoiseBG from "../../assets/images/Noise.png";
import { FrameRefContext } from "../../context/FrameRefContext";
import { useIntersectionObserver } from "usehooks-ts";
import LoadingFallback from "../../sections/LoadingFallback";

interface IFrameProps extends IFrame {
  children: React.ReactNode;
  id: FRAME_KEY;
}

const Frame = (props: IFrameProps) => {
  const { children, size, position, title, id } = props;
  const { transform, removeRecommendedFrame, changeFrameVisibility } =
    useNavigationStore();
  const { theme, isDarkMode } = useTheme();
  const refs = useContext(FrameRefContext);
  const [isShow, setShow] = useState<boolean>(false);

  const frameRef = useMemo(() => {
    return refs[id];
  }, [id, refs]);

  const observer = useIntersectionObserver(
    frameRef as RefObject<HTMLDivElement>,
    {}
  );

  const isInitiated = useRef(false);

  useEffect(() => {
    changeFrameVisibility(id, !!observer?.isIntersecting);

    if (isInitiated.current || !observer?.isIntersecting) return;
    removeRecommendedFrame(id);
    isInitiated.current = true;
    setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observer?.isIntersecting]);

  return (
    <div
      style={{
        ...size,
        ...position,
        backgroundColor: theme.colorBgBase,
        minHeight: size?.height ? undefined : "100vh",
      }}
      id={id}
      ref={frameRef}
      className="absolute shadow-xl min-h-[75vh]"
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
      {isShow && <LoadingFallback>{children}</LoadingFallback>}
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
