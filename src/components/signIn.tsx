import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../images/logo.png";
import NavbarSignIn from "./navbar/navbarSignin";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {useState} from "react";
import Alert from "@mui/material/Alert";
// import AlertTitle from '@mui/material/AlertTitle';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © Usahakuy.ID"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function SignIn() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [after, setAfter] = useState(true);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let pass = localStorage
      .getItem("UsahakuySubmissionPassword")!
      .replace(/"/g, "");
    let mail = localStorage
      .getItem("UsahakuySubmissionEmail")!
      .replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string
    
    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setAfter(!after);
      setFlag(false);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <NavbarSignIn />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img className="logo-sign" src={logo} alt="Logo" width={100} height={100} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {after? <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmaillog(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <Link to="/after"> */}
            {/* <Link to="/after"> */}
            <Button sx={{mb: 3, mt: 3}}
            type="submit"
            variant="contained"
            color="primary"
            >
              Sign In
            </Button>
            {/* </Link> */}
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/signUp">
                  <Typography className="sign">
                    Belum Memiliki Akun? Daftar
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            {flag && <Alert severity="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
          </Box>
          :<Link to="/after"></Link>}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
