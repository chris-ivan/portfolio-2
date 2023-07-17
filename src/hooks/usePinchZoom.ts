import { useState } from "react";
import { TransformType } from "../interfaces/container";
import { frameSizeType } from "../interfaces/frame";

const initialTransform = {
  x: 0,
  y: 0,
  scale: 1.5,
};

function getClientSize() {
  const width = document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height,
  };
}

export default function usePinchZoom(
  contentRef: React.RefObject<HTMLDivElement> | null,
  minScale: number,
  maxScale: number,
  initialSize: frameSizeType<number>
) {
  const [transform, setTransform] = useState<TransformType>(initialTransform);

  /** Direct update transform */
  const updateTransform = (newTransform: Partial<TransformType>) => {
    setTransform((preState) => ({
      ...preState,
      ...newTransform,
    }));
  };

  /** Scale according to the position of clientX and clientY */
  const dispatchZoomChange = (
    ratio: number,
    clientX?: number,
    clientY?: number
  ) => {
    if (!contentRef?.current) return;

    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
      contentRef.current;

    const { width, height } = initialSize;

    let newRatio = ratio;
    let newScale = transform.scale * ratio;
    if (newScale > maxScale) {
      newRatio = maxScale / transform.scale;
      newScale = maxScale;
    } else if (newScale < minScale) {
      newRatio = minScale / transform.scale;
      newScale = minScale;
    }

    /** Default center point scaling */
    const mergedClientX = clientX ?? innerWidth / 2;
    const mergedClientY = clientY ?? innerHeight / 2;

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
      const { width: clientWidth, height: clientHeight } = getClientSize();
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
    transform,
    updateTransform,
    dispatchZoomChange,
  };
}
