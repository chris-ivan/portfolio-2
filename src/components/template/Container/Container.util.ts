import { TransformType } from "../../../interfaces/container";
import { frameSizeType } from "../../../interfaces/frame";

const SCROLLBAR_HEIGHT = 20;
const MOUSE_WHEEL_THRESHOLD = 50;

export const calculateMovement = (
  container: HTMLDivElement,
  content: HTMLElement,
  event: React.WheelEvent<HTMLDivElement>,
  transform: TransformType,
  shiftKeyEnabled?: boolean
) => {
  const containerRect = container.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();

  const allowedMovements = {
    up: containerRect.top - contentRect.top,
    left: containerRect.left - contentRect.left,
    right: contentRect.right - containerRect.right - SCROLLBAR_HEIGHT,
    down: contentRect.bottom - containerRect.bottom - SCROLLBAR_HEIGHT,
  };

  let allowedX = 0;
  let allowedY = 0;

  let { deltaX, deltaY } = event;

  if (shiftKeyEnabled) {
    deltaX = deltaY;
    deltaY = 0;
  }

  //  kiri: deltaX > 0  -> konten ke kanan
  if (deltaX > 0)
    allowedX = Math.max(0, Math.min(deltaX, allowedMovements.right));

  // kanan: deltaX < 0 -> konten ke kiri
  if (deltaX < 0)
    allowedX = Math.min(0, Math.max(-allowedMovements.left, deltaX));

  // atas: deltaY > 0  -> konten ke atas
  if (deltaY > 0)
    allowedY = Math.max(0, Math.min(allowedMovements.down, deltaY));

  //  bawah: deltaY < 0 -> konten ke bawah
  if (deltaY < 0)
    allowedY = Math.min(0, Math.max(-allowedMovements.up, deltaY));

  return {
    x: transform.x - allowedX,
    y: transform.y - allowedY,
  };
};

export const isPinchZooming = (
  event: React.WheelEvent<HTMLDivElement>
): boolean => {
  const { deltaX, deltaY, ctrlKey } = event;
  const isTrackpad = Math.abs(deltaY) < MOUSE_WHEEL_THRESHOLD;
  return ctrlKey && !deltaX && isTrackpad;
};

export const isShiftKeyScrolling = (
  event: React.WheelEvent<HTMLDivElement>
): boolean => {
  const { shiftKey, deltaY } = event;
  return shiftKey && !!deltaY;
};

export const getMinimumZoom = (
  initialSize: frameSizeType<number>,
  targetSize: frameSizeType<number>
): number => {
  const { width: initialWidth, height: initialHeight } = initialSize;
  const { width: targetWidth, height: targetHeight } = targetSize;
  const widthZoom = targetWidth / initialWidth;
  const heightZoom = targetHeight / initialHeight;
  return Math.max(widthZoom, heightZoom);
};
