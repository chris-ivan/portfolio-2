import { Line as LineComponent } from "react-konva";
import { IKonvaLine, KonvaToolbarEnum } from "../../../interfaces/konva";
import useLine from "./useLine";
import { useKonvaStore } from "../../../store/konvaStore";

const Line = (props: IKonvaLine) => {
  const { config: shapeProps } = props;
  const { currentToolbar } = useKonvaStore.getState();

  const line = useLine(props);
  const {
    onSelect,
    shapeRef,
    onDragStart,
    onDragEnd,
    onTransform,
    onTransformStart,
    onTransformEnd,
  } = line;

  return (
    <>
      <LineComponent
        id={props.id}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable={currentToolbar === KonvaToolbarEnum.SELECT}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onTransform={onTransform}
        onTransformStart={onTransformStart}
        onTransformEnd={onTransformEnd}
      />
    </>
  );
};

export default Line;
