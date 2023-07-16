import { FRAME_KEY, IFrame } from "../interfaces/frame";

export const FRAMES: { [key in FRAME_KEY]: IFrame } = {
  [FRAME_KEY.CONTACT]: {
    title: "Contact Me",
    size: {
      width: "50vw",
    },
    position: {
      top: "123vh",
      left: "183vw",
    },
  },
  [FRAME_KEY.INTERESTS]: {
    title: "Interests",
    size: {
      width: "100vw",
      height: "100vh",
    },
    position: {
      top: "230vh",
      left: "34vw",
    },
  },
  [FRAME_KEY.EXPERIENCES]: {
    title: "Experiences",
    size: {
      width: "80vh",
    },
    position: {
      top: "162vh",
      left: "286vw",
    },
  },
  [FRAME_KEY.LANDING]: {
    title: "Landing Page",
    size: {
      width: "100vw",
      height: "100vh",
    },
    position: {
      top: "195vh",
      left: "310vw",
    },
  },
  [FRAME_KEY.SKILLS]: {
    title: "Skills",
    size: {
      width: "60vw",
    },
    position: {
      top: "372vh",
      left: "366vw",
    },
  },
  [FRAME_KEY.ABOUT]: {
    title: "About",
    size: {
      width: "120vw",
    },
    position: {
      top: "77vh",
      left: "468vw",
    },
  },
  [FRAME_KEY.PROJECTS]: {
    title: "Projects I'm Proud of",
    size: {
      width: "100vw",
    },
    position: {
      top: "38vh",
      left: "600vw",
    },
  },
};
