import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { Link,Redirect } from "react-router-dom";
import "../css/sign.css";
import NavbarSignIn from "./navbar/navbarSignin";
import TextField from "@mui/material/TextField";
import logo from "../images/logo.png";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [after, setAfter] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("UsahakuySubmissionPassword")
      .replace(/"/g, "");
    let mail = localStorage
      .getItem("UsahakuySubmissionEmail")
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
  }

  return (
    <>
      <NavbarSignIn />
      <div className="outer">
        <div className="inner">
          {after ? (
            <form onSubmit={handleLogin}>
              <div className="image-sign">
              <img src={logo} alt="Logo" width={100} height={100}/>
              </div>
              <h3>Sign In</h3>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Alamat Email"
                autoComplete="email"
                autoFocus
                onChange={(event) => setEmaillog(event.target.value)}
              ></TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                autoFocus
                onChange={(event) => setPasswordlog(event.target.value)}
              ></TextField>

              <button type="submit" className="btn btn-sign">
                Sign In
              </button>
              <p className="forgot-password text-right">
                Belum Memiliki Akun? <Link className="blue" to="/regis">Sign Up</Link>
              </p>
              {flag && (
                <Alert severity="warning">
                  Data yang Anda Masukan Salah, silahkan Coba Kembali!
                </Alert>
              )}
            </form>
          ) : (
            <Redirect from="/login" to="/after" />
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
