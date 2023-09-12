import { useState } from "react";
import { IPhotoCard } from "../../../static/frames";
import { viewportToPx } from "../../../utils/viewport";
import { DraggableEventHandler } from "react-draggable";
import useTransformListener from "../../../hooks/useTransformListener";

const usePhotoCard = (props: IPhotoCard) => {
  const { position: positionProps } = props;
  const [cursor, setCursor] = useState<"grab" | "grabbing">("grab");
  const transform = useTransformListener();

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: viewportToPx(positionProps?.left as string),
    y: viewportToPx(positionProps?.top as string),
  });

  const onDragStart: DraggableEventHandler = () => {
    setCursor("grabbing");
  };

  const onDrag: DraggableEventHandler = (_e, data) => {
    const { deltaX, deltaY } = data;
    const { scale } = transform;

    setPosition((prev) => ({
      x: prev.x + deltaX / scale,
      y: prev.y + deltaY / scale,
    }));
  };

  const onDragStop: DraggableEventHandler = () => {
    setCursor("grab");
  };

  return { position, cursor, onDrag, onDragStart, onDragStop };
};

export default usePhotoCard;
