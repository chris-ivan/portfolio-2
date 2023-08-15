import { KonvaEventObject } from "konva/lib/Node";
import { useRef } from "react";
import { useKonvaStore } from "../../../store/konvaStore";
import { generateLine } from "../../../utils/konva";
import { KonvaEnum } from "../../../interfaces/konva";
import { Vector2d } from "konva/lib/types";

const usePencil = () => {
  const isDrawing = useRef<boolean>(false);
  const { addNodes, currentState, modifyNodes } = useKonvaStore();

  const onMouseDown = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    isDrawing.current = true;
    const pos = e.target.getStage()?.getPointerPosition();
    const newLine = generateLine({ x: pos?.x, y: pos?.y });
    addNodes([newLine]);
  };

  const onMouseMove = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    if (!isDrawing.current) return;

    const stage = e.target.getStage();
    const point = stage?.getPointerPosition();
    const lastLine = currentState[currentState.length - 1];
    const { x = 0, y = 0 } = point as Vector2d;

    if (!lastLine || !x || !y || lastLine.type !== KonvaEnum.LINE) return;

    const prevPoints: number[] = lastLine.config.points as number[];
    const newPoints = [...prevPoints].concat([x, y]);

    requestAnimationFrame(() => {
      modifyNodes(
        [lastLine.id],
        { ...lastLine.config, points: newPoints },
        false
      );
    });
  };

  const onMouseUp = () => {
    isDrawing.current = false;
  };

  return { onMouseDown, onMouseMove, onMouseUp };
};

export default usePencil;
