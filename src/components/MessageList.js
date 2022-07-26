import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import MessageItem from "./MessageItem";
import { messageRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: "100%",
    overflow: "auto",
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    messageRef.orderByKey().on("value", (snapshot) => {
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
  return (
    <>
      <List className={styles.root}>
        {messages.map(({ key, name, text }) => {
          return <MessageItem key={key} name={name} text={text} />;
        })}
      </List>
    </>
  );
};

export default MessageList;
