import { useEffect, useState } from "react";
import { frameSizeType } from "../interfaces/frame";
import useViewport from "./useViewport";
import useDebounce from "./useDebounce";

// https://stackoverflow.com/a/66874077
const MOUSE_WHEEL_THRESHOLD = 50;

const isPinchZooming = (event: WheelEvent): boolean => {
  const { deltaX, deltaY, ctrlKey } = event;
  const isTrackpad = Math.abs(deltaY) < MOUSE_WHEEL_THRESHOLD;
  return ctrlKey && !deltaX && isTrackpad;
};

const clamp = (min: number, value: number, max: number): number => {
  return Math.min(Math.max(min, value), max);
};

const getMinimumZoom = (
  initialSize: frameSizeType<number>,
  targetSize: frameSizeType<number>
): number => {
  const { width: initialWidth, height: initialHeight } = initialSize;
  const { width: targetWidth, height: targetHeight } = targetSize;
  const widthZoom = targetWidth / initialWidth;
  const heightZoom = targetHeight / initialHeight;
  return Math.max(widthZoom, heightZoom);
};

const calculateZoom = (
  event: WheelEvent,
  currentZoom: number,
  minZoom = 0.1,
  maxZoom = 2
) => {
  const multiplier = event.deltaY * 0.01 * -1;
  return clamp(minZoom, currentZoom + multiplier, maxZoom);
};

const calculateTransition =
  (event: WheelEvent, zoom: number, initialSize: frameSizeType<number>) =>
  (transition: ITransition): ITransition => {
    // const { pageX, pageY } = event;
    // console.log("ZOOM", zoom);
    // console.log("PAGE", pageX, pageY);
    // console.log("OFFSET", event.offsetX, event.offsetY);
    // console.log("CLIENT", event.clientX, event.clientY);
    // console.log("SCREEN", event.screenX, event.screenY);
    const centerX = event.clientX;
    const centerY = event.clientY;
    const diffRatio = zoom - 1;

    const diffImgX = diffRatio * initialSize.width * 0.5;
    const diffImgY = diffRatio * initialSize.height * 0.5;

    const diffOffsetLeft = diffRatio * (centerX - transition.x);
    const diffOffsetTop = diffRatio * (centerY - transition.y);

    const x = transition.x - (diffOffsetLeft - diffImgX);
    const y = transition.y - (diffOffsetTop - diffImgY);

    console.log(
      centerX,
      centerY,
      diffRatio,
      diffImgX,
      diffImgY,
      diffOffsetLeft,
      diffOffsetTop,
      x,
      y
    );

    return { x, y };
    // return { x: event.clientX, y: event.clientY };
  };

interface IUsePinchZoom {
  containerRef: React.RefObject<HTMLDivElement> | null;
  initialContentSize: frameSizeType<number>;
}

interface ITransition {
  x: number;
  y: number;
}

const initialTransition = { x: 0, y: 0 };

const usePinchZoom = (props: IUsePinchZoom) => {
  const { containerRef, initialContentSize } = props;
  const viewportSize = useViewport();

  // pinch: mobile touch event
  // wheel: trackpad event
  const [isPinching, setIsPinching] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [transition, setTransition] = useState<ITransition>(initialTransition);

  const startPinch = () => {
    setIsPinching(true);
  };

  const handlePinch = (event: TouchEvent) => {
    if (!isPinching) return;
    console.log(event);
  };

  const endPinch = () => {
    setIsPinching(false);
  };

  const handleContainerWheel = (event: WheelEvent) => {
    if (!containerRef?.current) return;
    if (!isPinchZooming(event)) return;
    const minZoom = getMinimumZoom(initialContentSize, viewportSize);
    setZoom((curZoom) => {
      console.log("ZOOM", curZoom);
      setTransition(calculateTransition(event, curZoom, initialContentSize));
      return calculateZoom(event, curZoom, minZoom);
    });
  };

  const debouncedHandleContainerWheel = useDebounce(handleContainerWheel);
  // const debouncedHandleContentWheel = useDebounce(handleContentWheel);

  useEffect(() => {
    if (!containerRef?.current) return;
    const container = containerRef.current;

    container.addEventListener("touchstart", startPinch);
    container.addEventListener("touchmove", handlePinch);
    container.addEventListener("touchend", endPinch);
    container.addEventListener("wheel", debouncedHandleContainerWheel);

    return () => {
      container.removeEventListener("touchstart", startPinch);
      container.removeEventListener("touchmove", handlePinch);
      container.removeEventListener("touchend", endPinch);
      container.removeEventListener("wheel", debouncedHandleContainerWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const width = initialContentSize.width * zoom;
  const height = initialContentSize.height * zoom;

  return {
    width,
    height,
    scale: zoom,
    transform: `scale(${zoom}) translate(${transition.x}px, ${transition.y}px)`,
    // transform: `scale(${zoom}) translate(-${initialContentSize.width}px -${initialContentSize.height}px)`,
  };
};

export default usePinchZoom;
