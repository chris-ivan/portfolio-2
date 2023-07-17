type elementDimensionType = string | number;
export type viewportDimensionType = `${number}vh` | `${number}vw`;

export interface frameSizeType<T = elementDimensionType> {
  width: T;
  height: T;
}

export interface framePositionType<T = elementDimensionType> {
  top: T;
  left: T;
  right: T;
  bottom: T;
}

export interface IFrame {
  title?: string;
  size?: Partial<frameSizeType>;
  position?: Partial<framePositionType>;
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
