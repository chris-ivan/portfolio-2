import useInitialView from "../../../hooks/useInitialView";
import usePinchZoom from "../../../hooks/usePinchZoom";
import useZoomShortcut from "../../../hooks/useZoomShortcut";
import { frameSizeType } from "../../../interfaces/frame";
import {
  BASE_SCALE_RATIO,
  SCALE_STEP,
  WHEEL_MAX_SCALE_RATIO,
} from "../../../static/transform";
import { useNavigationStore } from "../../../store/navigationStore";
import {
  calculateMovement,
  isWheelZooming,
  isShiftKeyScrolling,
} from "./Container.util";
import { useEffect } from "react";

interface IUseContainer {
  contentRef: React.RefObject<HTMLDivElement> | null;
  containerRef: React.RefObject<HTMLDivElement> | null;
  initialSize: frameSizeType<number>;
}

const useContainer = (props: IUseContainer) => {
  const { contentRef, containerRef, initialSize } = props;

  const { transform } = useNavigationStore();
  const { updateTransform, dispatchZoomChange } = usePinchZoom(
    contentRef,
    initialSize
  );

  useInitialView({ containerRef, updateTransform });
  useZoomShortcut({ onZoom: dispatchZoomChange });

  const onZoom = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    // Scale ratio depends on the deltaY size
    const scaleRatio = Math.abs(event.deltaY / 10);
    // Limit the maximum scale ratio
    const mergedScaleRatio = Math.min(scaleRatio, WHEEL_MAX_SCALE_RATIO);
    // Scale the ratio each time
    let ratio = BASE_SCALE_RATIO + mergedScaleRatio * SCALE_STEP;

    if (event.deltaY > 0) {
      ratio = BASE_SCALE_RATIO / ratio;
    }

    dispatchZoomChange(ratio, event.clientX, event.clientY);
  };

  const onMove = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!contentRef?.current || !containerRef?.current) return;

    const newPosition = calculateMovement(
      containerRef.current,
      contentRef.current,
      event,
      transform
    );

    // @ts-ignore
    updateTransform(newPosition);
  };

  const onShiftKeyScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!contentRef?.current || !containerRef?.current) return;

    const newPosition = calculateMovement(
      containerRef.current,
      contentRef.current,
      event,
      transform,
      true
    );

    // @ts-ignore
    updateTransform(newPosition);
  };

  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isWheelZooming(event)) return onZoom(event);
    if (isShiftKeyScrolling(event)) return onShiftKeyScroll(event);
    onMove(event);
  };

  const preventWheel = (event: WheelEvent) => {
    event.preventDefault();
  };

  // const onTouchMove = (event: TouchEvent) => {
  //   const { touches } = event;
  //   const distance = Math.hypot(
  //     touches[0].pageX - touches[1].pageX,
  //     touches[0].pageY - touches[1].pageY
  //   );

  //   setPinchDistance((prev) => {
  //     const ratio = 1 + ((distance - prev) / prev) * 1.5;
  //     const centerX = (touches[0].screenX + touches[1].screenX) / 2;
  //     const centerY = (touches[0].screenY + touches[1].screenY) / 2;
  //     dispatchZoomChange(ratio, centerX, centerY);
  //     return distance;
  //   });
  // };

  useEffect(() => {
    const container = containerRef?.current;
    const options = { passive: false };

    window.addEventListener("wheel", preventWheel, options);
    document.addEventListener("wheel", preventWheel, options);
    container?.addEventListener("wheel", preventWheel, options);

    return () => {
      window.removeEventListener("wheel", preventWheel);
      document.removeEventListener("wheel", preventWheel);
      container?.removeEventListener("wheel", preventWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { transform, onWheel };
};

export default useContainer;
