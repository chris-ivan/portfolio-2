import { TransformType } from "../../../interfaces/container";
import { frameCoordinateType, frameSizeType } from "../../../interfaces/frame";
import {
  MOUSE_WHEEL_THRESHOLD,
  SCROLLBAR_HEIGHT,
} from "../../../static/transform";

export const calculateMovement = (
  container: HTMLDivElement,
  content: HTMLElement,
  delta: frameCoordinateType,
  transform: TransformType
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

  const { x: deltaX, y: deltaY } = delta;

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

export const isWheelZooming = (
  event: React.WheelEvent<HTMLDivElement>
): boolean => {
  const { deltaX, deltaY, ctrlKey } = event;
  const isTrackpad = Math.abs(deltaY) < MOUSE_WHEEL_THRESHOLD;
  const isTrackpadZooming = ctrlKey && !deltaX && isTrackpad;
  const isMouseZooming = ctrlKey && !!deltaY;
  return isTrackpadZooming || isMouseZooming;
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
