import { TransformType } from "../../../interfaces/container";

const SCROLLBAR_HEIGHT = 20;
const MOUSE_WHEEL_THRESHOLD = 50;

export const calculateMovement = (
  container: HTMLDivElement,
  content: HTMLElement,
  event: React.WheelEvent<HTMLDivElement>,
  transform: TransformType
) => {
  const containerRect = container.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();

  const allowedMovements = {
    up: containerRect.top - contentRect.top,
    left: containerRect.left - contentRect.left,
    right: contentRect.right - containerRect.right + SCROLLBAR_HEIGHT,
    down: contentRect.bottom - containerRect.bottom + SCROLLBAR_HEIGHT,
  };

  let allowedX = 0;
  let allowedY = 0;

  const { deltaX, deltaY } = event;

  //  kiri: deltaX > 0  -> gambar ke kanan
  if (deltaX > 0)
    allowedX = Math.max(0, Math.min(deltaX, allowedMovements.right));
  // kanan: deltaX < 0 -> gambar ke kiri
  if (deltaX < 0)
    allowedX = Math.min(0, Math.max(-allowedMovements.left, deltaX));
  // atas: deltaY > 0  -> gambar ke atas
  if (deltaY > 0)
    allowedY = Math.max(0, Math.min(allowedMovements.down, deltaY));
  //  bawah: deltaY < 0 -> gambar ke bawah
  if (deltaY < 0)
    allowedY = Math.min(0, Math.max(-allowedMovements.up, deltaY));

  console.log(deltaX, allowedMovements.right);

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
