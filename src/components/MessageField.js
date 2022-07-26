import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { pushMessages } from "../firebase";

const MessageField = ({ name, text, setText, inputEl }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <>
      <TextField
        fullWidth={true}
        inputRef={inputEl}
        autoFocus={true}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          const text = e.target.value;
          if (isComposed) return;
          if (text === "") return;

          if (e.key === "Enter") {
            pushMessages({ name, text });
            setText("");
            e.preventDefault();
          }
        }}
        onCompositionStart={() => {
          setIsComposed(true);
        }}
        onCompositionEnd={() => {
          setIsComposed(false);
        }}
        value={text}
      />
    </>
  );
};

export default MessageField;
