import { useEffect, useRef, useMemo, useState } from "react";
import { FRAME_KEY, IFrame } from "../../interfaces/frame";
import useTheme from "../../hooks/useTheme";
import NoiseBG from "../../assets/images/Noise.png";
import { useIntersectionObserver } from "usehooks-ts";
import LoadingFallback from "../../sections/Adventure/LoadingFallback";
import useTransformListener from "../../hooks/useTransformListener";
import { useFrameContext } from "../../hooks/useFrameContext";
import { trackEvent } from "../../utils/analytics";
import { AnalyticsEvent } from "../../interfaces/analytics";

interface IFrameProps extends IFrame {
  children: React.ReactNode;
  id: FRAME_KEY;
}

const Frame = (props: IFrameProps) => {
  const { children, size, position, title, id } = props;
  const transform = useTransformListener();
  const { updateFrame } = useFrameContext();
  const { theme, isDarkMode } = useTheme();
  const [isShow, setShow] = useState<boolean>(false);

  const frameRef = useRef<HTMLDivElement>(null);
  const observer = useIntersectionObserver(frameRef, {});
  const isInitiated = useRef(false);

  useEffect(() => {
    if (observer) {
      updateFrame(id, observer);
      trackEvent(
        AnalyticsEvent.INTERACTION,
        `${observer?.isIntersecting ? "viewing" : "leaving"} ${id}`
      );
    }

    if (isInitiated.current || !observer?.isIntersecting) return;
    isInitiated.current = true;
    setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observer?.isIntersecting]);

  const minHeight = useMemo(() => {
    if (!isShow) return "100vh";
    return size?.height ? undefined : "fit-content";
  }, [size, isShow]);

  return (
    <div
      style={{
        ...size,
        ...position,
        backgroundColor: theme.colorBgBase,
        minHeight,
      }}
      id={id}
      ref={frameRef}
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
      {isShow && <LoadingFallback height="100vh">{children}</LoadingFallback>}
      <img
        src={NoiseBG}
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none touch-none object-cover w-full h-full"
        style={{ opacity: isDarkMode ? 0.2 : 0.5 }}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default Frame;
