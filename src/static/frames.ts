import {
  FRAME_KEY,
  IFrame,
  framePositionType,
  frameSizeType,
  viewportDimensionType,
} from "../interfaces/frame";
import { viewportToPx } from "../utils/viewport";

import Photo1 from "../assets/images/profile/photo-1.webp";
import Photo1Min from "../assets/images/profile/photo-1-min.webp";
import Photo2 from "../assets/images/profile/photo-2.webp";
import Photo2Min from "../assets/images/profile/photo-2-min.webp";
import Photo3 from "../assets/images/profile/photo-3.webp";
import Photo3Min from "../assets/images/profile/photo-3-min.webp";

export const FRAMES: { [key in FRAME_KEY]: IFrame } = {
  [FRAME_KEY.CONTACT]: {
    title: "Contact Me",
    size: {
      width: "70vw",
    },
    position: {
      top: "150vh",
      left: "263vw",
    },
  },
  [FRAME_KEY.INTERESTS]: {
    title: "Interests",
    size: {
      width: "100vw",
    },
    position: {
      top: "330vh",
      left: "84vw",
    },
  },
  [FRAME_KEY.EXPERIENCES]: {
    title: "Experiences",
    size: {
      width: "1000px",
    },
    position: {
      top: "380vh",
      left: "212vw",
    },
  },
  [FRAME_KEY.LANDING]: {
    title: "Landing Page",
    size: {
      width: "100vw",
      height: "100vh",
    },
    position: {
      top: "295vh",
      left: "360vw",
    },
  },
  [FRAME_KEY.SKILLS]: {
    title: "Skills",
    size: {
      width: "120vw",
    },
    position: {
      top: "472vh",
      left: "400vw",
    },
  },
  [FRAME_KEY.ABOUT]: {
    title: "About",
    size: {
      width: "80vw",
    },
    position: {
      top: "177vh",
      left: "518vw",
    },
  },
  [FRAME_KEY.PROJECTS]: {
    title: "Projects I'm Proud of",
    size: {
      width: "100vw",
    },
    position: {
      top: "100vh",
      left: "680vw",
    },
  },
};

export interface IPhotoCard {
  key: number;
  src: string;
  tinySrc: string;
  position: Partial<framePositionType<viewportDimensionType | number>>;
}

export const PHOTO_CARDS: IPhotoCard[] = [
  {
    key: 1,
    src: Photo1,
    tinySrc: Photo1Min,
    position: {
      top: "120vh",
      left: "120vw",
    },
  },
  {
    key: 2,
    src: Photo2,
    tinySrc: Photo2Min,
    position: {
      top: "600vh",
      left: "50vw",
    },
  },
  {
    key: 3,
    src: Photo3,
    tinySrc: Photo3Min,
    position: {
      top: "525vh",
      left: "555vw",
    },
  },
];

export const INITIAL_APP_SIZE: frameSizeType<viewportDimensionType> = {
  width: "800vw",
  height: "800vh",
};

export const INITIAL_APP_SIZE_PX: frameSizeType<number> = {
  width: viewportToPx(INITIAL_APP_SIZE.width),
  height: viewportToPx(INITIAL_APP_SIZE.height),
};

export const NAVIGATING_ORDER: FRAME_KEY[] = [
  FRAME_KEY.LANDING,
  FRAME_KEY.SKILLS,
  FRAME_KEY.EXPERIENCES,
  FRAME_KEY.PROJECTS,
  FRAME_KEY.CONTACT,
  FRAME_KEY.ABOUT,
  FRAME_KEY.INTERESTS,
];
