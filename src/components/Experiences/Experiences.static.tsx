import ITBLogo from "../../assets/images/Interests/logo-itb.webp";
import TaniHubLogo from "../../assets/images/Interests/logo-tanihub.webp";
import ShopeeLogo from "../../assets/images/Interests/logo-shopee.webp";
import SinarmasLogo from "../../assets/images/Interests/logo-sinarmas.webp";
import CitreLogo from "../../assets/images/Interests/logo-citre.webp";
import { navigateToFrame } from "../../utils/navigation";
import { FRAME_KEY } from "../../interfaces/frame";

export interface IExperience {
  title: string;
  image: string;
  role: string;
  description: string[];
  notes?: React.ReactNode;
}

// eslint-disable-next-line
export const EXPERIENCES: IExperience[] = [
  {
    title: "Bandung Institute of Technology",
    image: ITBLogo,
    role: "Bachelor’s degree",
    description: [
      "You might have never heard the name, but it's one of the best universities in my country.",
      "Some recruiters might look for this, so just in case, my GPA was 3.8/4.0 :D",
    ],
  },
  {
    title: "TaniHub (TaniFund)",
    image: TaniHubLogo,
    role: "Frontend Engineer Intern - 3 months",
    description: [
      "A P2P lending startup in Indonesia, mainly focused in funding local farmers.",
      "Created some static pages, built some internal dashboard features, worked on some small core features.",
    ],
    notes: "Tech stack: Vue, Nuxt, SCSS, Vuex, Vuetify, Bulma",
  },
  {
    title: "Shopee",
    image: ShopeeLogo,
    role: "Frontend Engineer Intern - 10 months",
    description: [
      "A multinational e-commerce mainly focused in SEA with ~173.9M (i) monthly users.",
      "Developed 3 CRM campaign websites and multiple React libraries for payment system.",
    ],
    notes: "Tech stack: TypeScript, React, Redux, styled-components, Jest",
  },
  {
    title: "Sinarmas",
    image: SinarmasLogo,
    role: "Fulltime Frontend Engineer - since Feb 2023",
    description: [
      "A huge multisector company in Indonesia, mainly focused in banking, insurance, and property.",
      "Developed a websocket-based customer center website and a messaging platform dashboard.",
    ],
    notes: "Tech stack: TypeScript, React, Zustand, TailwindCSS, Jest",
  },
  {
    title: "Freelance",
    image: CitreLogo,
    role: "Fullstack Developer & Designer - 3 years+",
    description: [
      "Primarily working on small-medium scale websites for local companies and campus organizations.",
      "Admin dashboards, mini e-commerce, cashier systems, etc",
    ],
    notes: (
      <p>
        Tech stack: visit my{" "}
        <span
          onClick={() => navigateToFrame(FRAME_KEY.SKILLS)}
          className="underline hover:text-blue cursor-pointer"
        >
          skills section
        </span>
      </p>
    ),
  },
];
