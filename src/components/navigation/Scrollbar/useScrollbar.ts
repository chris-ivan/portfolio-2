import { useNavigationStore } from "../../../store/navigationStore";
import useViewport from "../../../hooks/useViewport";

const useScrollbar = () => {
  const { transform, appSize } = useNavigationStore();
  const { width: viewportWidth, height: viewportHeight } = useViewport();

  const maxWidth = viewportWidth;
  const maxHeight = viewportHeight;
  const { scale, x, y } = transform;

  const multiplier = 4;
  const diffRatio = 1 - scale;
  const diffX = diffRatio * maxWidth * multiplier;
  const diffY = diffRatio * maxHeight * multiplier;

  const widthPercentage = maxWidth / scale / appSize.width;
  const heightPercentage = maxHeight / scale / appSize.height;

  const left = (-x - diffX) * widthPercentage;
  const width = maxWidth * widthPercentage;

  const top = (-y - diffY) * heightPercentage;
  const height = maxHeight * heightPercentage;

  return { width, left, top, height };
};

export default useScrollbar;
