import { FRAME_KEY, IFrame } from "../interfaces/frame";

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
      width: "80vh",
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
      width: "100vw",
    },
    position: {
      top: "138vh",
      left: "630vw",
    },
  },
};
