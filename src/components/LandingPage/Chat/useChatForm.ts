import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  NavigationMode,
  useNavigationStore,
} from "../../../store/navigationStore";

interface IFormData {
  question: string;
}

const getDefaultResponse = () => {
  const { navigationMode } = useNavigationStore.getState();

  let defaultText =
    "While I'd love to implement the AI chatbot, I'm not sure if I have the time to do so.";

  if (navigationMode === NavigationMode.ADVENTURE) {
    defaultText +=
      " For now, try to zoom-out or scroll around. If you are bored, play around with the text & shapes in this page. They're fully functional :D";
  } else {
    defaultText += " For now, please kindly wait for further updates :D";
  }

  return defaultText;
};

const useChatForm = () => {
  const [response, setResponse] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IFormData>();

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

  const onSubmit = (data: IFormData) => {
    console.log(data);
    animateResponse(getDefaultResponse());
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void handleSubmit(onSubmit)();
  };

  return { register, handleFormSubmit, response, isTyping };
};

export default useChatForm;
