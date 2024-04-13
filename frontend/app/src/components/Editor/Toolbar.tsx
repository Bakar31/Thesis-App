import {
    Toolbar,
    FormattingButtonGroup,
    HeadingLevelButtonGroup,
    VerticalDivider,
    UndoButton,
    RedoButton,
    ListButtonGroup,
    CopyButton,
    PasteButton,
    CutButton,
    TextAlignmentButtonGroup,
  } from "@remirror/react";
import React from "react";
  
  export const Menu = ({ children }: { children?: React.ReactNode }) => (
    <div className="sticky top-0 mb-2 flex items-start justify-between bg-white p-5 shadow-lg">
      <div className="shrink-0">{children}</div>
  
      <Toolbar className="flex-grow">
        <UndoButton />
        <RedoButton />
        <VerticalDivider />
        <div className="m-5"></div>
        <CutButton />
        <CopyButton />
        <PasteButton />
        <VerticalDivider />
        <FormattingButtonGroup />
        <VerticalDivider />
        <HeadingLevelButtonGroup showAll />
        <ListButtonGroup />
        <VerticalDivider />
        <TextAlignmentButtonGroup />
      </Toolbar>
    </div>
  );