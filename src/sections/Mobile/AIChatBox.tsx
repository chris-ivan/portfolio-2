import ChatForm from "../../components/LandingPage/Chat/ChatForm";
import useTheme from "../../hooks/useTheme";
import AnimateText from "./../../components/template/AnimateText/index";

const AIChatBox = () => {
  const { theme } = useTheme();

  return (
    <div className="my-12">
      <h2>
        <AnimateText>Get to know me :D</AnimateText>
      </h2>
      <p className="mt-2 mb-4" style={{ color: theme.colorTextSecondary }}>
        I’m not online 24/7, but my assistant does. Ask him anything.
      </p>
      <ChatForm />
    </div>
  );
};

export default AIChatBox;
