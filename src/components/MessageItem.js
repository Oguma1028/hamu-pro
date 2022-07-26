import React, { useEffect, useRef } from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { gravatarPath } from "../gravatar";

const useStyles = makeStyles(() => ({
  inline: {
    display: "inline",
  },
}));

const MessageItem = ({ name, text, isLastItem }) => {
  const ref = useRef(null);
  const classes = useStyles;
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [isLastItem]);

  return (
    <>
      <ListItem divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              nameは{name}で textは{text}だよ
            </Typography>
          }
        />
      </ListItem>
    </>
  );
};

export default MessageItem;
