import {
  FRAME_KEY,
  IFrame,
  frameSizeType,
  viewportDimensionType,
} from "../interfaces/frame";
import { viewportToPx } from "../utils/viewport";

export const FRAMES: { [key in FRAME_KEY]: IFrame } = {
  [FRAME_KEY.CONTACT]: {
    title: "Contact Me",
    size: {
      width: "50vw",
    },
    position: {
      top: "223vh",
      left: "233vw",
    },
  },
  [FRAME_KEY.INTERESTS]: {
    title: "Interests",
    size: {
      width: "100vw",
      height: "100vh",
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
      height: "100vh",
    },
    position: {
      top: "472vh",
      left: "416vw",
    },
  },
  [FRAME_KEY.ABOUT]: {
    title: "About",
    size: {
      width: "60vw",
    },
    position: {
      top: "177vh",
      left: "518vw",
    },
  },
  [FRAME_KEY.PROJECTS]: {
    title: "Projects I'm Proud of",
    size: {
      width: "80vw",
    },
    position: {
      top: "138vh",
      left: "630vw",
    },
  },
};

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
