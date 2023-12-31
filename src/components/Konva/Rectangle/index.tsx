import { Rect } from "react-konva";
import useRectangle from "./useRectangle";
import { IKonvaRect, KonvaToolbarEnum } from "../../../interfaces/konva";
import { useKonvaStore } from "../../../store/konvaStore";

const Rectangle = (props: IKonvaRect) => {
  const { config: shapeProps } = props;
  const { currentToolbar } = useKonvaStore.getState();

  const rectangle = useRectangle(props);
  const {
    onSelect,
    shapeRef,
    onDragStart,
    onDragEnd,
    onTransformStart,
    onTransformEnd,
  } = rectangle;

  return (
    <>
      <Rect
        id={props.id}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable={currentToolbar === KonvaToolbarEnum.SELECT}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onTransformStart={onTransformStart}
        onTransformEnd={onTransformEnd}
      />
    </>
  );
};

export default Rectangle;
