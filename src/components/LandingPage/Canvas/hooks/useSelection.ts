import Konva from "konva";
import { Layer } from "konva/lib/Layer";
import { KonvaEventObject, Node, NodeConfig } from "konva/lib/Node";
import { Rect } from "konva/lib/shapes/Rect";
import { useRef } from "react";
import { useKonvaStore } from "../../../../store/konvaStore";
import { Ellipse } from "konva/lib/shapes/Ellipse";
import { Line } from "konva/lib/shapes/Line";
import { Text } from "konva/lib/shapes/Text";
import { RegularPolygon } from "konva/lib/shapes/RegularPolygon";

interface IUseSelection {
  selectionRef: React.RefObject<Rect>;
  layerRef: React.RefObject<Layer>;
}

type KonvaClickEvent = KonvaEventObject<MouseEvent | TouchEvent>;

const isClickingElement = (e: KonvaClickEvent) => {
  if (e.target instanceof Rect) return true;
  if (e.target instanceof Ellipse) return true;
  if (e.target instanceof Line) return true;
  if (e.target instanceof Text) return true;
  if (e.target instanceof RegularPolygon) return true;
  return false;
};

const useSelection = (props: IUseSelection) => {
  const { selectionRef, layerRef } = props;
  const selection = useRef({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  const updateSelectionRect = () => {
    if (!selectionRef?.current) return;
    const node = selectionRef.current;

    node.setAttrs({
      visible: selection.current.visible,
      x: Math.min(selection.current.x1, selection.current.x2),
      y: Math.min(selection.current.y1, selection.current.y2),
      width: Math.abs(selection.current.x1 - selection.current.x2),
      height: Math.abs(selection.current.y1 - selection.current.y2),
      fill: "rgba(0, 161, 255, 0.3)",
    });

    node.getLayer()?.batchDraw();
  };

  const onMouseDown = (e: KonvaClickEvent) => {
    const isElement = isClickingElement(e);
    const isTransformer = e.target.findAncestor("Transformer") as boolean;

    if (isElement || isTransformer) {
      return;
    }

    const pos = e.target?.getStage()?.getPointerPosition();
    if (!pos) return;

    selection.current.visible = true;
    selection.current.x1 = pos.x;
    selection.current.y1 = pos.y;
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };

  const onMouseMove = (e: KonvaClickEvent) => {
    if (!selection.current.visible) {
      return;
    }

    const pos = e.target.getStage()?.getPointerPosition();
    if (!pos) return;

    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };

  const onMouseUp = (_e: KonvaClickEvent) => {
    if (!selection.current.visible) {
      return;
    }

    selection.current.visible = false;
    const { x1, x2, y1, y2 } = selection.current;
    const moved = x1 !== x2 || y1 !== y2;

    if (!moved) {
      updateSelectionRect();
      return;
    }

    if (!selectionRef?.current || !layerRef?.current) return;

    const selBox = selectionRef.current.getClientRect();

    const elements: Node<NodeConfig>[] = [];

    const { currentState, setSelectedNodeIds } = useKonvaStore.getState();
    const nodeIds: string[] = currentState.map((node) => node.id);

    nodeIds.forEach((nodeId) => {
      const elementNode = layerRef.current?.findOne(`#${nodeId}`);
      if (!elementNode) return;
      const elBox = elementNode.getClientRect();
      if (Konva.Util.haveIntersection(selBox, elBox)) {
        elements.push(elementNode);
      }
    });

    const selectedNodeIds = elements.map((el) => el.id());
    setSelectedNodeIds(selectedNodeIds);

    updateSelectionRect();
  };

  return { onMouseUp, onMouseMove, onMouseDown };
};

export default useSelection;
