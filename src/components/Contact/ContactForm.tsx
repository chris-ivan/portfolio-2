import Input from "../UI/Input";
import Button from "../UI/Button";
import TextArea from "../UI/Input/TextArea";
import useContactForm from "./useContactForm";

const ContactForm = () => {
  const { register, handleFormSubmit } = useContactForm();

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col md:flex-row w-full">
        <div className="p-2 border md:border-r-0 border-grey w-full">
          <Input
            label="Name/initial"
            placeholder="Preferably a real one."
            className="w-full"
            {...register("name")}
          />
        </div>
        <div className="p-2 border border-t-0 md:border-t border-grey w-full">
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
  );
};

export default ContactForm;
