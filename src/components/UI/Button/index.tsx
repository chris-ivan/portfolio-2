import { FC } from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<IButton> = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      {...rest}
      className="custom-button bg-blue hover:bg-orange transition-colors text-white py-4 px-6"
    >
      {children}
    </button>
  );
};

export default Button;
