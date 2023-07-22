import { INITIAL_APP_SIZE } from "../static/frames";
import { useNavigationStore } from "../store/navigationStore";
import { viewportToPx } from "../utils/viewport";
import { useEffect } from "react";

const { width: initialWidth, height: initialHeight } = INITIAL_APP_SIZE;

const useAppResize = () => {
  const { setAppSize } = useNavigationStore();

  useEffect(() => {
    const height = viewportToPx(initialHeight);
    const width = viewportToPx(initialWidth);
    setAppSize({ width, height });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAppResize;
