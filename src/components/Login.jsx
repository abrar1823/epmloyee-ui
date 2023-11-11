import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, seterrors] = useState("");

  const handelLogin = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    const emails = localStorage.getItem("email");
    const passwords = localStorage.getItem("password");

    if (emails === "abrar@abrar.com" && password === "12345") {
      navigate("/");
    } else {
      navigate("/login");
      console.log("Please Check Email or Passwords!!!!");
      seterrors("Please Check Email or Passwords!!!!");
    }
  };
  setTimeout(() => {
    seterrors("");
  }, 4000);

  return (
    <div className="content-login" style={{ marginTop: 30 }}>
      {/* <Card>
        <CardContent> */}
      <Grid container spacing={2} align="center">
        <Grid item xs={8}>
          {/* <img src="software.png" style={{ width: "450px" }} alt="" /> */}
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ marginTop: "40px", opacity: 0.8, height: "350px" }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5">Employee Login</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email Id"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={handelLogin} variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <span style={{ color: "red" }}>{errors}</span>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* </CardContent>
      </Card> */}
    </div>
  );
};
