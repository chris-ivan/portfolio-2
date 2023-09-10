import { NavigationMode, useGlobalStore } from "../../store/globalStore";
import { Suspense, ReactNode, FC } from "react";

interface IAdventureOnly {
  children: ReactNode;
}

const AdventureOnly: FC<IAdventureOnly> = (props) => {
  const { children } = props;
  const { navigationMode } = useGlobalStore();

  return navigationMode === NavigationMode.ADVENTURE ? (
    <Suspense>{children}</Suspense>
  ) : null;
};

export default AdventureOnly;
