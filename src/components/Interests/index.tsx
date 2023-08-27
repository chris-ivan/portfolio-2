import useTheme from "../../hooks/useTheme";

const InterestsSection = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col h-full">
      <h2
        style={{ color: theme.colorText }}
        className="mt-[88px] mb-[40px] mx-[76px] max-w-[1000px]"
      >
        I am interested in a almost everything, but here are some of{" "}
        <span style={{ color: theme.colorPrimary }}>my favourites</span> 🍕
      </h2>
      <div
        style={{ color: theme.colorTextSecondary }}
        className="flex flex-1 flex-wrap border-t border-solid border-grey dark:border-dark-grey"
      >
        <div className="py-[60px] pl-[80px] pr-[48px] w-[50%] border-r border-b border-solid border-grey dark:border-dark-grey">
          <h4>
            I enjoy playing some badminton or table tennis, but I don’t watch
            spots in general 🏓.
          </h4>
        </div>
        <div className="py-[60px] pl-[48px] pr-[80px] w-[50%] border-b border-solid border-grey dark:border-dark-grey">
          <h4>
            I rarely play games. I’d rather read some manga while listening to
            some J-Pop songs. I’m into Yorushika lately. 🎶
          </h4>
        </div>
        <div className="py-[60px] pl-[80px] pr-[48px] w-[50%] border-r border-solid border-grey dark:border-dark-grey">
          <h4>
            I’m a self proclaimed foodie, and I eat almost everything (except
            seafood, weird animals, some herbs, expired food, stale food,
            uncooked/raw chickens, etc etc...). 🍖
          </h4>
        </div>
        <div className="py-[60px] pl-[48px] pr-[80px] w-[50%]">
          <h4>
            I’m planning to learn 3D (both design and web dev) and contribute to
            open source soon(er or later). 📚
          </h4>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;
