import { useEffect } from "react";

interface IUseCloseOnClickOutside {
  ref: React.RefObject<HTMLDivElement>;
  onClickOutside: () => void;
}

const useOnClickOutside = (props: IUseCloseOnClickOutside) => {
  const { ref, onClickOutside } = props;

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOnClickOutside;
