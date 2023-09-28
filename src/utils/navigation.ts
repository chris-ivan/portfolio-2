import { FRAME_KEY } from "../interfaces/frame";
import { useNavigationStore } from "../store/navigationStore";
import updateTransform from "./updateTransform";
import { getViewportHeight, getViewportWidth } from "./viewport";

export const navigateToFrame = (frameId: FRAME_KEY, duration = 500) => {
  const target = document.getElementById(frameId);
  if (!target) return;

  const viewportWidth = getViewportWidth();
  const viewportHeight = getViewportHeight();

  const frameBbox = target.getBoundingClientRect();
  const frameWidth = frameBbox.width;
  const frameHeight = frameBbox.height;
  const frameLeft = frameBbox.left;
  const frameTop = frameBbox.top;

  const frameCenterX =
    frameWidth > viewportWidth ? viewportWidth / 2 : frameWidth / 2;
  const frameCenterY =
    frameHeight > viewportHeight ? viewportHeight / 2 : frameHeight / 2;

  const deltaX = frameLeft + frameCenterX - viewportWidth / 2;
  const deltaY = frameTop + frameCenterY - viewportHeight / 2;

  const { transform } = useNavigationStore.getState();
  const { x, y } = transform;

  const containerDiv = document.getElementById("app-container");

  if (containerDiv) {
    containerDiv.style.transition = `transform ${duration / 1000}s ease-in-out`;
  }

  updateTransform({
    x: x - deltaX,
    y: y - deltaY,
  });

  if (containerDiv) {
    setTimeout(() => {
      containerDiv.style.transition = "";
    }, duration);
  }
};
