export function checkMobile() {
  const isMobileByUserAgent =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const isMobileByTouch = "ontouchstart" in window;
  const isMobileByPointer = navigator.maxTouchPoints > 0;
  return isMobileByUserAgent && isMobileByTouch && isMobileByPointer;
}

export function checkTouchDevice() {
  return "ontouchstart" in window;
}

export const IS_APPLE = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
