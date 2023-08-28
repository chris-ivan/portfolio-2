import { FC } from "react";
import useTheme from "../../../hooks/useTheme";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  className?: string;
}

const Input: FC<IInput> = (props) => {
  const { theme } = useTheme();
  const { label, placeholder, className = "", ...res } = props;

  return (
    <div className="flex flex-col w-full">
      <label style={{ color: theme.colorTextSecondary }} className="mb-1">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className={`bg-transparent border-none outline-none ${className}`}
        {...res}
      />
    </div>
  );
};

export default Input;
