import useTheme from "../../hooks/useTheme";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme.colorText }} className="px-[72px] py-[60px]">
      <h2 className="mb-8">
        Currently <span style={{ color: theme.colorPrimary }}>available</span>{" "}
        for love, freelance jobs and full-time permanent opportunities.
        Preferably WFH, but I’d love to fly to your country if needed. 🦅
      </h2>
      <ContactForm />
      <p className="mt-20" style={{ color: theme.colorTextTertiary }}>
        Created with effort and dedication from Bekasi, Indonesia
      </p>
    </div>
  );
};

export default ContactSection;