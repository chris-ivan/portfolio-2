import useViewport from "../../../hooks/useViewport";
import { useNavigationStore } from "../../../store/navigationStore";

interface IUseMap {
  scale: number;
}

const useMap = (props: IUseMap) => {
  const { scale } = props;
  const { transform } = useNavigationStore();
  const { x, y, scale: globalScale } = transform;
  const { width: viewportWidth, height: viewportHeight } = useViewport();

  const mapScale = scale * (1 / globalScale);

  // some magic number after testing
  const multiplier = 4;
  const diffRatio = 1 - globalScale;
  const diffX = diffRatio * viewportWidth * multiplier;
  const diffY = diffRatio * viewportHeight * multiplier;

  const mapPosition = {
    left: (-x - diffX) * mapScale,
    top: (-y - diffY) * mapScale,
    width: viewportWidth * mapScale,
    height: viewportHeight * mapScale,
  };

  return mapPosition;
};

export default useMap;
