import { RegularPolygon } from "react-konva";
import usePolygon from "./usePolygon";
import { IKonvaPolygon } from "../../../interfaces/konva";

const Polygon = (props: IKonvaPolygon) => {
  const { config: shapeProps } = props;

  const polygon = usePolygon(props);
  const {
    onSelect,
    shapeRef,
    onDragStart,
    onDragEnd,
    onTransformEnd,
    onTransformStart,
  } = polygon;

  return (
    <>
      <RegularPolygon
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

export default Polygon;
