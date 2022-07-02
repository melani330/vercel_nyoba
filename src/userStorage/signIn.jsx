
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/sign.css";
import NavbarSignIn from "../components/navbar/navbarSignin";
import TextField from "@mui/material/TextField";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {


  const history = useHistory();

  const [inpval, setInpval] = useState({
      email: "",
      password: ""

  })

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

      const getuserArr = localStorage.getItem("userUsahakuy");
      console.log(getuserArr);

      const { email, password } = inpval;
      if (email === "") {
          toast.error("email field is requred", {
              position: "top-center",
          });
      } else if (!email.includes("@")) {
          toast.error("plz enter valid email addres", {
              position: "top-center",
          });
      } else if (password === "") {
          toast.error("password field is requred", {
              position: "top-center",
          });
      } else if (password.length < 5) {
          toast.error("password length greater five", {
              position: "top-center",
          });
      } else {

          if (getuserArr && getuserArr.length>0) {
              const userdata = JSON.parse(getuserArr);
              const userlogin = userdata.filter((el, k) => {
                  return el.email === email && el.password === password
              });

              if (userlogin.length === 0) {
                  alert("invalid details")
              } else {
                  console.log("user login succesfulyy");
                  localStorage.setItem("user_login", JSON.stringify([inpval]))

                  history.push("/after")
              }
          }
      }

  }

  return (
    <>
      <NavbarSignIn />
      <div className="outer">
        <div className="inner">
            <form>
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
                id="password"
                name="password"
                label="Password"
                autoFocus
                onChange={getdata}
              ></TextField>

              <button type="submit" onClick={addData} className="btn btn-sign">
                Sign In
              </button>
              <p className="forgot-password text-right">
                Belum Memiliki Akun? <NavLink className="blue" to="/signUp">Sign Up</NavLink>
              </p>
            </form>
            <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default SignIn;

