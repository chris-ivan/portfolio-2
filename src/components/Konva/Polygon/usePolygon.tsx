import { KonvaEventObject } from "konva/lib/Node";
import { IKonvaPolygon } from "../../../interfaces/konva";
import useKonvaShape from "../useKonvaShape";
import {
  RegularPolygonConfig,
  RegularPolygon as PolygonType,
} from "konva/lib/shapes/RegularPolygon";
import { handleTransformEnd } from "../../../utils/konva";

const usePolygon = (props: IKonvaPolygon) => {
  const shapeProps = useKonvaShape<PolygonType, RegularPolygonConfig>(props);

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
        width: Math.max(5, node.width() * scaleX),
        height: Math.max(5, node.height() * scaleY),
      },
      handleTransformEnd()
    );
  };

  return { ...shapeProps, onTransformEnd };
};

export default usePolygon;
