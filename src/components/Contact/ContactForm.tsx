import Input from "../UI/Input";
import Button from "../UI/Button";
import TextArea from "../UI/Input/TextArea";
import useContactForm from "./useContactForm";
import FocusTrap from "focus-trap-react";

const ContactForm = () => {
  const { register, handleFormSubmit } = useContactForm();

  return (
    <FocusTrap>
      <form onSubmit={handleFormSubmit}>
        <div className="flex w-full">
          <div className="p-2 border border-r-0 border-grey w-full">
            <Input
              label="Name/initial"
              placeholder="Preferably a real one."
              className="w-full"
              {...register("name")}
            />
          </div>
          <div className="p-2 border border-grey w-full">
            <Input
              label="Contact"
              placeholder="Email, WhatsApp, Tinder, anything"
              {...register("contact")}
            />
          </div>
        </div>
        <div className="mb-6 p-2 border border-t-0 border-grey w-full">
          <TextArea
            placeholder="Spill the tea here..."
            {...register("message")}
            rows={6}
          />
        </div>
        <Button type="submit">Send to Me</Button>
      </form>
    </FocusTrap>
  );
};

export default ContactForm;
