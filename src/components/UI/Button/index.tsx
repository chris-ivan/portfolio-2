import { FC } from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<IButton> = (props) => {
  const { children } = props;
  return (
    <button className="custom-button bg-blue hover:bg-orange transition-colors text-white py-4 px-6">
      {children}
    </button>
  );
};

export default Button;
