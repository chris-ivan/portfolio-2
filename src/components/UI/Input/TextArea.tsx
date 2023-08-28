import { FC } from "react";

interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  className?: string;
}

const TextArea: FC<ITextArea> = (props) => {
  const { placeholder, className = "", ...res } = props;

  return (
    <div className="flex flex-col w-full">
      <textarea
        placeholder={placeholder}
        className={`bg-transparent border-none outline-none ${className}`}
        {...res}
      />
    </div>
  );
};

export default TextArea;
