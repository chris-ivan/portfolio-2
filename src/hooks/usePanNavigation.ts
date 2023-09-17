import { useRef, useCallback } from "react";
import { trackEvent } from "../utils/analytics";
import { AnalyticsEvent } from "../interfaces/analytics";

const setCursor = (cursor: string) => {
  document.body.style.cursor = cursor;
};

interface IUsePanNavigation {
  handleMove2D: (dx: number, dy: number) => void;
}

const usePanNavigation = (props: IUsePanNavigation) => {
  const { handleMove2D } = props;
  const isHoldingLeftKey = useRef<boolean>(false);
  const isHoldingSpace = useRef<boolean>(false);

  const onMouseDown = useCallback(() => {
    if (!isHoldingSpace.current) return;
    isHoldingLeftKey.current = true;
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isHoldingLeftKey.current) return;
      setCursor("grabbing");
      handleMove2D(-e.movementX, -e.movementY);
    },
    [handleMove2D]
  );

  const onMouseUp = useCallback(() => {
    if (!isHoldingLeftKey.current) return;
    trackEvent(AnalyticsEvent.NAVIGATION, "pan");
    isHoldingLeftKey.current = false;
    setCursor("auto");
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (isHoldingSpace.current) return;

    if (e.key === " ") {
      isHoldingSpace.current = true;
      setCursor("grab");
    }
  }, []);

  const onKeyUp = useCallback(() => {
    if (!isHoldingSpace.current) return;

    isHoldingSpace.current = false;
    setCursor("auto");
  }, []);

  return { onKeyDown, onKeyUp, onMouseDown, onMouseMove, onMouseUp };
};

export default usePanNavigation;
