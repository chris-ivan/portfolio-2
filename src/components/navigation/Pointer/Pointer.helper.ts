import {
  FRAME_KEY,
  frameCoordinateType,
  framePositionType,
  frameSizeType,
} from "../../../interfaces/frame";

const PADDING = 40;
const AVG_CHAR_WIDTH = 8;
const AVG_CHAR_HEIGHT = 24;

interface ICalculatePointerNodePosition {
  targetId: FRAME_KEY;
  viewportSize: frameSizeType<number>;
}

export const calculatePointerNodePosition = (
  props: ICalculatePointerNodePosition
) => {
  const { targetId, viewportSize } = props;
  const { width: viewportWidth, height: viewportHeight } = viewportSize;

  const position: Partial<framePositionType> = {};

  const target = document.getElementById(targetId);
  if (!target) return { position, angle: 0 };

  const viewportCenterX = viewportWidth / 2;
  const viewportCenterY = viewportHeight / 2;

  const targetPosition = target.getBoundingClientRect();

  const targetCenterX =
    targetPosition.left + targetPosition.width / 2 - viewportCenterX;
  const targetCenterY =
    targetPosition.top + targetPosition.height / 2 - viewportCenterY;

  if (targetId === FRAME_KEY.ABOUT)
    console.log(targetPosition.left, targetPosition.top);

  const angleRad = Math.atan2(targetCenterY, targetCenterX);
  const angleDeg = (angleRad * 180) / Math.PI;

  const allowedWidth = viewportCenterX - PADDING;
  const allowedHeight = viewportCenterY - PADDING;

  const scale = Math.min(
    allowedWidth / Math.abs(targetCenterX),
    allowedHeight / Math.abs(targetCenterY)
  );
  const vectorWidth = Math.abs(targetCenterX) * scale;
  const vectorHeight = Math.abs(targetCenterY) * scale;

  const isLeft = targetCenterX < 0;
  const isTop = targetCenterY < 0;

  const positionKeyX = isLeft ? "left" : "right";
  const positionKeyY = isTop ? "top" : "bottom";

  position[positionKeyX] = viewportCenterX - vectorWidth;
  position[positionKeyY] = viewportCenterY - vectorHeight;

  return { position, angle: angleDeg };
};

interface ICalculatePointerNodeArrowPosition {
  angle: number;
  label: string;
}

const addPadding = (value: number, padding: number) => {
  if (value < 0) return value - padding;
  return value + padding;
};

export const calculatePointerNodeArrowPosition = (
  props: ICalculatePointerNodeArrowPosition
): frameCoordinateType => {
  const { angle, label } = props;
  const nodeLength = label.length * AVG_CHAR_WIDTH + PADDING / 2;
  const nodeHeight = AVG_CHAR_HEIGHT + PADDING;

  const angleRad = (angle * Math.PI) / 180;
  const allowedWidth = nodeLength / 2;
  const allowedHeight = nodeHeight / 2;

  const arrowWidth = allowedWidth * Math.cos(angleRad);
  const arrowHeight = allowedHeight * Math.sin(angleRad);

  return {
    x: addPadding(arrowWidth, 15),
    y: addPadding(arrowHeight, 10),
  };
};
