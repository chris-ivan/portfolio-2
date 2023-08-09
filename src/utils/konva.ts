import { RectConfig } from "konva/lib/shapes/Rect";
import {
  IKonvaEllipse,
  IKonvaLine,
  IKonvaPolygon,
  IKonvaRect,
  IKonvaText,
  KonvaEnum,
  KonvaNodeConfigType,
} from "../interfaces/konva";
import { v4 as uuidv4 } from "uuid";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { RegularPolygonConfig } from "konva/lib/shapes/RegularPolygon";
import { LineConfig } from "konva/lib/shapes/Line";
import { TextConfig } from "konva/lib/shapes/Text";
import { DEFAULT_TEXT } from "../static/konva";
import { useKonvaStore } from "../store/konvaStore";

export interface IGenerateShapeProps {
  x?: number;
  y?: number;
}

export const generateRectangle = (
  props?: IGenerateShapeProps & Partial<RectConfig>
): IKonvaRect => {
  const id: string = uuidv4();

  return {
    id,
    type: KonvaEnum.RECT,
    config: {
      x: props?.x || 10,
      y: props?.y || 10,
      width: props?.width || 100,
      height: props?.height || 100,
      rotation: props?.rotation,
      fill: props?.fill || "#efefef",
      stroke: props?.stroke || "#111111",
      strokeWidth: props?.strokeWidth || 1,
      id,
    },
  };
};

export const generateEllipse = (
  props?: IGenerateShapeProps & Partial<EllipseConfig>
): IKonvaEllipse => {
  const id: string = uuidv4();

  return {
    id,
    type: KonvaEnum.ELLIPSE,
    config: {
      x: props?.x || 10,
      y: props?.y || 10,
      radiusX: props?.radiusX || 60,
      radiusY: props?.radiusY || 60,
      rotation: props?.rotation,
      fill: props?.fill || "#efefef",
      stroke: props?.stroke || "#111111",
      strokeWidth: props?.strokeWidth || 1,
      id,
    },
  };
};

export const generatePolygon = (
  props?: IGenerateShapeProps & Partial<RegularPolygonConfig>
): IKonvaPolygon => {
  const id: string = uuidv4();

  return {
    id,
    type: KonvaEnum.POLYGON,
    config: {
      x: props?.x || 10,
      y: props?.y || 10,
      sides: props?.sides || 3,
      radius: props?.radius || 100,
      width: props?.width || 150,
      height: props?.height || 150,
      rotation: props?.rotation,
      fill: props?.fill || "#efefef",
      stroke: props?.stroke || "#111111",
      strokeWidth: props?.strokeWidth || 1,
      id,
    },
  };
};

export function generateBasicShape(
  shape: KonvaEnum,
  props: KonvaNodeConfigType
) {
  switch (shape) {
    case KonvaEnum.RECT:
      return generateRectangle(props);
    case KonvaEnum.ELLIPSE:
      return generateEllipse(props);
    case KonvaEnum.POLYGON:
      return generatePolygon(props);
    default:
      return null;
  }
}

export const generateLine = (
  props?: IGenerateShapeProps & Partial<LineConfig>
): IKonvaLine => {
  const id: string = uuidv4();
  const { x = 10, y = 10, ...rest } = props || {};

  return {
    id,
    type: KonvaEnum.LINE,
    config: {
      ...structuredClone(rest),
      points: props?.points || [x, y],
      stroke: props?.stroke || "#111111",
      strokeWidth: props?.strokeWidth || 2,
      tension: props?.tension || 0,
      lineCap: props?.lineCap || "round",
      lineJoin: props?.lineJoin || "round",
      globalCompositeOperation:
        props?.globalCompositeOperation || "source-over",
      id,
    },
  };
};

export const generateText = (
  props?: IGenerateShapeProps & Partial<TextConfig>
): IKonvaText => {
  const id: string = uuidv4();

  return {
    id,
    type: KonvaEnum.TEXT,
    config: {
      ...props,
      x: props?.x || 10,
      y: props?.y || 10,
      text: props?.text || DEFAULT_TEXT.text,
      fontSize: props?.fontSize || DEFAULT_TEXT.fontSize,
      fontFamily: props?.fontFamily || DEFAULT_TEXT.fontFamily,
      fill: props?.fill || DEFAULT_TEXT.fill,
      align: props?.align || DEFAULT_TEXT.align,
      id,
    },
  };
};

export const handleMultipleSelectionTransformStart = () => {
  const {
    selectedNodeIds,
    isTransformingMultipleNodes,
    setIsTransformingMultipleNodes,
  } = useKonvaStore.getState();

  if (selectedNodeIds.length === 1) {
    setIsTransformingMultipleNodes(false);
    return true;
  }

  if (!isTransformingMultipleNodes) {
    setIsTransformingMultipleNodes(true);
    return true;
  }

  return false;
};

export const handleTransformEnd = () => {
  const { setIsTransformingMultipleNodes } = useKonvaStore.getState();
  setIsTransformingMultipleNodes(false);
  return false;
};
