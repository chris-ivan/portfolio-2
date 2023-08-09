import { KonvaEventObject } from "konva/lib/Node";
import { IKonvaEllipse } from "../../../interfaces/konva";
import useKonvaShape from "../useKonvaShape";
import {
  EllipseConfig,
  Ellipse as EllipseType,
} from "konva/lib/shapes/Ellipse";
import { handleTransformEnd } from "../../../utils/konva";

const useEllipseangle = (props: IKonvaEllipse) => {
  const shapeProps = useKonvaShape<EllipseType, EllipseConfig>(props);

  const onTransformEnd = (_e: KonvaEventObject<Event>) => {
    const { shapeRef, onChange } = shapeProps;
    const node = shapeRef.current;
    if (!node) return;

    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    node.scaleX(1);
    node.scaleY(1);

    onChange(
      {
        ...props.config,
        x: node.x(),
        y: node.y(),
        rotation: node.rotation(),
        radiusX: Math.max(5, node.radiusX() * scaleX),
        radiusY: Math.max(5, node.radiusY() * scaleY),
      },
      handleTransformEnd()
    );
  };

  return { ...shapeProps, onTransformEnd };
};

export default useEllipseangle;
