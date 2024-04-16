/* eslint-disable react-hooks/rules-of-hooks */
import {
  Remirror,
  ThemeProvider,
  useHelpers,
  useKeymap,
  useRemirror,
  useRemirrorContext,
} from "@remirror/react";
import { Menu } from "./Toolbar.tsx";
import React, {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useEffect,
  useRef,
} from "react";
import {
  BoldExtension,
  BulletListExtension,
  OrderedListExtension,
  CodeExtension,
  HeadingExtension,
  ItalicExtension,
  MarkdownExtension,
  StrikeExtension,
  UnderlineExtension,
  NodeFormattingExtension,
} from "remirror/extensions";

export interface EditorRef {
  setContent: (content: any) => void;
}

interface RemirrorEditorLiveProps {
  handleSave: (markdown: string) => void;
  initialContent: any;
  children: React.ReactNode;
}

interface ImperativeHandleProps {
  content: any;
}

const ImperativeHandle = forwardRef(
  ({ content }: ImperativeHandleProps, ref: Ref<EditorRef>) => {
    const { setContent } = useRemirrorContext({
      autoUpdate: true,
    });

    useImperativeHandle(ref, () => ({ setContent }));

    useEffect(() => {
      setContent(content);
    }, [content, setContent]);

    return <></>;
  }
);

const RemirrorEditorLive: React.FC<RemirrorEditorLiveProps> = ({
  handleSave,
  initialContent,
  children,
}) => {
  const editorRef = useRef<EditorRef | null>(null);
  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension({}),
      new ItalicExtension(),
      new MarkdownExtension({}),
      new HeadingExtension({}),
      new StrikeExtension(),
      new UnderlineExtension(),
      new CodeExtension(),
      new BulletListExtension({}),
      new OrderedListExtension(),
      new NodeFormattingExtension({}),
    ],
    content: initialContent,
    selection: "start",
    stringHandler: "markdown",
  });

  const hooks = [
    () => {
      const { getJSON, getMarkdown } = useHelpers();

      const handleSaveShortcut = useCallback(
        ({ state }: any) => {
          const markdown = getMarkdown(state);
          handleSave(markdown);

          return true;
        },
        [getJSON, getMarkdown, handleSave]
      );

      useKeymap("Mod-s", handleSaveShortcut);
    },
  ];

  return (
    // <ThemeProvider>
    <div className="overflow-scroll rounded-lg bg-white shadow">
      <div className="h-[calc(100vh-120px)] px-4 py-5 sm:p-6">
        <Remirror
          manager={manager}
          initialContent={state}
          autoRender="end"
          hooks={hooks}
        >
          <Menu>{children}</Menu>

          <ImperativeHandle ref={editorRef} content={initialContent} />
        </Remirror>
      </div>
    </div>
    // </ThemeProvider>
  );
};

export default RemirrorEditorLive;
