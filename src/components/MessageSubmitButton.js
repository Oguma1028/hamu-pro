import React from "react";
import { pushMessages } from "../firebase";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const MessageSubmitButton = ({ name, setText, text, inputEl }) => {
  return (
    <>
      <IconButton
        disabled={text === ""}
        onClick={(e) => {
          pushMessages(name, text);
          setText("");
          inputEl.current.focus();
        }}
      >
        <SendIcon />
      </IconButton>
    </>
  );
};

export default MessageSubmitButton;
