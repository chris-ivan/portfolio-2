import { ReactNode } from "react";
import { ISkill, getIconObject } from "../Skills/Skills.static";

import ReactIcon from "../../assets/icons/Logo/React.svg";
import TailwindIcon from "../../assets/icons/Logo/Tailwind.svg";
import TSIcon from "../../assets/icons/Logo/TS.svg";
import FigmaIcon from "../../assets/icons/Logo/Figma.svg";
import ZustandIcon from "../../assets/icons/Logo/Zustand.svg";
import SCSSIcon from "../../assets/icons/Logo/SCSS.svg";
import FramerIcon from "../../assets/icons/Logo/Framer.svg";
import PhotoshopIcon from "../../assets/icons/Logo/Photoshop.svg";
import SanityIcon from "../../assets/icons/Logo/Sanity.svg";
import JSIcon from "../../assets/icons/Logo/JS.svg";
import HTMLIcon from "../../assets/icons/Logo/HTML.svg";
import CSSIcon from "../../assets/icons/Logo/CSS.svg";

export enum ProjectRoleEnum {
  FE = "Frontend Developer",
  BE = "Backend Developer",
  FULLSTACK = "Fullstack Developer",
  UI = "UI Designer",
}

interface IProjectImage {
  src: string;
  alt: string;
  lazySrc: string;
}

export interface IProjectHighlight {
  title: string;
  summary: ReactNode;
  description: ReactNode;
  image: IProjectImage;
}

export interface IProject {
  tag: string;
  title: string;
  video?: string;
  mainImage: IProjectImage;
  tldr: ReactNode;
  role: ProjectRoleEnum[];
  techStack: ISkill[];
  highlights: IProjectHighlight[];
}

export const generateImageData = (
  src: string,
  alt: string,
  lazySrc?: string
) => ({
  src,
  alt,
  lazySrc: lazySrc || src,
});

export const SKILLS = {
  REACT: getIconObject("React", ReactIcon),
  TAILWIND: getIconObject("TailwindCSS", TailwindIcon),
  TS: getIconObject("TypeScript", TSIcon),
  FIGMA: getIconObject("Figma", FigmaIcon),
  ZUSTAND: getIconObject("Zustand", ZustandIcon),
  SCSS: getIconObject("SCSS", SCSSIcon),
  FRAMER: getIconObject("Framer", FramerIcon),
  PHOTOSHOP: getIconObject("Photoshop", PhotoshopIcon),
  SANITY: getIconObject("Sanity", SanityIcon),
  JS: getIconObject("JavaScript", JSIcon),
  HTML: getIconObject("HTML", HTMLIcon),
  CSS: getIconObject("CSS", CSSIcon),
};
