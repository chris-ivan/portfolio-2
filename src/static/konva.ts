import { TextConfig } from "konva/lib/shapes/Text";
import { KonvaEnum, KonvaNodeType } from "../interfaces/konva";
export const BASIC_SHAPE = {
  MIN_WIDTH: 10,
  MIN_HEIGHT: 10,
};

export const DEFAULT_TEXT: TextConfig = {
  text: "Text",
  fontSize: 16,
  fontFamily: "Calibri",
  fill: "#000000",
  align: "center",
  width: 50,
  lineHeight: 1.5,
};

export const DEFAULT_H1: TextConfig = {
  ...DEFAULT_TEXT,
  text: "Heading 1",
  fontSize: 24,
  width: 100,
  lineHeight: 1.3,
};

export const DEFAULT_H2: TextConfig = {
  ...DEFAULT_TEXT,
  text: "Heading 2",
  fontSize: 20,
  width: 90,
  lineHeight: 1.3,
};

export const DEFAULT_H3: TextConfig = {
  ...DEFAULT_TEXT,
  text: "Heading 3",
  fontSize: 18,
  width: 80,
  lineHeight: 1.3,
};

export const initialRectangles: KonvaNodeType[] = [
  {
    id: "rect1",
    type: KonvaEnum.RECT,
    config: {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      fill: "red",
      id: "rect1",
      stroke: "#111111",
      strokeWidth: 1,
    },
  },
  {
    id: "rect2",
    type: KonvaEnum.RECT,
    config: {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      fill: "green",
      id: "rect2",
      stroke: "#111111",
      strokeWidth: 1,
    },
  },
];
