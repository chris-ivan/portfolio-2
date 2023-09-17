import NewTab from "../UI/NewTab";
import {
  IProject,
  ProjectRoleEnum,
  SKILLS,
  generateImageData,
} from "./Projects.static";

import SinduHighlight1Img from "../../assets/images/projects/sindu-1.webp";
import SinduHighlight2Img from "../../assets/images/projects/sindu-2.webp";
import SinduHighlight3Img from "../../assets/images/projects/sindu-3.webp";
import SinduHighlight1MinImg from "../../assets/images/projects/sindu-1-min.webp";
import SinduHighlight2MinImg from "../../assets/images/projects/sindu-2-min.webp";
import SinduHighlight3MinImg from "../../assets/images/projects/sindu-3-min.webp";

import PersonalWeb2Highlight1Img from "../../assets/images/projects/this-website-1.webp";
import PersonalWeb2Highlight2Img from "../../assets/images/projects/this-website-2.webp";
import PersonalWeb2Highlight3Img from "../../assets/images/projects/this-website-3.webp";
import PersonalWeb2Highlight1MinImg from "../../assets/images/projects/this-website-1-min.webp";
import PersonalWeb2Highlight2MinImg from "../../assets/images/projects/this-website-2-min.webp";
import PersonalWeb2Highlight3MinImg from "../../assets/images/projects/this-website-3-min.webp";

import PersonalWeb1Highlight1Img from "../../assets/images/projects/old-portfolio-1.webp";
import PersonalWeb1Highlight2Img from "../../assets/images/projects/old-portfolio-2.webp";
import PersonalWeb1Highlight3Img from "../../assets/images/projects/old-portfolio-3.webp";
import PersonalWeb1Highlight1MinImg from "../../assets/images/projects/old-portfolio-1-min.webp";
import PersonalWeb1Highlight2MinImg from "../../assets/images/projects/old-portfolio-2-min.webp";
import PersonalWeb1Highlight3MinImg from "../../assets/images/projects/old-portfolio-3-min.webp";

import InsaneMathHighlight1Img from "../../assets/images/projects/insane-math-1.webp";
import InsaneMathHighlight2Img from "../../assets/images/projects/insane-math-2.webp";
import InsaneMathHighlight3Img from "../../assets/images/projects/insane-math-3.webp";
import InsaneMathHighlight1MinImg from "../../assets/images/projects/insane-math-1-min.webp";
import InsaneMathHighlight2MinImg from "../../assets/images/projects/insane-math-2-min.webp";
import InsaneMathHighlight3MinImg from "../../assets/images/projects/insane-math-3-min.webp";

const SINDU: IProject = {
  tag: "Cleanest Code",
  title: "Sindu Kas Dashboard",
  mainImage: generateImageData("", "user interface of sindu kas website"),
  tldr: (
    <p>
      The UI looks decent, but I just love how clean the React/Next/TS codebase
      is. I spent a lot of time improving the UX as well, since the
      functionality itself is a bit basic (CRUD website).{" "}
      <s>Well tbh, lots of even open source projects have cleaner codebases</s>
    </p>
  ),
  role: [ProjectRoleEnum.FE, ProjectRoleEnum.UI],
  techStack: [
    SKILLS.REACT,
    SKILLS.TS,
    SKILLS.ZUSTAND,
    SKILLS.SCSS,
    SKILLS.FIGMA,
  ],
  highlights: [
    {
      title: "A fancy camera?",
      summary: "Custom-made camera",
      description:
        "Rotateable, flippable, switchable. A simple custom-made camera that just works.",
      image: generateImageData(
        SinduHighlight1Img,
        "custom-made camera functionality",
        SinduHighlight1MinImg
      ),
    },
    {
      title: "Unique tech stack",
      summary: "Unique state management lib (Zustand - 400x faster than redux)",
      description:
        "I implemented Zustand as the state management library. It’s way lighter and faster than Redux.",
      image: generateImageData(
        SinduHighlight2Img,
        "zustand code for state management",
        SinduHighlight2MinImg
      ),
    },
    {
      title: "Clean Code",
      summary: "Clean React codebase.",
      description:
        "Tons of reusable custom hooks to abstract complexity, reusable context providers, forms, etc",
      image: generateImageData(
        SinduHighlight3Img,
        "react code snippet",
        SinduHighlight3MinImg
      ),
    },
  ],
};

const PERSONAL_WEB2: IProject = {
  tag: "Most Complicated",
  title: "This website.",
  mainImage: generateImageData("", "user interface of this website"),
  tldr: "As you can see, this is not your typical portfolio website. I mean, portfolio website is the only website that you can build totally as you want. Might as well go a bit anti-mainstream and code whatever passes my mind.",
  role: [ProjectRoleEnum.FULLSTACK, ProjectRoleEnum.UI],
  techStack: [SKILLS.REACT, SKILLS.TAILWIND, SKILLS.TS, SKILLS.FIGMA],
  highlights: [
    {
      title: "Random stuff everywhere",
      summary: "Lots of fun things (on desktop version)",
      description:
        "A website that just fits my personality. A lot of things are going on here and there.",
      image: generateImageData(
        PersonalWeb2Highlight1Img,
        "random stuff in this website",
        PersonalWeb2Highlight1MinImg
      ),
    },
    {
      title: "Playable landing page",
      summary: "Playable landing page (on desktop version)",
      description:
        "Click, drag, resize whatever you want. Not the cleanest code, but it’s definitely not a mess either.",
      image: generateImageData(
        PersonalWeb2Highlight2Img,
        "elements in landing page are highly interactive",
        PersonalWeb2Highlight2MinImg
      ),
    },
    {
      title: "Sophisticated AI assistant (soon)",
      summary: "Sophisticated AI assistant :D (soon)",
      description:
        "Ask away. Hopefully it will give you an appropriate response.",
      image: generateImageData(
        PersonalWeb2Highlight3Img,
        "ai assistant chatbox",
        PersonalWeb2Highlight3MinImg
      ),
    },
  ],
};

const PERSONAL_WEB1: IProject = {
  tag: "Favorite Design",
  title: "My Old Portfolio Website",
  mainImage: generateImageData(
    PersonalWeb1Highlight1Img,
    "user interface of my previous portfolio website",
    PersonalWeb1Highlight1MinImg
  ),
  tldr: "I thought that CMS would make updating my portfolio data easier, and that’s totally right. Except I’m just too lazy to update my data and prefer to code something new from scratch. Anyway I love the UI.",
  role: [ProjectRoleEnum.FULLSTACK, ProjectRoleEnum.UI],
  techStack: [
    SKILLS.REACT,
    SKILLS.SCSS,
    SKILLS.SANITY,
    SKILLS.PHOTOSHOP,
    SKILLS.FRAMER,
  ],
  highlights: [
    {
      title: "It just looks beautiful",
      summary: "It just looks beautiful",
      description:
        "White text on a dark blue background, my favorite safe color palette.",
      image: generateImageData(
        PersonalWeb1Highlight1Img,
        "color scheme of the website",
        PersonalWeb1Highlight1MinImg
      ),
    },
    {
      title: "Scrolling interactions",
      summary: "Scrolling interactions, lots of animations",
      description:
        "The images move as you move your mouse, the background decorations scrolls slower (or faster) than your scroller.",
      image: generateImageData(
        PersonalWeb1Highlight2Img,
        "scrolling interactions in the website",
        PersonalWeb1Highlight2MinImg
      ),
    },
    {
      title: "The OG JavaScript",
      summary: "The OG JavaScript :D",
      description:
        "Written 3 years ago, so it looks nasty if you visit the codebase now, but it was definitely a great kick-off.",
      image: generateImageData(
        PersonalWeb1Highlight3Img,
        "javascript code snippet",
        PersonalWeb1Highlight3MinImg
      ),
    },
  ],
};

const INSANE_MATH: IProject = {
  tag: "My First Project",
  title: "Insane Math (2020)",
  mainImage: generateImageData("", "user interface of insane math"),
  tldr: "A simple quiz website with randomly generated multiple-choice math questions (& answers). Definitely the ugliest in terms of UI & code, but it’s just memorable.",
  role: [ProjectRoleEnum.FE, ProjectRoleEnum.UI],
  techStack: [SKILLS.REACT, SKILLS.HTML, SKILLS.CSS, SKILLS.JS, SKILLS.FIGMA],
  highlights: [
    {
      title: "My start line",
      summary: (
        <p>
          My first ever website, Special credit to{" "}
          <NewTab href="https://michaelpege.com/" fontSize={12}>
            @michael_pege
          </NewTab>
        </p>
      ),
      description: (
        <p>
          My first ever website, built with pure HTML, CSS, and CDN-based React.
          <br />
          Special credit to{" "}
          <NewTab href="https://michaelpege.com/" fontSize={16}>
            @michael_pege
          </NewTab>
        </p>
      ),
      image: generateImageData(
        InsaneMathHighlight1Img,
        "react code snippet",
        InsaneMathHighlight1MinImg
      ),
    },
    {
      title: "Programatically generated",
      summary: "Programatically generated questions & answers.",
      description:
        "Hence most correct answers can be guessed rather than calculated :”",
      image: generateImageData(
        InsaneMathHighlight2Img,
        "calculation image",
        InsaneMathHighlight2MinImg
      ),
    },
    {
      title: "A rough start",
      summary:
        "...we really did use Google Drive for version controlling back then",
      description:
        "14-day marathon working on this simple website every night. And yes, we used Google Drive instead of Git.",
      image: generateImageData(
        InsaneMathHighlight3Img,
        "code snippet of the website",
        InsaneMathHighlight3MinImg
      ),
    },
  ],
};

// eslint-disable-next-line
export const PROJECTS = [SINDU, PERSONAL_WEB2, PERSONAL_WEB1, INSANE_MATH];
