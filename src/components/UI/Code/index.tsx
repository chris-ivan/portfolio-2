import { FC, ReactNode } from "react";

interface ICode {
  children: ReactNode;
}

const Code: FC<ICode> = (props) => {
  const { children } = props;
  return (
    <code className="mx-1 px-1 bg-white dark:bg-black text-blue dark:text-light-blue">
      {children}
    </code>
  );
};

export default Code;
