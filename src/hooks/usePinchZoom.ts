import { TransformType } from "../interfaces/container";
import { frameSizeType } from "../interfaces/frame";
import { useZoomStore } from "../store/zoomStore";

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
  minScale: number,
  maxScale: number,
  initialSize: frameSizeType<number>
) {
  /** Direct update transform */
  const updateTransform = (newTransform: Partial<TransformType>) => {
    useZoomStore.getState().setTransform(newTransform);
    useZoomStore.getState().setIsNavigating(true);
    setNavigatingFalseTimeout && clearTimeout(setNavigatingFalseTimeout);

    setNavigatingFalseTimeout = setTimeout(() => {
      useZoomStore.getState().setIsNavigating(false);
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
    const { transform } = useZoomStore.getState();
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
      contentRef.current;

    let newRatio = ratio;
    let newScale = transform.scale * ratio;
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
