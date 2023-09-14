import { lazy } from "react";
// @ts-ignore
import { ReactComponent as GithubIcon } from "../../../assets/icons/Logo/Github.svg";
// @ts-ignore
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/Logo/LinkedIn.svg";
// @ts-ignore
import { ReactComponent as WhatsAppIcon } from "../../../assets/icons/Logo/WhatsApp.svg";

import useTheme from "../../../hooks/useTheme";
import AdventureOnly from "../../template/AdventureOnly";
import Settings from "./Settings";
import SocialLink from "./SocialLink";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { NavigationMode } from "../../../interfaces/global";

const GuideButton = lazy(() => import("./GuideButton"));

const NavigationConfig = () => {
  const { theme } = useTheme();
  const { navigationMode } = useGlobalStore();
  const isAdventure = navigationMode === NavigationMode.ADVENTURE;
  const position = isAdventure ? "fixed" : "absolute";

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 w-screen h-screen pointer-events-none touch-none z-[60]">
      <div
        className={`relative ${
          isAdventure ? "" : "w-full h-full max-w-[1600px] mx-auto"
        }`}
      >
        <div
          className="fixed top-4 left-6 z-[200] touch-auto pointer-events-auto"
          style={{ color: theme.colorText, position }}
        >
          Christopher Ivan Gunardi
        </div>
        <div
          style={{ position }}
          className="fixed bottom-4 right-6 flex items-center gap-2 z-[200] touch-auto pointer-events-auto"
        >
          <SocialLink
            icon={LinkedInIcon as () => JSX.Element}
            link="https://www.linkedin.com/in/christopher-ivan-gunardi/"
          />
          <SocialLink
            icon={GithubIcon as () => JSX.Element}
            link="https://github.com/chris-ivan"
          />
          <SocialLink
            icon={WhatsAppIcon as () => JSX.Element}
            link="https://wa.me/6287784795500/"
          />
          <AdventureOnly>
            <GuideButton />
          </AdventureOnly>
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default NavigationConfig;
