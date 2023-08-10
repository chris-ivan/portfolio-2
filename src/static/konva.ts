import { TextConfig } from "konva/lib/shapes/Text";
import { KonvaEnum, KonvaNodeType } from "../interfaces/konva";
import { COLOR } from "../interfaces/theme";

export const BASIC_SHAPE = {
  MIN_WIDTH: 10,
  MIN_HEIGHT: 10,
};

export const DEFAULT_TEXT: TextConfig = {
  text: "Text",
  fontSize: 16,
  fontFamily: "Noto Sans",
  fill: COLOR.BLACK,
  align: "center",
  width: 50,
  lineHeight: 1.5,
};

export const DEFAULT_H1: TextConfig = {
  ...DEFAULT_TEXT,
  text: "Heading 1",
  fontFamily: "Grifter",
  fontSize: 72,
  width: 400,
  lineHeight: 1.2,
};

export const DEFAULT_H2: TextConfig = {
  ...DEFAULT_TEXT,
  text: "Heading 2",
  fontFamily: "Grifter",
  fontSize: 44,
  width: 280,
  lineHeight: 1.2,
};

export const DEFAULT_H3: TextConfig = {
  ...DEFAULT_TEXT,
  text: "Heading 3",
  fontFamily: "Grifter",
  fontSize: 32,
  width: 200,
  lineHeight: 1.35,
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
  {
    id: "text1",
    type: KonvaEnum.TEXT,
    config: {
      ...DEFAULT_H2,
      text: "Lorem Ipsum",
      id: "text1",
      x: 300,
      y: 300,
    },
  },
  {
    id: "text2",
    type: KonvaEnum.TEXT,
    config: {
      ...DEFAULT_TEXT,
      text: "Lorem Ipsum",
      id: "text2",
      x: 300,
      y: 400,
    },
  },
];
