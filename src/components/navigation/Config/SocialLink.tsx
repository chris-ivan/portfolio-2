import { useCallback } from "react";
import { trackEvent } from "../../../utils/analytics";
import { AnalyticsEvent } from "../../../interfaces/analytics";

interface ISocialLink {
  icon: () => JSX.Element;
  link: string;
  label: string;
}

const SocialLink = (props: ISocialLink) => {
  const { icon: Icon, link, label } = props;

  const handleClick = useCallback(() => {
    trackEvent(AnalyticsEvent.NAVIGATION, `click ${label} social link`);
  }, [label]);

  return (
    <a
      className="scale-[60%] md:scale-75"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      title={label}
      aria-label={label}
    >
      {/* @ts-ignore */}
      <Icon className="text-black hover:text-dark-grey dark:text-white dark:hover:text-grey" />
    </a>
  );
};

export default SocialLink;
