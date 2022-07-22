import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://mui.com/"
        target="_blank"
        rel="noopener"
      >
        おぐま
      </Link>{" "}
    </Typography>
  );
}

export default function SignIn({ setName }) {
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  const [isComposed, setIsComposed] = useState(false);

  console.log(isComposed);

  useEffect(() => {
    const disable = string === "";
    setDisabled(disable);
  }, [string]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="お名前"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => {
              if (isComposed) return;
              if (e.key === "Enter") {
                setName(e.target.value);
                e.preventDefault();
              }
            }}
            onCompositionStart={() => {
              setIsComposed(true);
            }}
            onCompositionEnd={() => {
              setIsComposed(false);
            }}
          />

          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={disabled}
            onClick={() => {
              setName(string);
            }}
          >
            はじめる
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
