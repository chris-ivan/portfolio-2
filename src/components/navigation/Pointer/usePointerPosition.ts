import { useMemo, useState } from "react";
import useTransformListener from "../../../hooks/useTransformListener";
import useViewport from "../../../hooks/useViewport";
import { FRAMES } from "../../../static/frames";
import { FRAME_KEY } from "../../../interfaces/frame";
import { viewportToPx } from "../../../utils/viewport";
import { useFrameContext } from "../../../hooks/useFrameContext";
import { useNavigationStore } from "../../../store/navigationStore";
import { useInterval } from "usehooks-ts";
import fastdom from "fastdom";

type IFramesPosition = {
  [key in FRAME_KEY]?: {
    left: number;
    top: number;
  };
};

export interface IPosition {
  x: number;
  y: number;
}

type IFramesCalculatedPosition = {
  [key in FRAME_KEY]?: {
    position: IPosition;
    angle: number;
    pointerPosition: IPosition;
    isActive: boolean;
  };
};

const PADDING = 50;
const AVG_CHAR_WIDTH = 5.8;
const AVG_CHAR_HEIGHT = 12;

const addPadding = (value: number, padding: number) => {
  if (value < 0) return value - padding;
  return value + padding;
};

export const calculatePointerNodeArrowPosition = (
  angle: number,
  label: string
): IPosition => {
  const nodeLength = label.length * AVG_CHAR_WIDTH;
  const nodeHeight = AVG_CHAR_HEIGHT + PADDING;

  const angleRad = (angle * Math.PI) / 180;
  const allowedWidth = nodeLength / 1.5;
  const allowedHeight = nodeHeight / 1.5;

  const arrowWidth = allowedWidth * Math.cos(angleRad);
  const arrowHeight = allowedHeight * Math.sin(angleRad);

  return {
    x: addPadding(arrowWidth, 30),
    y: addPadding(arrowHeight, 5),
  };
};

const usePointerPosition = () => {
  const transform = useTransformListener();
  const { x, y, scale } = transform;
  const { width: viewportWidth, height: viewportHeight } = useViewport();
  const { frames, recommendedFrame } = useFrameContext();
  const { isNavigating } = useNavigationStore();
  const [position, setPosition] = useState<IFramesCalculatedPosition>({});

  const framePositions = useMemo(() => {
    const position: IFramesPosition = {};

    Object.keys(FRAMES).forEach((frameId) => {
      const targetId = frameId as FRAME_KEY;

      position[targetId] = {
        top: viewportToPx((FRAMES[targetId].position?.top || "0vh") as string),
        left: viewportToPx(
          (FRAMES[targetId].position?.left || "0vw") as string
        ),
      };
    });

    return position;
  }, []);

  const getCurrentPosition = () => {
    const multiplier = 4;
    const diffRatio = 1 - scale;
    const diffX = diffRatio * viewportWidth * multiplier;
    const diffY = diffRatio * viewportHeight * multiplier;

    return {
      x: -x - diffX,
      y: -y - diffY,
    };
  };

  const calculatePosition = () => {
    const { x, y } = getCurrentPosition();
    const position: IFramesCalculatedPosition = {};

    Object.keys(framePositions).forEach((frameId) => {
      const targetId = frameId as FRAME_KEY;

      const label = FRAMES[targetId]?.title || "";
      const framePosition = framePositions[targetId];
      const frameSize = frames[targetId];
      if (!framePosition || !frameSize || frameSize?.isVisible) return;

      const { top, left } = framePosition;
      const { width, height } = frameSize;

      const viewportCenterX = viewportWidth / 2;
      const viewportCenterY = viewportHeight / 2;

      const targetCenterX = left * scale - x - viewportCenterX + width / 2;
      const targetCenterY = top * scale - y - viewportCenterY + height / 2;

      const angleRad = Math.atan2(targetCenterY, targetCenterX);
      const angleDeg = (angleRad * 180) / Math.PI;

      const nodeLength = label.length * AVG_CHAR_WIDTH;
      const allowedWidth =
        viewportCenterX - PADDING - nodeLength / 1.5 - 2 * AVG_CHAR_WIDTH;
      const allowedHeight = viewportCenterY - PADDING - AVG_CHAR_HEIGHT;

      const distanceScale = Math.min(
        allowedWidth / Math.abs(targetCenterX),
        allowedHeight / Math.abs(targetCenterY)
      );

      position[targetId] = {
        position: {
          x: targetCenterX * distanceScale,
          y: targetCenterY * distanceScale,
        },
        angle: angleDeg,
        pointerPosition: calculatePointerNodeArrowPosition(angleDeg, label),
        isActive: recommendedFrame === targetId,
      };
    });

    setPosition(position);
  };

  useInterval(
    () =>
      requestAnimationFrame(() => {
        fastdom.measure(calculatePosition);
      }),
    // 30 FPS
    isNavigating ? 1000 / 30 : null
  );

  return position;
};

export default usePointerPosition;
