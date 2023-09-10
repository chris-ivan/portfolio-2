import { useForm } from "react-hook-form";

interface IFormData {
  question: string;
}

const useChatForm = () => {
  const { register, handleSubmit } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void handleSubmit(onSubmit)();
  };

  return { register, handleFormSubmit };
};

export default useChatForm;
