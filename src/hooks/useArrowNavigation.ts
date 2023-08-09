interface IUseArrowNavigation {
  handleMove2D: (dx: number, dy: number) => void;
}

const MULTIPLIER = 10;

const handleArrowNavigation = (e: KeyboardEvent) => {
  if (e.key === "ArrowDown") {
    return [0, 1];
  } else if (e.key === "ArrowUp") {
    return [0, -1];
  } else if (e.key === "ArrowLeft") {
    return [-1, 0];
  } else if (e.key === "ArrowRight") {
    return [1, 0];
  }
  return [0, 0];
};

const useArrowNavigation = (props: IUseArrowNavigation) => {
  const { handleMove2D } = props;

  const onKeyDown = (e: KeyboardEvent) => {
    const [dx, dy] = handleArrowNavigation(e);
    if (dx === 0 && dy === 0) return;
    handleMove2D(dx * MULTIPLIER, dy * MULTIPLIER);
  };

  return { onKeyDown };
};

export default useArrowNavigation;
