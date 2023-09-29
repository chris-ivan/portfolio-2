import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AnalyticsEvent } from "../../../interfaces/analytics";
import ReactGA from "react-ga4";
import { NotificationContext } from "../../../context/NotificationContext";

const ENDPOINT = import.meta.env.VITE_BACKEND_URL;
const URL = `${ENDPOINT}/v1/query`;

interface IFormData {
  question: string;
}

const useChatForm = () => {
  const [response, setResponse] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const { register, handleSubmit, getValues, reset } = useForm<IFormData>();
  const { toastError } = useContext(NotificationContext);
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

  const onSubmit = async (data: IFormData) => {
    if (!query) return;

    try {
      setIsTyping(true);
      setResponse("");
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const answer = await response.text();

      ReactGA.event({
        category: AnalyticsEvent.FORM,
        action: "ask_question",
        label: `${data.question} - ${answer}`,
      });

      animateResponse(answer);
      reset();
    } catch (err) {
      toastError("Error: " + JSON.stringify(err));

      ReactGA.event({
        category: AnalyticsEvent.FORM,
        action: "ask_question",
        label: `[ERROR] ${data.question} - ${JSON.stringify(err)}`,
      });

      animateResponse("Oops, something went wrong. Please try again later.");
    } finally {
      setIsTyping(false);
    }
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
