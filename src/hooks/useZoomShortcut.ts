import { AnalyticsEvent } from "../interfaces/analytics";
import { BASE_SCALE_RATIO, SCALE_STEP } from "../static/transform";
import { trackEvent } from "../utils/analytics";

const isZoomingOut = (pressedKey: string) => {
  return pressedKey === "-" || pressedKey === "_";
};

const isZoomingIn = (pressedKey: string) => {
  return pressedKey === "+" || pressedKey === "=";
};

const isZoomTriggered = (e: KeyboardEvent) => {
  const pressedKey = e.key;
  const isZooming = isZoomingOut(pressedKey) || isZoomingIn(pressedKey);
  // return e.ctrlKey && isZooming;
  return isZooming;
};

interface IUseZoomShortcut {
  onZoom: (value: number) => void;
}

const useZoomShortcut = (props: IUseZoomShortcut) => {
  const { onZoom } = props;

  const onZoomIn = () => {
    trackEvent(AnalyticsEvent.NAVIGATION, "zoom in via shortcut");
    onZoom(BASE_SCALE_RATIO + SCALE_STEP);
  };
  const onZoomOut = () => {
    trackEvent(AnalyticsEvent.NAVIGATION, "zoom out via shortcut");
    onZoom(BASE_SCALE_RATIO / (BASE_SCALE_RATIO + SCALE_STEP));
  };

  const handleZoom = (e: KeyboardEvent) => {
    const pressedKey = e.key;

    if (isZoomingOut(pressedKey)) onZoomOut();
    if (isZoomingIn(pressedKey)) onZoomIn();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (isZoomTriggered(e)) {
      e.preventDefault();
      handleZoom(e);
    }
  };

  return { onKeyDown };
};

export default useZoomShortcut;
