import { Ellipse as EllipseComponent } from "react-konva";
import useEllipse from "./useEllipse";
import { IKonvaEllipse } from "../../../interfaces/konva";

const Ellipse = (props: IKonvaEllipse) => {
  const { config: shapeProps } = props;

  const ellipse = useEllipse(props);
  const {
    onSelect,
    shapeRef,
    onDragStart,
    onDragEnd,
    onTransformStart,
    onTransformEnd,
  } = ellipse;

  return (
    <>
      <EllipseComponent
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

export default Ellipse;
