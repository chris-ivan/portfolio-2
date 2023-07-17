import { useEffect } from "react";
import { BASE_SCALE_RATIO, SCALE_STEP } from "../static/transform";

const isZoomingOut = (pressedKey: string) => {
  return pressedKey === "-" || pressedKey === "_";
};

const isZoomingIn = (pressedKey: string) => {
  return pressedKey === "+" || pressedKey === "=";
};

const isZoomTriggered = (e: KeyboardEvent) => {
  const pressedKey = e.key;
  const isZooming = isZoomingOut(pressedKey) || isZoomingIn(pressedKey);
  return e.ctrlKey && isZooming;
};

interface IUseZoomShortcut {
  onZoom: (value: number) => void;
}

const useZoomShortcut = (props: IUseZoomShortcut) => {
  const { onZoom } = props;

  const onZoomIn = () => onZoom(BASE_SCALE_RATIO + SCALE_STEP);
  const onZoomOut = () =>
    onZoom(BASE_SCALE_RATIO / (BASE_SCALE_RATIO + SCALE_STEP));

  const handleZoom = (e: KeyboardEvent) => {
    const pressedKey = e.key;

    if (isZoomingOut(pressedKey)) onZoomOut();
    if (isZoomingIn(pressedKey)) onZoomIn();
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (isZoomTriggered(e)) {
      e.preventDefault();
      handleZoom(e);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useZoomShortcut;
