import { frameCoordinateType, frameSizeType } from "../../../interfaces/frame";

export const PTR_PADDING = 50;
export const PTR_AVG_CHAR_WIDTH = 5.8;
export const PTR_AVG_CHAR_HEIGHT = 12;

interface ICalculatePointerNodePosition {
  targetElem: HTMLElement | null;
  viewportSize: frameSizeType<number>;
  label: string;
}

export const calculatePointerNodePosition = (
  props: ICalculatePointerNodePosition
) => {
  const { targetElem, viewportSize, label } = props;
  const { width: viewportWidth, height: viewportHeight } = viewportSize;

  const position: frameCoordinateType = { x: 0, y: 0 };
  if (!targetElem) return { position, angle: 0 };

  const targetPosition = targetElem.getBoundingClientRect();

  const viewportCenterX = viewportWidth / 2;
  const viewportCenterY = viewportHeight / 2;
  const targetCenterX =
    targetPosition.left + targetPosition.width / 2 - viewportCenterX;
  const targetCenterY =
    targetPosition.top + targetPosition.height / 2 - viewportCenterY;

  const angleRad = Math.atan2(targetCenterY, targetCenterX);
  const angleDeg = (angleRad * 180) / Math.PI;

  const nodeLength = label.length * PTR_AVG_CHAR_WIDTH;
  const allowedWidth = viewportCenterX - PTR_PADDING - nodeLength / 1.7;
  const allowedHeight = viewportCenterY - PTR_PADDING;

  const scale = Math.min(
    allowedWidth / Math.abs(targetCenterX),
    allowedHeight / Math.abs(targetCenterY)
  );

  const vectorWidth = targetCenterX * scale;
  const vectorHeight = targetCenterY * scale;

  position.x = vectorWidth;
  position.y = vectorHeight;

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
  const nodeLength = label.length * PTR_AVG_CHAR_WIDTH;
  const nodeHeight = PTR_AVG_CHAR_HEIGHT + PTR_PADDING;

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
