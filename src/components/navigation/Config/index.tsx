// @ts-ignore
import { ReactComponent as GithubIcon } from "../../../assets/icons/Logo/Github.svg";
// @ts-ignore
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/Logo/LinkedIn.svg";
// @ts-ignore
import { ReactComponent as WhatsAppIcon } from "../../../assets/icons/Logo/WhatsApp.svg";

import useTheme from "../../../hooks/useTheme";
import Settings from "./Settings";
import SocialLink from "./SocialLink";

const NavigationConfig = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="fixed top-4 left-6" style={{ color: theme.colorText }}>
        Christopher Ivan Gunardi
      </div>
      <div className="fixed bottom-4 right-6 flex items-center gap-2">
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
        <Settings />
      </div>
    </>
  );
};

export default NavigationConfig;
