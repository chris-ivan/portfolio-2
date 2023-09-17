import { FC } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button: FC<IButton> = (props) => {
  const { children, disabled, loading, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className="flex items-center gap-2 md:gap-4 custom-button bg-blue hover:bg-orange disabled:bg-grey transition-colors text-white pt-2 pb-2 px-4 md:py-4 md:px-6"
    >
      {loading && <LoadingSpinner />}
      <span className="pt-1">{children}</span>
    </button>
  );
};

export default Button;
