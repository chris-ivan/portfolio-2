import { frameSizeType, viewportDimensionType } from "../interfaces/frame";
import useViewport from "./useViewport";

interface IUseResize {
  initialSize: frameSizeType<viewportDimensionType>;
}

const useResize = (props: IUseResize): frameSizeType<number> => {
  const { initialSize } = props;
  const { width: initialWidth, height: initialHeight } = initialSize;
  const { width: viewportWidth, height: viewportHeight } = useViewport();

  const viewportToPx = (viewport: string): number => {
    if (viewport.endsWith("vh")) {
      return (viewportHeight * parseFloat(viewport)) / 100;
    } else if (viewport.endsWith("vw")) {
      return (viewportWidth * parseFloat(viewport)) / 100;
    } else {
      return 0;
    }
  };

  const height = viewportToPx(initialHeight);
  const width = viewportToPx(initialWidth);

  return { width, height };
};

export default useResize;
