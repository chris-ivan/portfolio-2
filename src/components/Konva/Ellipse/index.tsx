import { Ellipse as EllipseComponent } from "react-konva";
import useEllipse from "./useEllipse";
import { IKonvaEllipse, KonvaToolbarEnum } from "../../../interfaces/konva";
import { useKonvaStore } from "../../../store/konvaStore";

const Ellipse = (props: IKonvaEllipse) => {
  const { config: shapeProps } = props;
  const { currentToolbar } = useKonvaStore();

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
        draggable={currentToolbar === KonvaToolbarEnum.SELECT}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onTransformStart={onTransformStart}
        onTransformEnd={onTransformEnd}
      />
    </>
  );
};

export default Ellipse;
