export const getViewportHeight = () =>
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

export const getViewportWidth = () =>
  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

export const viewportToPx = (size: string): number => {
  if (size.endsWith("px")) {
    return parseFloat(size);
  }

  const viewportWidth = getViewportWidth();
  const viewportHeight = window.innerHeight;

  if (size.endsWith("vh")) {
    return (viewportHeight * parseFloat(size)) / 100;
  } else if (size.endsWith("vw")) {
    return (viewportWidth * parseFloat(size)) / 100;
  } else {
    return 0;
  }
};
