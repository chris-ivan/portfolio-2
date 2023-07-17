import usePinchZoom from "../../../hooks/usePinchZoom";
import useViewport from "../../../hooks/useViewport";
import useZoomShortcut from "../../../hooks/useZoomShortcut";
import { frameSizeType } from "../../../interfaces/frame";
import {
  BASE_SCALE_RATIO,
  MAX_SCALE,
  MIN_SCALE_MULTIPLIER,
  SCALE_STEP,
  WHEEL_MAX_SCALE_RATIO,
} from "../../../static/transform";
import { useZoomStore } from "../../../store/zoomStore";
import {
  calculateMovement,
  getMinimumZoom,
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
  const viewportSize = useViewport();
  const minScale =
    getMinimumZoom(initialSize, viewportSize) * MIN_SCALE_MULTIPLIER;
  const maxScale = MAX_SCALE;

  const { transform } = useZoomStore();
  const { updateTransform, dispatchZoomChange } = usePinchZoom(
    contentRef,
    minScale,
    maxScale,
    initialSize
  );

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

  useEffect(() => {
    window.addEventListener("wheel", preventWheel, { passive: false });
    document.addEventListener("wheel", preventWheel, { passive: false });
    containerRef?.current?.addEventListener("wheel", preventWheel, {
      passive: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { transform, onWheel };
};

export default useContainer;
