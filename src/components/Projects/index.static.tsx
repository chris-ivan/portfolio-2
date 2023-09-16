import NewTab from "../UI/NewTab";
import {
  IProject,
  ProjectRoleEnum,
  SKILLS,
  generateImageData,
} from "./Projects.static";

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
      image: generateImageData("", "custom-made camera functionality"),
    },
    {
      title: "Unique tech stack",
      summary: "Unique state management lib (Zustand - 400x faster than redux)",
      description:
        "I implemented Zustand as the state management library. It’s way lighter and faster than Redux.",
      image: generateImageData("", "zustand code for state management"),
    },
    {
      title: "Clean Code",
      summary: "Clean React codebase.",
      description:
        "Tons of reusable custom hooks to abstract complexity, reusable context providers, forms, etc",
      image: generateImageData("", "react code snippet"),
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
      image: generateImageData("", "random stuff in this website"),
    },
    {
      title: "Playable landing page",
      summary: "Playable landing page (on desktop version)",
      description:
        "Click, drag, resize whatever you want. Not the cleanest code, but it’s definitely not a mess either.",
      image: generateImageData(
        "",
        "elements in landing page are highly interactive"
      ),
    },
    {
      title: "Sophisticated AI assistant (soon)",
      summary: "Sophisticated AI assistant :D (soon)",
      description:
        "Ask away. Hopefully it will give you an appropriate response.",
      image: generateImageData("", "ai assistant chatbox"),
    },
  ],
};

const PERSONAL_WEB1: IProject = {
  tag: "Favorite Design",
  title: "My Old Portfolio Website",
  mainImage: generateImageData(
    "",
    "user interface of my previous portfolio website"
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
      image: generateImageData("", "color scheme of the website"),
    },
    {
      title: "Scrolling interactions",
      summary: "Scrolling interactions, lots of animations",
      description:
        "The images move as you move your mouse, the background decorations scrolls slower (or faster) than your scroller.",
      image: generateImageData("", "scrolling interactions in the website"),
    },
    {
      title: "The OG JavaScript",
      summary: "The OG JavaScript :D",
      description:
        "Written 3 years ago, so it looks nasty if you visit the codebase now, but it was definitely a great kick-off.",
      image: generateImageData("", "javascript code snippet"),
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
      image: generateImageData("", "react code snippet"),
    },
    {
      title: "Programatically generated",
      summary: "Programatically generated questions & answers.",
      description:
        "Hence most correct answers can be guessed rather than calculated :”",
      image: generateImageData("", "calculation image"),
    },
    {
      title: "A rough start",
      summary: "Nothing special, it's just me reminiscing the past :D",
      description:
        "14-day marathon working on this simple website every night. But this small project got me into web dev :”",
      image: generateImageData("", "code snippet of the website"),
    },
  ],
};

// eslint-disable-next-line
export const PROJECTS = [SINDU, PERSONAL_WEB2, PERSONAL_WEB1, INSANE_MATH];
