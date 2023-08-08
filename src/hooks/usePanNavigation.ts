import { useEffect, useRef, useCallback } from "react";
import { useNavigationStore } from "../store/navigationStore";
import updateTransform from "../utils/updateTransform";

const setCursor = (cursor: string) => {
  const targetId = "app-container";
  const target = document.getElementById(targetId);
  if (!target) return;

  target.style.cursor = cursor;
};

const usePanPagination = () => {
  const isHoldingLeftKey = useRef<boolean>(false);
  const isHoldingSpace = useRef<boolean>(false);

  const onMouseDown = useCallback(() => {
    if (!isHoldingSpace.current) return;
    isHoldingLeftKey.current = true;
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isHoldingLeftKey.current) return;
    setCursor("grabbing");
    const curPosition = useNavigationStore.getState().transform;
    const newPosition = {
      x: curPosition.x + e.movementX,
      y: curPosition.y + e.movementY,
    };
    updateTransform(newPosition);
  }, []);

  const onMouseUp = useCallback(() => {
    if (!isHoldingLeftKey.current) return;
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

  useEffect(() => {
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePanPagination;
