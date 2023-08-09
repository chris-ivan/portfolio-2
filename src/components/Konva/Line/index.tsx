import { Line as LineComponent } from "react-konva";
import { IKonvaLine } from "../../../interfaces/konva";
import useLine from "./useLine";

const Line = (props: IKonvaLine) => {
  const { config: shapeProps } = props;

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
        draggable
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
