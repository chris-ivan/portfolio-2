import useViewport from "../../../hooks/useViewport";
import { frameSizeType } from "../../../interfaces/frame";
import { useZoomStore } from "../../../store/zoomStore";

interface IUseMap {
  scale: number;
  containerSize: frameSizeType<number>;
}

const useMap = (props: IUseMap) => {
  const { scale, containerSize } = props;
  const { transform } = useZoomStore();
  const { x, y, scale: globalScale } = transform;
  const { width: viewportWidth, height: viewportHeight } = useViewport();

  // const viewPosLeft = -x;
  // const viewPosTop = -y;

  const mapScale = scale * (1 / globalScale);
  // console.log(globalScale, -x, viewportWidth, viewportWidth / globalScale);

  // some magic number after testing
  const multiplier = 3.5;
  const diffRatio = 1 - globalScale;
  const diffX = diffRatio * viewportWidth * multiplier * scale;
  console.log(diffX);

  // console.log(-x, -y);

  const mapPosition = {
    left: (-x * scale) / globalScale,
    top: (-y * scale) / globalScale,
    width: viewportWidth * mapScale,
    height: viewportHeight * mapScale,
  };

  return mapPosition;
};

export default useMap;
