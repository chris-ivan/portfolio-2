import { TextConfig } from "konva/lib/shapes/Text";
import { KonvaEnum, KonvaNodeType } from "../interfaces/konva";
import { getViewportHeight, getViewportWidth } from "../utils/viewport";
import { COLOR } from "../interfaces/theme";

export const BASIC_SHAPE = {
  MIN_WIDTH: 10,
  MIN_HEIGHT: 10,
};

export const DEFAULT_TEXT: TextConfig = {
  text: "Text",
  fontSize: 16,
  fontFamily: "Noto Sans",
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
  fontFamily: "Noto Sans",
  fontSize: 32,
  width: 200,
  fontStyle: "bold",
  lineHeight: 1.35,
};

const landingPageLine = [
  2.42845, 25.4153, 17.5542, 20.5843, 36.6211, 16.4081, 53.3644, 11.8987,
  56.8068, 10.9716, 95.3184, 1.07643, 95.8662, 1.59499, 100.956, 6.41317,
  101.979, 11.3087, 104.745, 16.1341, 105.795, 17.9656, 127.762, 9.2285,
  131.056, 8.03928, 140.377, 4.6745, 139.443, 10.3454, 141.717, 12.0801,
  146.506, 15.734, 174.598, 11.6626, 181.429, 10.6902, 188.499, 9.68386,
  196.682, 7.90726, 205.442, 7.57127, 211.439, 7.34129, 217.357, 9.00203,
  223.62, 9.30509, 249.481, 10.5564, 275.992, 10.6612, 300.978, 9.95988,
  320.542, 9.41071, 325.772, 7.96756, 340.944, 6.37705,
];

export const getInitialNodes = (): KonvaNodeType[] => {
  const viewportWidth = getViewportWidth();
  // 40 for menubar height
  const viewportHeight = getViewportHeight() - 40;

  // a lot of hardcoding based on figma
  const titleWidth = 840;
  const subtitleWidth = 660;
  const titleX = viewportWidth / 2 - titleWidth / 2;
  const titleY = viewportHeight / 3;
  const subtitleX = viewportWidth / 2 - subtitleWidth / 2;
  const subtitleY = titleY + 100;
  const ellipseX = titleX - 100;
  const ellipseY = titleY + viewportHeight / 3;

  const adjustedLinePoints = landingPageLine.map((point, index) => {
    return index % 2 === 0 ? point + titleX + 240 : point + titleY + 50;
  });

  return [
    {
      id: "rect1",
      type: KonvaEnum.RECT,
      config: {
        id: "rect1",
        width: 345,
        height: 97,
        x: titleX + 230,
        y: titleY - 20,
        fill: COLOR.LIGHT_BLUE,
      },
    },
    {
      id: "ellipse1",
      type: KonvaEnum.ELLIPSE,
      config: {
        id: "ellipse1",
        fill: "#F3F3F3",
        radiusX: viewportHeight * 0.65,
        radiusY: viewportHeight * 0.65,
        x: ellipseX,
        y: ellipseY,
      },
    },
    {
      id: "ellipse2",
      type: KonvaEnum.ELLIPSE,
      config: {
        id: "ellipse2",
        fill: COLOR.WHITE,
        radiusX: viewportHeight * 0.55,
        radiusY: viewportHeight * 0.55,
        x: ellipseX,
        y: ellipseY,
      },
    },
    {
      id: "title",
      type: KonvaEnum.TEXT,
      config: {
        ...DEFAULT_H1,
        text: "I build frontend things.",
        id: "title",
        fill: COLOR.BLACK,
        width: titleWidth,
        x: titleX,
        y: titleY,
      },
    },
    {
      id: "subtitle",
      type: KonvaEnum.TEXT,
      config: {
        ...DEFAULT_H3,
        text: "but I also love pixel-pushing as a side quest",
        id: "subtitle",
        fill: COLOR.DARK_GREY,
        width: subtitleWidth,
        x: subtitleX,
        y: subtitleY,
        align: "left",
      },
    },
    {
      id: "line",
      type: KonvaEnum.LINE,
      config: {
        id: "line",
        points: adjustedLinePoints,
        stroke: COLOR.BLUE,
        strokeWidth: 3,
        lineCap: "round",
        lineJoin: "round",
      },
    },
  ];
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
