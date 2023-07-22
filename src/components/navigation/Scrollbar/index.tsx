import useScrollbar from "./useScrollbar";

const Scrollbar = () => {
  const horizontalScrollbar = useScrollbar();

  return (
    <>
      <div className="fixed bottom-0 left-0 right-3 h-3">
        <div
          style={{
            width: horizontalScrollbar.width,
            transform: `translateX(${horizontalScrollbar.left}px)`,
          }}
          className="h-full border border-solid border-grey cursor-pointer"
        />
      </div>
      <div className="fixed top-0 right-0 bottom-3 w-3">
        <div
          style={{
            height: horizontalScrollbar.height,
            transform: `translateY(${horizontalScrollbar.top}px)`,
          }}
          className="h-full w-full border border-solid border-grey cursor-pointer"
        />
      </div>
    </>
  );
};

export default Scrollbar;
