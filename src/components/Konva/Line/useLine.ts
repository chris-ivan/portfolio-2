import { LineConfig, Line as LineType } from "konva/lib/shapes/Line";

import { IKonvaLine } from "../../../interfaces/konva";
import useKonvaShape from "../useKonvaShape";
import { useCallback } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import {
  handleMultipleSelectionTransformStart,
  handleTransformEnd,
} from "../../../utils/konva";

function deflat(n: number, arr: number[], y: number[][] = []): number[][] {
  return arr.length === 0
    ? y
    : deflat(n, arr.slice(n), y.concat([arr.slice(0, n)]));
}

const useLine = (props: IKonvaLine) => {
  const shapeProps = useKonvaShape<LineType, LineConfig>(props);
  const { shapeRef, onChange } = shapeProps;

  const getTransformProps = useCallback(() => {
    const node = shapeRef.current;
    if (!node?.points) return props.config;

    const points: number[][] = [];
    const flatendPoints = deflat(2, node.points());

    flatendPoints.forEach((k) => {
      const { x, y } = node.getAbsoluteTransform().point({ x: k[0], y: k[1] });
      points.push([x, y]);
    });

    node.scaleX(1);
    node.scaleY(1);
    node.position({ x: 0, y: 0 });

    const newConfig: LineConfig = {
      ...props.config,
      points: points.flat(2),
    };

    return newConfig;
  }, [shapeRef, props.config]);

  const onTransform = (_e: KonvaEventObject<Event>) => {
    const node = shapeRef.current;
    if (!node) return;

    onChange(getTransformProps(), handleTransformEnd());
  };

  const onTransformStart = (_e: KonvaEventObject<Event>) => {
    onChange(getTransformProps(), handleMultipleSelectionTransformStart());
  };

  const onTransformEnd = onTransform;

  return { ...shapeProps, onTransform, onTransformStart, onTransformEnd };
};

export default useLine;
