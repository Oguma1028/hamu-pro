import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const styles = useStyles();
  return <div className={styles.root}>リスト</div>;
};

export default MessageList;
