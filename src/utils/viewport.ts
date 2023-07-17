export const getViewportHeight = () =>
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

export const getViewportWidth = () =>
  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
