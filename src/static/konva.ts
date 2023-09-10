import { TextConfig } from "konva/lib/shapes/Text";
import { KonvaEnum, KonvaNodeType } from "../interfaces/konva";
import { getViewportHeight, getViewportWidth } from "../utils/viewport";
import { COLOR } from "../interfaces/theme";
import { ShapeConfig } from "konva/lib/Shape";

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

export enum INITIAL_NODE_ID {
  RECT1 = "rect1",
  ELLIPSE1 = "ellipse1",
  ELLIPSE2 = "ellipse2",
  TITLE = "title",
  SUBTITLE = "subtitle",
  LINE = "line",
}

export const INITIAL_NODE_CONFIG: Record<
  INITIAL_NODE_ID,
  { light?: ShapeConfig; dark?: ShapeConfig }
> = {
  [INITIAL_NODE_ID.RECT1]: {
    light: {
      fill: "#E5EBFF",
      stroke: "#E5EBFF",
    },
    dark: {
      fill: COLOR.BLACK,
      stroke: COLOR.BLACK,
    },
  },
  [INITIAL_NODE_ID.ELLIPSE1]: {
    light: {
      fill: "#F3F3F3",
      stroke: "#F3F3F3",
    },
    dark: {
      fill: "#232323",
      stroke: "#232323",
    },
  },
  [INITIAL_NODE_ID.ELLIPSE2]: {
    light: {
      fill: COLOR.WHITE,
      stroke: COLOR.WHITE,
    },
    dark: {
      fill: COLOR.DARKER_GREY,
      stroke: COLOR.DARKER_GREY,
    },
  },
  [INITIAL_NODE_ID.TITLE]: {
    light: {
      fill: COLOR.BLACK,
    },
    dark: {
      fill: COLOR.WHITE,
    },
  },
  [INITIAL_NODE_ID.SUBTITLE]: {
    light: {
      fill: COLOR.DARK_GREY,
    },
    dark: {
      fill: COLOR.DARK_GREY,
    },
  },
  [INITIAL_NODE_ID.LINE]: {
    light: {
      stroke: COLOR.BLUE,
    },
    dark: {
      stroke: COLOR.ORANGE,
    },
  },
};

export const getInitialNodes = (): KonvaNodeType[] => {
  const viewportWidth = getViewportWidth();
  // 40 for menubar height
  const viewportHeight = getViewportHeight() - 60;

  // a lot of hardcoding based on figma
  const titleWidth = 840;
  const subtitleWidth = 660;
  const titleX = viewportWidth / 2 - titleWidth / 2;
  const titleY = viewportHeight / 4;
  const subtitleX = viewportWidth / 2 - subtitleWidth / 2;
  const subtitleY = titleY + 100;
  const ellipseX = titleX - 200;
  const ellipseY = titleY + 450;

  const adjustedLinePoints = landingPageLine.map((point, index) => {
    return index % 2 === 0 ? point + titleX + 240 : point + titleY + 50;
  });

  const THEME = "light";

  return [
    {
      id: INITIAL_NODE_ID.RECT1,
      type: KonvaEnum.RECT,
      config: {
        id: INITIAL_NODE_ID.RECT1,
        width: 345,
        height: 97,
        x: titleX + 230,
        y: titleY - 20,
        ...INITIAL_NODE_CONFIG[INITIAL_NODE_ID.RECT1][THEME],
      },
    },
    {
      id: INITIAL_NODE_ID.ELLIPSE1,
      type: KonvaEnum.ELLIPSE,
      config: {
        id: INITIAL_NODE_ID.ELLIPSE1,
        radiusX: 650,
        radiusY: 650,
        x: ellipseX,
        y: ellipseY,
        ...INITIAL_NODE_CONFIG[INITIAL_NODE_ID.ELLIPSE1][THEME],
      },
    },
    {
      id: INITIAL_NODE_ID.ELLIPSE2,
      type: KonvaEnum.ELLIPSE,
      config: {
        id: INITIAL_NODE_ID.ELLIPSE2,
        radiusX: 550,
        radiusY: 550,
        x: ellipseX,
        y: ellipseY,
        ...INITIAL_NODE_CONFIG[INITIAL_NODE_ID.ELLIPSE2][THEME],
      },
    },
    {
      id: INITIAL_NODE_ID.TITLE,
      type: KonvaEnum.TEXT,
      config: {
        ...DEFAULT_H1,
        id: INITIAL_NODE_ID.TITLE,
        text: "I build frontend things.",
        width: titleWidth,
        x: titleX,
        y: titleY,
        ...INITIAL_NODE_CONFIG[INITIAL_NODE_ID.TITLE][THEME],
      },
    },
    {
      id: INITIAL_NODE_ID.SUBTITLE,
      type: KonvaEnum.TEXT,
      config: {
        ...DEFAULT_H3,
        id: INITIAL_NODE_ID.SUBTITLE,
        text: "but I also love pixel-pushing as a side quest",
        width: subtitleWidth,
        x: subtitleX,
        y: subtitleY,
        align: "left",
        ...INITIAL_NODE_CONFIG[INITIAL_NODE_ID.SUBTITLE][THEME],
      },
    },
    {
      id: INITIAL_NODE_ID.LINE,
      type: KonvaEnum.LINE,
      config: {
        id: INITIAL_NODE_ID.LINE,
        points: adjustedLinePoints,
        strokeWidth: 3,
        lineCap: "round",
        lineJoin: "round",
        ...INITIAL_NODE_CONFIG[INITIAL_NODE_ID.LINE][THEME],
      },
    },
  ];
};
