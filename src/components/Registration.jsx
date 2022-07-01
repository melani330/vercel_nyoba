import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import "../css/sign.css";
import NavbarSignUp from "./navbar/navbarSignUp";
import { Link, Redirect } from "react-router-dom";
import TextField from "@mui/material/TextField";
import logo from "../images/logo.png";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("UsahakuySubmissionEmail", JSON.stringify(email));
      localStorage.setItem(
        "UsahakuySubmissionPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  return (
    <>
      <NavbarSignUp />
      <div className="outer">
        <div className="inner">
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <div className="image-sign">
                <img src={logo} alt="Logo" width={100} height={100} />
              </div>
              <h3>Sign Up</h3>
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="username"
                label="Nama Lengkap"
                autoFocus
                onChange={(event) => setName(event.target.value)}
              ></TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Alamat Email"
                autoComplete="email"
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              ></TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                autoFocus
                onChange={(event) => setPassword(event.target.value)}
              ></TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                type="phone"
                id="phone"
                label="No Telephone"
                autoFocus
                onChange={(event) => setPhone(event.target.value)}
              ></TextField>
              <button type="submit" className="btn btn-sign">
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Sudah Memiliki Akun? <Link className="blue" to="/login">Sign In</Link>
              </p>
              {flag && (
                <Alert severity="warning">Semua Data Wajib Diisi!</Alert>
              )}
            </form>
          ) : (
            <Redirect from="/regis" to="/login" />
          )}
        </div>
      </div>
    </>
  );
}

export default Registration;
