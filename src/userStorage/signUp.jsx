
import React, { useState } from "react";
import "../css/sign.css";
import NavbarSignUp from "../components/navbar/navbarSignUp";
import {NavLink} from "react-router-dom";
import TextField from "@mui/material/TextField";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {

  const history = useHistory();

  const [inpval, setInpval] = useState({
      name: "",
      email: "",
      phone: "",
      password: ""
  })

  console.log(inpval);

  const getdata = (e) => {

      const { value, name } = e.target;
      setInpval(() => {
          return {
              ...inpval,
              [name]: value
          }
      })
  }

  const addData = (e) => {
      e.preventDefault();

      const { name, email, phone, password } = inpval;

      if (name === "") {
          toast.error(" name field is requred!",{
              position: "top-center",
          });
      } else if (email === "") {
           toast.error("email field is requred",{
              position: "top-center",
          });
      } else if (!email.includes("@")) {
           toast.error("plz enter valid email addres",{
              position: "top-center",
          });
      } else if (phone === "") {
           toast.error("phone field is requred",{
              position: "top-center",
          });
        } else if (phone.length < 11) {
          toast.error("phone number less than 11 digits",{
             position: "top-center",
         });
        } else if (phone.length > 13) {
          toast.error("phone number less than 13 digits",{
             position: "top-center",
         });
      } else if (password === "") {
           toast.error("password field is requred",{
              position: "top-center",
          });
      } else if (password.length < 5) {
           toast.error("password length greater five",{
              position: "top-center",
          });
      } else {
          console.log("data added succesfully");
          localStorage.setItem("userUsahakuy",JSON.stringify([inpval]));
          history.push("/signIn")
      }
  }


  return (
    <>
      <NavbarSignUp />
      <div className="outer">
        <div className="inner">
            <form onSubmit={addData}>
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
                name="name"
                autoFocus
                onChange={getdata}
              ></TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                name="email"
                label="Alamat Email"
                autoComplete="email"
                autoFocus
                onChange={getdata}
              ></TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                name="password"
                id="password"
                label="Password"
                autoFocus
                onChange={getdata}
              ></TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                type="phone"
                id="phone"
                name="phone"
                label="No Telephone"
                autoFocus
                onChange={getdata}
              ></TextField>
              <button type="submit" className="btn btn-sign">
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Sudah Memiliki Akun? <NavLink className="blue" to="/signIn">Sign In</NavLink>
              </p>
            </form>
            <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default SignUp;


