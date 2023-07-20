type elementDimensionType = string | number;
export type viewportDimensionType = `${number}vh` | `${number}vw`;

export interface frameSizeType<T = elementDimensionType> {
  width: T;
  height: T;
}

export interface frameCoordinateType {
  x: number;
  y: number;
}

export interface framePositionType<T = elementDimensionType> {
  top: T;
  left: T;
  right: T;
  bottom: T;
}

export interface IFrameBbox {
  size?: Partial<frameSizeType>;
  position?: Partial<framePositionType>;
}

export interface IFrame extends IFrameBbox {
  title?: string;
}

export enum FRAME_KEY {
  CONTACT = "CONTACT",
  INTERESTS = "INTERESTS",
  EXPERIENCES = "EXPERIENCES",
  LANDING = "LANDING",
  SKILLS = "SKILLS",
  ABOUT = "ABOUT",
  PROJECTS = "PROJECTS",
}
