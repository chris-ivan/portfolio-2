import AffinityIcon from "../../assets/icons/Logo/Affinity.svg";
import AlibabaIcon from "../../assets/icons/Logo/Alibaba.svg";
import AnalyticsIcon from "../../assets/icons/Logo/Analytics.svg";
import AntDesignIcon from "../../assets/icons/Logo/AntDesign.svg";
import BootstrapIcon from "../../assets/icons/Logo/Bootstrap.svg";
import BulmaIcon from "../../assets/icons/Logo/Bulma.svg";
import CSSIcon from "../../assets/icons/Logo/CSS.svg";
import DjangoIcon from "../../assets/icons/Logo/Django.svg";
import DockerIcon from "../../assets/icons/Logo/Docker.svg";
import ExpressIcon from "../../assets/icons/Logo/Express.svg";
import ExpressDarkIcon from "../../assets/icons/Logo/ExpressDark.svg";
import FigmaIcon from "../../assets/icons/Logo/Figma.svg";
import FlaskIcon from "../../assets/icons/Logo/Flask.svg";
import FlaskDarkIcon from "../../assets/icons/Logo/FlaskDark.svg";
import FramerIcon from "../../assets/icons/Logo/Framer.svg";
import GCPIcon from "../../assets/icons/Logo/GCP.svg";
import GitIcon from "../../assets/icons/Logo/Git.svg";
import HTMLIcon from "../../assets/icons/Logo/HTML.svg";
import JestIcon from "../../assets/icons/Logo/Jest.svg";
import JSIcon from "../../assets/icons/Logo/JS.svg";
import JSXIcon from "../../assets/icons/Logo/JSX.svg";
import MongoDBIcon from "../../assets/icons/Logo/MongoDB.svg";
import NetlifyIcon from "../../assets/icons/Logo/Netlify.svg";
import NextJSIcon from "../../assets/icons/Logo/NextJS.svg";
import NextJSDarkIcon from "../../assets/icons/Logo/NextJSDark.svg";
import NginxIcon from "../../assets/icons/Logo/Nginx.svg";
import NodeJSIcon from "../../assets/icons/Logo/NodeJS.svg";
import NuxtIcon from "../../assets/icons/Logo/Nuxt.svg";
import PhotoshopIcon from "../../assets/icons/Logo/Photoshop.svg";
import PythonIcon from "../../assets/icons/Logo/Python.svg";
import ReactIcon from "../../assets/icons/Logo/React.svg";
import ReduxIcon from "../../assets/icons/Logo/Redux.svg";
import SCSSIcon from "../../assets/icons/Logo/SCSS.svg";
import SocketIcon from "../../assets/icons/Logo/Socket.svg";
import SocketDarkIcon from "../../assets/icons/Logo/SocketDark.svg";
import StyledComponentsIcon from "../../assets/icons/Logo/styled-components.svg";
import SupabaseIcon from "../../assets/icons/Logo/Supabase.svg";
import TailwindIcon from "../../assets/icons/Logo/Tailwind.svg";
import TSIcon from "../../assets/icons/Logo/TS.svg";
import VueIcon from "../../assets/icons/Logo/Vue.svg";
import VuetifyIcon from "../../assets/icons/Logo/Vuetify.svg";
import VuexIcon from "../../assets/icons/Logo/Vuex.svg";
import ZustandIcon from "../../assets/icons/Logo/Zustand.svg";
import GithubIcon from "../../assets/icons/Logo/Github.svg";

export interface ISkill {
  name: string;
  icon: string;
  darkIcon?: string;
}

// eslint-disable-next-line
export const getIconObject = (
  name: string,
  icon: string,
  darkIcon?: string
): ISkill => ({
  name,
  icon,
  darkIcon,
});

const FRONTEND_SKILLS: ISkill[] = [
  getIconObject("HTML", HTMLIcon),
  getIconObject("CSS", CSSIcon),
  getIconObject("JavaScript", JSIcon),
  getIconObject("TypeScript", TSIcon),
  getIconObject("React", ReactIcon),
  getIconObject("NextJS", NextJSIcon, NextJSDarkIcon),
  getIconObject("Redux", ReduxIcon),
  getIconObject("Vue", VueIcon),
  getIconObject("NuxtJS", NuxtIcon),
  getIconObject("Vuex", VuexIcon),
  getIconObject("Zustand", ZustandIcon),
  getIconObject("SCSS", SCSSIcon),
  getIconObject("Bootstrap", BootstrapIcon),
  getIconObject("TailwindCSS", TailwindIcon),
  getIconObject("Vuetify", VuetifyIcon),
  getIconObject("JSX", JSXIcon),
  getIconObject("WebSocket", SocketIcon, SocketDarkIcon),
  getIconObject("Bulma", BulmaIcon),
  getIconObject("Framer", FramerIcon),
  getIconObject("Ant Design", AntDesignIcon),
  getIconObject("Jest", JestIcon),
  getIconObject("styled-components", StyledComponentsIcon),
];

const DESIGN_SKILLS: ISkill[] = [
  getIconObject("Figma", FigmaIcon),
  getIconObject("Adobe Photoshop", PhotoshopIcon),
  getIconObject("Affinity Designer", AffinityIcon),
];

const BACKEND_SKILLS: ISkill[] = [
  // python, nodejs, flask, expressjs, supabase, django, mongodb
  getIconObject("Python", PythonIcon),
  getIconObject("NodeJS", NodeJSIcon),
  getIconObject("Flask", FlaskIcon, FlaskDarkIcon),
  getIconObject("ExpressJS", ExpressIcon, ExpressDarkIcon),
  getIconObject("Supabase", SupabaseIcon),
  getIconObject("Django", DjangoIcon),
  getIconObject("MongoDB", MongoDBIcon),
];

const OTHER_SKILLS: ISkill[] = [
  getIconObject("Git", GitIcon),
  getIconObject("Github", GithubIcon),
  getIconObject("Docker", DockerIcon),
  getIconObject("GCP", GCPIcon),
  getIconObject("Google Analytics", AnalyticsIcon),
  getIconObject("Nginx", NginxIcon),
  getIconObject("Netlify", NetlifyIcon),
  getIconObject("Alibaba Cloud", AlibabaIcon),
];

// eslint-disable-next-line
export const SKILLS = [
  {
    title: "Frontend Dev",
    status: "Main account",
    skills: FRONTEND_SKILLS,
  },
  {
    title: "Designer",
    status: "2nd account",
    skills: DESIGN_SKILLS,
  },
  {
    title: "Backend Dev",
    status: "A side quest",
    skills: BACKEND_SKILLS,
  },
  {
    title: "Others",
    status: "Whenever summoned",
    skills: OTHER_SKILLS,
  },
];
