import React from "react";
import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
    margin: "10px",
  },
});

const Main = ({ name }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <MessageList />
        <MessageInputField name={name} />
      </div>
    </>
  );
};

export default Main;
