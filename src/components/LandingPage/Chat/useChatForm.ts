import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import useGlobalStore from "../../../hooks/useGlobalStore";
import { trackEvent } from "../../../utils/analytics";
import { AnalyticsEvent } from "../../../interfaces/analytics";

interface IFormData {
  question: string;
}

const useChatForm = () => {
  const [response, setResponse] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const { register, handleSubmit, getValues } = useForm<IFormData>();
  const { isAdventure } = useGlobalStore();
  const [query, setQuery] = useState<string>("");

  const animateResponse = (response: string) => {
    setIsTyping(true);

    let i = 0;
    const responseLength = response.length;

    const interval = setInterval(() => {
      setResponse(response.slice(0, i));

      if (i > responseLength) {
        clearInterval(interval);
        setIsTyping(false);
      }

      i += 1 + Math.floor(Math.random() * 3);
    }, 50);
  };

  const getDefaultResponse = useCallback(() => {
    let defaultText =
      "While I'd love to implement the AI chatbot, I'm not sure if I have the time to do so.";

    if (isAdventure) {
      defaultText +=
        " For now, try to zoom-out or scroll around. If you are bored, play around with the text & shapes in this page. They're fully functional :D";
    } else {
      defaultText += " For now, please kindly wait for further updates :D";
    }

    return defaultText;
  }, [isAdventure]);

  const onSubmit = (data: IFormData) => {
    trackEvent(AnalyticsEvent.FORM, "submit chat form", data);
    animateResponse(getDefaultResponse());
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void handleSubmit(onSubmit)();
  };

  const handleChange: React.FormEventHandler<HTMLFormElement> = () => {
    const { question } = getValues();
    setQuery(question);
  };

  return {
    query,
    register,
    handleChange,
    handleFormSubmit,
    response,
    isTyping,
  };
};

export default useChatForm;
