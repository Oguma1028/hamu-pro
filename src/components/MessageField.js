import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const MessageField = ({ name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log(text);
  return (
    <>
      <TextField
        fullWidth={true}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          const text = e.target.value;
          if (isComposed) return;
          if (text === "") return;

          if (e.key === "Enter") {
            setText("");
            e.preventDefault();
          }
        }}
        onCompositionStart={() => {
          setIsComposed(true);
          console.log("始まったよ");
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
