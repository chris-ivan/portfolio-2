import { frameSizeType } from "../interfaces/frame";
import { INITIAL_APP_SIZE } from "../static/frames";
import { useNavigationStore } from "../store/navigationStore";
import useViewport from "./useViewport";
import { useEffect } from "react";

const viewportToPx = (
  size: string,
  viewport: frameSizeType<number>
): number => {
  const { width: viewportWidth, height: viewportHeight } = viewport;

  if (size.endsWith("vh")) {
    return (viewportHeight * parseFloat(size)) / 100;
  } else if (size.endsWith("vw")) {
    return (viewportWidth * parseFloat(size)) / 100;
  } else {
    return 0;
  }
};

const { width: initialWidth, height: initialHeight } = INITIAL_APP_SIZE;

const useAppResize = () => {
  const { setAppSize } = useNavigationStore();
  const viewport = useViewport();

  useEffect(() => {
    const height = viewportToPx(initialHeight, viewport);
    const width = viewportToPx(initialWidth, viewport);
    setAppSize({ width, height });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAppResize;
