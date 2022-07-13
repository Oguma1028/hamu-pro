import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "26px",
    gridRow: 2,
  },
});

const MessageInputField = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.root}>
        <Grid container>
          <Grid xs={1}>
            <Avatar />
          </Grid>
          <Grid xs={10}>入力</Grid>
          <Grid xs={1}>ボタン</Grid>
        </Grid>
      </div>
    </>
  );
};

export default MessageInputField;
