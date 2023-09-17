import { useNavigationStore } from "../../../store/navigationStore";
import useViewport from "../../../hooks/useViewport";
import { DraggableData, DraggableEvent } from "react-draggable";
import updateTransform from "../../../utils/updateTransform";
import useTransformListener from "../../../hooks/useTransformListener";
import { useContext, useRef } from "react";
import { NotificationContext } from "../../../context/NotificationContext";
import Code from "../../UI/Code";
import { CTRL } from "../Guide/Guide.static";

const useScrollbar = () => {
  const transform = useTransformListener();
  const { appSize } = useNavigationStore();
  const { width: viewportWidth, height: viewportHeight } = useViewport();
  const { toast } = useContext(NotificationContext);
  const isTutorialShown = useRef<boolean>(false);

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

  const onDragHorizontal = (_: DraggableEvent, data: DraggableData) => {
    if (isTutorialShown?.current === false) {
      isTutorialShown.current = true;
      toast(
        <span>
          More commands are available in the <Code>(?)</Code> menu on the bottom
          right corner
        </span>
      );
      toast(
        <span>
          Try <Code>Shift+scroll</Code> to scroll horizontally.{" "}
          <Code>{CTRL}+scroll</Code> to zoom.
        </span>
      );
    }

    updateTransform({
      ...transform,
      x: transform.x - data.deltaX / widthPercentage,
    });
  };

  const onDragVertical = (_: DraggableEvent, data: DraggableData) => {
    updateTransform({
      ...transform,
      y: transform.y - data.deltaY / heightPercentage,
    });
  };

  const verticalScrollbar = {
    onDrag: onDragVertical,
    top,
    height,
  };

  const horizontalScrollbar = {
    onDrag: onDragHorizontal,
    left,
    width,
  };

  return { verticalScrollbar, horizontalScrollbar };
};

export default useScrollbar;
