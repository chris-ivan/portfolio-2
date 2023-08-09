import {
  IKonvaLine,
  IKonvaText,
  KonvaEnum,
  KonvaNodeType,
} from "../../../../../interfaces/konva";
import { useKonvaStore } from "../../../../../store/konvaStore";
import { useEffect, useCallback } from "react";
import {
  generateBasicShape,
  generateLine,
  generateText,
} from "../../../../../utils/konva";
import { Stage } from "konva/lib/Stage";
import { Vector2d } from "konva/lib/types";

const KonvaBasicShapes = [KonvaEnum.ELLIPSE, KonvaEnum.POLYGON, KonvaEnum.RECT];

const duplicateBasicShape = (node: KonvaNodeType, position?: Vector2d) => {
  const config = structuredClone(node.config);

  const newShapeConfig = {
    ...config,
    x: position?.x || (config?.x || 0) + 10,
    y: position?.y || (config?.y || 0) + 10,
  };

  return generateBasicShape(node.type, newShapeConfig);
};

const duplicateLine = (node: IKonvaLine, position?: Vector2d) => {
  const newShapeConfig = structuredClone(node.config);
  const newPoints = [...(newShapeConfig.points as number[])];

  if (newPoints.length < 2) return null;

  const distanceX = position ? position.x - newPoints[0] : 10;
  const distanceY = position ? position.y - newPoints[1] : 10;

  for (let i = 0; i < newPoints.length; i++) {
    if (i % 2 === 0) newPoints[i] += distanceX;
    else newPoints[i] += distanceY;
  }

  newShapeConfig.points = newPoints;

  return generateLine(newShapeConfig);
};

const duplicateText = (node: IKonvaText, position?: Vector2d) => {
  const newShapeConfig = structuredClone(node.config);
  newShapeConfig.x = position?.x || (newShapeConfig?.x || 0) + 10;
  newShapeConfig.y = position?.y || (newShapeConfig?.y || 0) + 10;

  return generateText(newShapeConfig);
};

const duplicate = (node: KonvaNodeType, position?: Vector2d) => {
  if (!node.type || !Object.values(KonvaEnum).includes(node.type)) return;
  const nodeType = node.type;

  if (nodeType === KonvaEnum.LINE) return duplicateLine(node, position);
  if (nodeType === KonvaEnum.TEXT) return duplicateText(node, position);

  if (KonvaBasicShapes.includes(nodeType))
    return duplicateBasicShape(node, position);
};

const duplicateNodes = (nodes: KonvaNodeType[], position?: Vector2d) => {
  const newNodes: KonvaNodeType[] = [];
  if (!nodes.length) return;

  if (!position) {
    nodes.forEach((node) => {
      const newNode = duplicate(node);
      if (newNode) newNodes.push(newNode);
    });
  } else {
    const basePosition = {
      x: nodes[0].config.x || 0,
      y: nodes[0].config.y || 0,
    };

    nodes.forEach((node) => {
      const curX = node.config.x || 0;
      const curY = node.config.y || 0;
      const dx = curX - basePosition.x;
      const dy = curY - basePosition.y;

      const newPosition = {
        x: position.x + dx,
        y: position.y + dy,
      };

      const newNode = duplicate(node, newPosition);
      if (newNode) newNodes.push(newNode);
    });
  }

  useKonvaStore.getState().addNodes(newNodes, true);
};

const copy = async (nodes: KonvaNodeType[]): Promise<void> => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(nodes));
    console.log("copied to clipboard");
  } catch {
    console.log("failed to copy to clipboard");
  }
};

const cut = async (nodes: KonvaNodeType[]): Promise<void> => {
  try {
    await copy(nodes);
    useKonvaStore.getState().deleteNodes(nodes.map((node) => node.id));
  } catch {
    console.log("failed to cut");
  }
};

const paste = async (position: Vector2d | null): Promise<void> => {
  try {
    const text: string = await navigator.clipboard.readText();
    if (!text || typeof text !== "string") return;

    const nodes: KonvaNodeType[] = JSON.parse(text) as KonvaNodeType[];
    duplicateNodes(nodes, position || undefined);
  } catch (e) {
    console.log("failed to paste");
  }
};

interface IUseCopyPaste {
  stageRef: React.RefObject<Stage>;
}

const useCopyPaste = (props: IUseCopyPaste) => {
  const { stageRef } = props;

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!e.ctrlKey || !stageRef?.current) return;

      if (!["c", "d", "v", "x"].includes(e.key)) return;
      e.preventDefault();

      const nodes = useKonvaStore.getState().getSelectedNodes();

      if (nodes.length) {
        if (e.key === "d") return duplicateNodes(nodes);
        if (e.key === "c") return void copy(nodes);
        if (e.key === "x") return void cut(nodes);
      }

      const position = stageRef.current.getPointerPosition();
      if (e.key === "v") return void paste(position);
    },
    [stageRef]
  );

  useEffect(() => {
    if (!stageRef) return;

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [stageRef, onKeyDown]);
};

export default useCopyPaste;
