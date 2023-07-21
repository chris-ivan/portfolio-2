interface ISocialLink {
  icon: () => JSX.Element;
  link: string;
}

const SocialLink = (props: ISocialLink) => {
  const { icon: Icon, link } = props;

  return (
    <a
      className="scale-75"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* @ts-ignore */}
      <Icon className="text-black hover:text-grey dark:text-white dark:hover:text-grey" />
    </a>
  );
};

export default SocialLink;
