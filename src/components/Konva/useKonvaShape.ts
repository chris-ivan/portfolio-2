import { useRef } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import { RectConfig, Rect as RectType } from "konva/lib/shapes/Rect";
import {
  RegularPolygonConfig,
  RegularPolygon as PolygonType,
} from "konva/lib/shapes/RegularPolygon";
import { LineConfig, Line as LineType } from "konva/lib/shapes/Line";
import { TextConfig, Text as TextType } from "konva/lib/shapes/Text";
import {
  EllipseConfig,
  Ellipse as EllipseType,
} from "konva/lib/shapes/Ellipse";
import { useKonvaStore } from "../../store/konvaStore";
import {
  IKonvaRect,
  IKonvaEllipse,
  KonvaNodeType,
  IKonvaPolygon,
  IKonvaLine,
  IKonvaText,
} from "../../interfaces/konva";
import { handleMultipleSelectionTransformStart } from "../../utils/konva";

type ShapeType = RectType | EllipseType | PolygonType;
type ShapeConfig = RectConfig | EllipseConfig | RegularPolygonConfig;

interface IUseKonvaShapeReturn<T1, T2> {
  onSelect: () => void;
  isSelected: boolean;
  shapeRef: React.RefObject<T1>;
  onChange: (props: T2, addToHistory?: boolean) => void;
  onDragStart: () => void;
  onDragEnd: (e: KonvaEventObject<DragEvent>) => void;
  onTransformStart: () => void;
}

function useKonvaShape<T1 extends TextType, T2 extends TextConfig>(
  props: IKonvaText
): IUseKonvaShapeReturn<T1, T2>;
function useKonvaShape<T1 extends LineType, T2 extends LineConfig>(
  props: IKonvaLine
): IUseKonvaShapeReturn<T1, T2>;
function useKonvaShape<T1 extends PolygonType, T2 extends RegularPolygonConfig>(
  props: IKonvaPolygon
): IUseKonvaShapeReturn<T1, T2>;
function useKonvaShape<T1 extends EllipseType, T2 extends EllipseConfig>(
  props: IKonvaEllipse
): IUseKonvaShapeReturn<T1, T2>;
function useKonvaShape<T1 extends RectType, T2 extends RectConfig>(
  props: IKonvaRect
): IUseKonvaShapeReturn<T1, T2>;
function useKonvaShape<T1 extends ShapeType, T2 extends ShapeConfig>(
  props: KonvaNodeType
) {
  const { id, config } = props;

  const shapeRef = useRef<T1>(null);

  const onChange = (props: T2, addToHistory = true) => {
    const { modifyNodes } = useKonvaStore.getState();
    modifyNodes([id], props, addToHistory);
  };

  const onSelect = (e: KonvaEventObject<MouseEvent>) => {
    const { setSelectedNodeIds, toggleNodeSelection } =
      useKonvaStore.getState();

    const allowMultiple = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
    if (allowMultiple) {
      toggleNodeSelection(props.id);
      return;
    }

    setSelectedNodeIds([props.id]);
  };

  const onTransformStart = () => {
    onChange(config as T2, handleMultipleSelectionTransformStart());
  };

  const onDragStart = () => {
    const { selectedNodeIds, setSelectedNodeIds } = useKonvaStore.getState();
    const isNotSelected = !selectedNodeIds.includes(props.id);

    if (isNotSelected) {
      setSelectedNodeIds([props.id]);
    }

    onChange(config as T2);
  };

  const onDragEnd = (e: KonvaEventObject<DragEvent>) => {
    onChange(
      {
        ...config,
        x: e.target.x(),
        y: e.target.y(),
      } as T2,
      false
    );
  };

  return {
    onChange,
    onSelect,
    shapeRef,
    onDragStart,
    onDragEnd,
    onTransformStart,
  };
}

export default useKonvaShape;
