import { useEffect } from "react";
import usePanNavigation from "./usePanNavigation";
import useArrowNavigation from "./useArrowNavigation";
import useZoomShortcut from "./useZoomShortcut";
import useGlobalDeselect from "./useGlobalDeselect";

interface IUseShortcut {
  onZoom: (value: number) => void;
  handleMove2D: (dx: number, dy: number) => void;
}

const useShortcut = (props: IUseShortcut) => {
  const { onZoom, handleMove2D } = props;

  const panNavigation = usePanNavigation({ handleMove2D });
  const arrowNavigation = useArrowNavigation({ handleMove2D });
  const zoomNavigation = useZoomShortcut({ onZoom });
  const globalDeselect = useGlobalDeselect();

  const onMouseDown = (e: MouseEvent) => {
    panNavigation.onMouseDown();
    globalDeselect.onMouseDown(e);
  };
  const onMouseMove = (e: MouseEvent) => {
    panNavigation.onMouseMove(e);
  };
  const onMouseUp = (_e: MouseEvent) => {
    panNavigation.onMouseUp();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    panNavigation.onKeyDown(e);
    arrowNavigation.onKeyDown(e);
    zoomNavigation.onKeyDown(e);
  };
  const onKeyUp = (_e: KeyboardEvent) => {
    panNavigation.onKeyUp();
  };

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

export default useShortcut;
