import { RegularPolygon } from "react-konva";
import usePolygon from "./usePolygon";
import { IKonvaPolygon, KonvaToolbarEnum } from "../../../interfaces/konva";
import { useKonvaStore } from "../../../store/konvaStore";

const Polygon = (props: IKonvaPolygon) => {
  const { config: shapeProps } = props;
  const { currentToolbar } = useKonvaStore.getState();

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
        draggable={currentToolbar === KonvaToolbarEnum.SELECT}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onTransformStart={onTransformStart}
        onTransformEnd={onTransformEnd}
      />
    </>
  );
};

export default Polygon;
