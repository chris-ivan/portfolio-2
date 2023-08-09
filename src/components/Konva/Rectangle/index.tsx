import { Rect } from "react-konva";
import useRectangle from "./useRectangle";
import { IKonvaRect } from "../../../interfaces/konva";

const Rectangle = (props: IKonvaRect) => {
  const { config: shapeProps } = props;

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
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onTransformStart={onTransformStart}
        onTransformEnd={onTransformEnd}
      />
    </>
  );
};

export default Rectangle;
