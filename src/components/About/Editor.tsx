import useTheme from "../../hooks/useTheme";
import CodeEditor from "@uiw/react-textarea-code-editor";
import CopyIcon from "../../assets/icons/Toolbar/CopyIcon";
import DownloadIcon from "../../assets/icons/Toolbar/DownloadIcon";
import EditorButton from "./EditorButton";
import useMarkdownEditor from "./useEditor";

const Editor = () => {
  const { code, setCode, handleCopy, handleDownload } = useMarkdownEditor();
  const { theme } = useTheme();

  return (
    <div className="border border-solid border-grey dark:border-dark-grey">
      <div className="flex items-center border-b border-solid border-grey dark:border-dark-grey">
        <div
          className="h-full flex-1 py-2 px-3 border-r border-solid border-grey dark:border-dark-grey"
          style={{ color: theme.colorTextSecondary }}
        >
          about-ivan.md
        </div>
        <div className="flex py-1 px-2">
          <EditorButton
            onClick={() => void handleCopy()}
            Icon={CopyIcon}
            label="Copy to clipboard"
          />
          <EditorButton
            onClick={handleDownload}
            Icon={DownloadIcon}
            label="Download markdown file"
          />
        </div>
      </div>
      <div className="">
        <CodeEditor
          value={code}
          language="markdown"
          placeholder="Type whatever passes your mind."
          onChange={(evn) => setCode(evn.target.value)}
          onKeyDown={(e) => e.stopPropagation()}
          padding={15}
          style={{
            fontSize: 16,
            backgroundColor: theme.colorBgBase,
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
