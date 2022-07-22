import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar, TextField } from "@material-ui/core";

import { gravatarPath } from "../gravatar";

const useStyles = makeStyles({
  root: {
    margin: "26px",
    gridRow: 2,
  },
});

const MessageInputField = ({ name }) => {
  const styles = useStyles();
  const avatarPath = gravatarPath(name);
  return (
    <>
      <div className={styles.root}>
        <Grid container>
          <Grid xs={1}>
            <Avatar src={avatarPath} />
          </Grid>
          <Grid xs={10}>
            <TextField fullWidth="true" />
          </Grid>
          <Grid xs={1}>ボタン</Grid>
        </Grid>
      </div>
    </>
  );
};

export default MessageInputField;
