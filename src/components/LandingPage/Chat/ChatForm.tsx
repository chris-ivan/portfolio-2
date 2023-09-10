import Input from "../../UI/Input";
import TextArea from "../../UI/Input/TextArea";
import useChatForm from "./useChatForm";

const ChatForm = () => {
  const { register, handleFormSubmit } = useChatForm();

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex w-full">
        <div className="p-2 border border-r-0 border-grey w-full">
          <Input
            label="Name/initial"
            placeholder="Preferably a real one."
            className="w-full"
            {...register("question")}
          />
        </div>
        <div className="mb-6 p-2 border border-t-0 border-grey w-full">
          <TextArea placeholder="Waiting for your questions..." rows={6} />
        </div>
      </div>
    </form>
  );
};

export default ChatForm;
