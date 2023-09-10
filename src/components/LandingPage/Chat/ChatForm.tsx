// import SendIcon from "../../../assets/icons/UI/SendIcon";
import useTheme from "../../../hooks/useTheme";
import useViewport from "../../../hooks/useViewport";
import Input from "../../UI/Input";
import useChatForm from "./useChatForm";
import { useMemo } from "react";
// @ts-ignore
import { ReactComponent as SendIcon } from "../../../assets/icons/UI/Send.svg";
import ChatCursor from "./ChatCursor";
import FocusTrap from "focus-trap-react";

const ChatForm = () => {
  const { register, handleFormSubmit, response, isTyping } = useChatForm();
  const { height } = useViewport();
  const { theme } = useTheme();

  const formY = useMemo(() => {
    return height / 4 + 300;
  }, [height]);

  const placeholderText = useMemo(() => {
    if (isTyping && !response) return "Loading response...";
    if (!response) return "Waiting for your questions...";
    return "";
  }, [isTyping, response]);

  return (
    <FocusTrap>
      <form
        onSubmit={handleFormSubmit}
        className="absolute w-[500px] bg-white left-[50%] translate-x-[-50%]"
        style={{
          top: formY,
          backgroundColor: theme.colorBgBase,
          color: theme.colorText,
        }}
      >
        <div className="flex w-full">
          <div className="p-2 flex-1 flex items-center border border-r-0 border-grey w-full">
            <Input
              placeholder="Ask me anything..."
              className="w-full"
              {...register("question")}
            />
          </div>
          <div className="p-2 pb-1 border border-grey">
            <button disabled={isTyping} type="submit" className="group">
              <SendIcon className="transition-[fill] text-blue group-focus:text-orange hover:text-orange cursor-pointer group-disabled:cursor-not-allowed group-disabled:text-grey" />
            </button>
          </div>
        </div>
        <div className="p-2 border border-t-0 border-grey w-full h-[120px] overflow-y-auto">
          {<span>{response}</span>}
          {isTyping && <ChatCursor />}
          {<span className="placeholder-text">{placeholderText}</span>}
        </div>
      </form>
    </FocusTrap>
  );
};

export default ChatForm;
