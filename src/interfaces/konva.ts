import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { LineConfig } from "konva/lib/shapes/Line";
import { RectConfig } from "konva/lib/shapes/Rect";
import { RegularPolygonConfig } from "konva/lib/shapes/RegularPolygon";
import { TextConfig } from "konva/lib/shapes/Text";

export enum KonvaEnum {
  RECT = "Rect",
  ELLIPSE = "Ellipse",
  POLYGON = "Polygon",
  LINE = "Line",
  TEXT = "Text",
}

export enum KonvaToolbarEnum {
  SELECT = "SELECT",
  PENCIL = "PENCIL",
}

export interface IKonvaBase {
  id: string;
}

export interface IKonvaRect extends IKonvaBase {
  type: KonvaEnum.RECT;
  config: RectConfig;
}

export interface IKonvaEllipse extends IKonvaBase {
  type: KonvaEnum.ELLIPSE;
  config: EllipseConfig;
}

export interface IKonvaPolygon extends IKonvaBase {
  type: KonvaEnum.POLYGON;
  config: RegularPolygonConfig;
}

export interface IKonvaLine extends IKonvaBase {
  type: KonvaEnum.LINE;
  config: LineConfig;
}

export interface IKonvaText extends IKonvaBase {
  type: KonvaEnum.TEXT;
  config: TextConfig;
}

export type KonvaNodeConfigType =
  | RectConfig
  | EllipseConfig
  | RegularPolygonConfig
  | LineConfig
  | TextConfig;

export type KonvaNodeType =
  | IKonvaRect
  | IKonvaEllipse
  | IKonvaPolygon
  | IKonvaLine
  | IKonvaText;

export type KonvaStateType = KonvaNodeType[];

export type KonvaHistoryType = KonvaStateType[];
