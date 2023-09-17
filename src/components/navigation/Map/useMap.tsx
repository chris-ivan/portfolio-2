import { DraggableData, DraggableEvent } from "react-draggable";
import useViewport from "../../../hooks/useViewport";
import { frameCoordinateType } from "../../../interfaces/frame";
import updateTransform from "../../../utils/updateTransform";
import { useRef } from "react";
import useTransformListener from "../../../hooks/useTransformListener";
import { trackEvent } from "../../../utils/analytics";
import { AnalyticsEvent } from "../../../interfaces/analytics";

interface IUseMap {
  scale: number;
}

const useMap = (props: IUseMap) => {
  const transform = useTransformListener();
  const isDragging = useRef<boolean>(false);
  const { scale } = props;
  const { x, y, scale: globalScale } = transform;
  const { width: viewportWidth, height: viewportHeight } = useViewport();

  const mapScale = scale * (1 / globalScale);

  // some magic number after testing
  const multiplier = 4;
  const diffRatio = 1 - globalScale;
  const diffX = diffRatio * viewportWidth * multiplier;
  const diffY = diffRatio * viewportHeight * multiplier;

  const mapPosition: frameCoordinateType = {
    x: (-x - diffX) * mapScale,
    y: (-y - diffY) * mapScale,
  };

  const mapDimension = {
    width: viewportWidth * mapScale,
    height: viewportHeight * mapScale,
  };

  const onDragStart = () => {
    isDragging.current = true;
  };

  const onDrag = (_: DraggableEvent, data: DraggableData) => {
    updateTransform({
      ...transform,
      x: transform.x - data.deltaX / mapScale,
      y: transform.y - data.deltaY / mapScale,
    });
  };

  const onDragStop = () => {
    isDragging.current = false;
    trackEvent(AnalyticsEvent.NAVIGATION, "drag map");
  };

  return {
    mapPosition,
    mapDimension,
    onDragStart,
    onDrag,
    onDragStop,
    isDragging: isDragging.current,
  };
};

export default useMap;
