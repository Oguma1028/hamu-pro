import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  },
});

const MessageInputField = () => {
  const styles = useStyles();
  return <div className={styles.root}>インプット</div>;
};

export default MessageInputField;
