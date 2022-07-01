import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import logo from "./logo.png";
import { Link } from 'react-router-dom';

export default function NavbarSignIn() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#4fc3f7" }}>
        <Toolbar>
          {/* <img src={logo} alt="Logo" width={75} height={75} /> */}
          <Button color="inherit" sx={{ marginRight: "auto", color: "black" }}>
          <Link to="/" className="white"><i class="fa fa-long-arrow-left" aria-hidden="true"></i>
               Kembali
            </Link>
          </Button>
          <Button color="inherit" sx={{ marginLeft: "auto", color: "black" }}>
          <Link className="white" to="/regis">
            Sign Up
            </Link>
          </Button>
         
          <Typography sx={{ color: "black" }}> | </Typography>
          <Button color="inherit"  disabled sx={{ color: "black" }}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
