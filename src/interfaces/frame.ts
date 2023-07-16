type elementDimensionType = string | number;

interface frameSizeType {
  width: elementDimensionType;
  height: elementDimensionType;
}

interface framePositionType {
  top: elementDimensionType;
  left: elementDimensionType;
  right: elementDimensionType;
  bottom: elementDimensionType;
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
