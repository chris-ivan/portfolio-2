import { RefObject, useEffect, useState } from "react";

interface IUseShowSettings {
  ref: RefObject<HTMLDivElement>;
}

const useShowSettings = (props: IUseShowSettings) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const { ref } = props;

  const toggleShowSettings = () => {
    setShowSettings((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowSettings(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { showSettings, toggleShowSettings };
};

export default useShowSettings;
