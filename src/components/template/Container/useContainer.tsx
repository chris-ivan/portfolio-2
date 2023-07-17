import usePinchZoom from "../../../hooks/usePinchZoom";
import useViewport from "../../../hooks/useViewport";
import { frameSizeType } from "../../../interfaces/frame";
import {
  calculateMovement,
  getMinimumZoom,
  isPinchZooming,
  isShiftKeyScrolling,
} from "./Container.util";
import { useEffect } from "react";

interface IUseContainer {
  contentRef: React.RefObject<HTMLDivElement> | null;
  containerRef: React.RefObject<HTMLDivElement> | null;
  initialSize: frameSizeType<number>;
}

const BASE_SCALE_RATIO = 1;
const WHEEL_MAX_SCALE_RATIO = 1;
const MAX_SCALE = 5;
const SCALE_STEP = 0.5;
// to prevent empty space when zooming out
const MIN_SCALE_MULTIPLIER = 1.25;

const useContainer = (props: IUseContainer) => {
  const { contentRef, containerRef, initialSize } = props;
  const viewportSize = useViewport();
  const minScale =
    getMinimumZoom(initialSize, viewportSize) * MIN_SCALE_MULTIPLIER;
  const maxScale = MAX_SCALE;

  const { transform, updateTransform, dispatchZoomChange } = usePinchZoom(
    contentRef,
    minScale,
    maxScale,
    initialSize
  );

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
    if (isPinchZooming(event)) return onZoom(event);
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
