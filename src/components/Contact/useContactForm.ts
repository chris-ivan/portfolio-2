import { useForm } from "react-hook-form";
import { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";

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
  const { register, handleSubmit } = useForm<IFormData>();
  const { toastSuccess, toastError } = useContext(NotificationContext);

  const onSubmit = async (data: IFormData) => {
    const parameters = {
      service_id: SERVICE,
      template_id: TEMPLATE,
      user_id: USER_ID,
      template_params: { ...data },
    };

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
    }
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void handleSubmit(onSubmit)();
  };

  return { register, handleFormSubmit };
};

export default useContactForm;
