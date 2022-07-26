import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { messageRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    messageRef
      .orderByKey()
      .limitToLast(3)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);
  const styles = useStyles();
  return <div className={styles.root}>リスト</div>;
};

export default MessageList;
