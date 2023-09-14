import { Suspense, ReactNode, FC } from "react";
import useGlobalStore from "../../hooks/useGlobalStore";

interface IAdventureOnly {
  children: ReactNode;
}

const AdventureOnly: FC<IAdventureOnly> = (props) => {
  const { children } = props;
  const { isAdventure } = useGlobalStore();

  return isAdventure ? <Suspense>{children}</Suspense> : null;
};

export default AdventureOnly;
