import { getMinimumZoom } from "../components/template/Container/Container.util";
import { TransformType } from "../interfaces/container";
import { frameSizeType } from "../interfaces/frame";
import { MAX_SCALE, MIN_SCALE_MULTIPLIER } from "../static/transform";
import { useNavigationStore } from "../store/navigationStore";
import useViewport from "./useViewport";
import { useMemo } from "react";

function getClientSize() {
  const width = document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height,
  };
}

let setNavigatingFalseTimeout: number;

export default function usePinchZoom(
  contentRef: React.RefObject<HTMLDivElement> | null,
  initialSize: frameSizeType<number>
) {
  const viewportSize = useViewport();

  const maxScale = MAX_SCALE;
  const minScale = useMemo(
    () => getMinimumZoom(initialSize, viewportSize) * MIN_SCALE_MULTIPLIER,
    [initialSize, viewportSize]
  );

  /** Direct update transform */
  const updateTransform = (newTransform: Partial<TransformType>) => {
    useNavigationStore.getState().setTransform(newTransform);
    useNavigationStore.getState().setIsNavigating(true);
    setNavigatingFalseTimeout && clearTimeout(setNavigatingFalseTimeout);

    setNavigatingFalseTimeout = setTimeout(() => {
      useNavigationStore.getState().setIsNavigating(false);
    }, 2000);
  };

  /** Scale according to the position of clientX and clientY */
  const dispatchZoomChange = (
    ratio: number,
    clientX?: number,
    clientY?: number
  ) => {
    if (!contentRef?.current) return;

    const { width, height } = initialSize;
    const { transform } = useNavigationStore.getState();
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
      contentRef.current;

    let newRatio = ratio;
    let newScale = transform.scale * ratio;

    console.log(minScale, maxScale);

    if (newScale > maxScale) {
      newRatio = maxScale / transform.scale;
      newScale = maxScale;
    } else if (newScale < minScale) {
      newRatio = minScale / transform.scale;
      newScale = minScale;
    }

    const { width: clientWidth, height: clientHeight } = getClientSize();

    /** Default center point scaling */
    const mergedClientX = clientX || clientWidth / 2;
    const mergedClientY = clientY || clientHeight / 2;

    const diffRatio = newRatio - 1;
    /** Deviation calculated from image size */
    const diffImgX = diffRatio * width * 0.5;
    const diffImgY = diffRatio * height * 0.5;
    /** The difference between the click position and the edge of the document */
    const diffOffsetLeft =
      diffRatio * (mergedClientX - transform.x - offsetLeft);
    const diffOffsetTop = diffRatio * (mergedClientY - transform.y - offsetTop);
    /** Final positioning */
    let newX = transform.x - (diffOffsetLeft - diffImgX);
    let newY = transform.y - (diffOffsetTop - diffImgY);

    /**
     * When zooming the image
     * When the image size is smaller than the width and height of the window, the position is initialized
     */
    if (ratio < 1 && newScale === 1) {
      const mergedWidth = offsetWidth * newScale;
      const mergedHeight = offsetHeight * newScale;
      if (mergedWidth <= clientWidth && mergedHeight <= clientHeight) {
        newX = 0;
        newY = 0;
      }
    }

    console.log(transform.scale, ratio, transform.scale * ratio, newScale);

    updateTransform({
      x: newX,
      y: newY,
      scale: newScale,
    });
  };

  return {
    updateTransform,
    dispatchZoomChange,
  };
}
