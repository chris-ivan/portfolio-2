import { forwardRef } from "react";
import useTheme from "../../../hooks/useTheme";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { theme } = useTheme();
  const { label, placeholder, className = "", ...res } = props;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label style={{ color: theme.colorTextSecondary }} className="md:mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        placeholder={placeholder}
        className={`bg-transparent border-none outline-none ${className}`}
        {...res}
      />
    </div>
  );
});

export default Input;
