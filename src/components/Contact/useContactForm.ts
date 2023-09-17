import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { NotificationContext } from "../../context/NotificationContext";
import { trackEvent } from "../../utils/analytics";
import { AnalyticsEvent } from "../../interfaces/analytics";

interface IFormData {
  name: string;
  contact: string;
  message: string;
}

const ENDPOINT = import.meta.env.VITE_EMAILJS_ENDPOINT;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE;
const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const URL = `${ENDPOINT}/api/v1.0/email/send`;

const useContactForm = () => {
  const { register, handleSubmit, getValues } = useForm<IFormData>();
  const { toastSuccess, toastError } = useContext(NotificationContext);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: IFormData) => {
    setIsLoading(true);

    const parameters = {
      service_id: SERVICE,
      template_id: TEMPLATE,
      user_id: USER_ID,
      template_params: { ...data },
    };

    trackEvent(AnalyticsEvent.FORM, "submit contact form", data);

    try {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parameters),
      });
      toastSuccess("Message sent successfully.");
    } catch (err) {
      toastError("Failed to send message. Please try again");
      toastError("Reason: " + JSON.stringify(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void handleSubmit(onSubmit)();
  };

  const handleChange: React.FormEventHandler<HTMLFormElement> = () => {
    const { name, contact, message } = getValues();
    const isFilled = (name || contact) && message;
    setIsEmpty(!isFilled);
  };

  return { isEmpty, isLoading, register, handleChange, handleFormSubmit };
};

export default useContactForm;
