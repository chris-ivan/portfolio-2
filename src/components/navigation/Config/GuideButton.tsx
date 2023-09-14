import { Suspense, lazy, useRef } from "react";
// @ts-ignore
import { ReactComponent as QuestionIcon } from "../../../assets/icons/UI/question-circle-icon.svg";
import { useNavigationStore } from "../../../store/navigationStore";
import LoadingSpinner from "../../UI/Loading/LoadingSpinner";
import useTheme from "../../../hooks/useTheme";

const Guide = lazy(() => import("../Guide"));

const GuideButton = () => {
  const { theme } = useTheme();
  const { setShowGuide } = useNavigationStore();

  const isClicked = useRef<boolean>(false);

  const handleClick = () => {
    if (!isClicked.current) {
      isClicked.current = true;
    }

    setShowGuide(true);
  };

  return (
    <>
      {isClicked.current && (
        <Suspense
          fallback={
            <div
              style={{
                backgroundColor: theme.colorBgSecondary,
                borderTop: `1px solid ${theme.colorBorder}`,
              }}
              className="flex text-grey items-center justify-center fixed bottom-0 left-0 right-0 w-full h-[240px] z-[300]"
            >
              <LoadingSpinner />
            </div>
          }
        >
          <Guide />
        </Suspense>
      )}
      <div
        onClick={handleClick}
        className="cursor-pointer scale-75 text-black hover:text-dark-grey dark:text-white dark:hover:text-grey"
      >
        <QuestionIcon />
      </div>
    </>
  );
};

export default GuideButton;
