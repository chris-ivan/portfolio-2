import { KonvaEventObject } from "konva/lib/Node";
import { IKonvaRect } from "../../../interfaces/konva";
import useKonvaShape from "../useKonvaShape";
import { RectConfig, Rect as RectType } from "konva/lib/shapes/Rect";
import { handleTransformEnd } from "../../../utils/konva";

const useRectangle = (props: IKonvaRect) => {
  const shapeProps = useKonvaShape<RectType, RectConfig>(props);

  const onTransformEnd = (_e: KonvaEventObject<Event>) => {
    const { shapeRef, onChange } = shapeProps;
    const node = shapeRef.current;
    if (!node) return;

    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    // we will reset it back
    node.scaleX(1);
    node.scaleY(1);

    onChange(
      {
        ...props.config,
        x: node.x(),
        y: node.y(),
        rotation: node.rotation(),
        // set minimal value
        width: Math.max(5, node.width() * scaleX),
        height: Math.max(5, node.height() * scaleY),
      },
      handleTransformEnd()
    );
  };

  return { ...shapeProps, onTransformEnd };
};

export default useRectangle;
