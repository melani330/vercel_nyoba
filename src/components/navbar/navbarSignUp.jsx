import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NavbarSignUp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#4fc3f7" }}>
        <Toolbar>
          <Button color="inherit" sx={{ marginRight: "auto", color: "black" }}>
            <Link className="white" to="/">
              <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
              Kembali
            </Link>
          </Button>
          <Button
            color="inherit"
            disabled
            sx={{ marginLeft: "auto", color: "black" }}
          >
            Sign Up
          </Button>
          <Typography sx={{ color: "black" }}> | </Typography>
          <Button color="inherit" sx={{ color: "black" }}>
            <Link to="/login" className="white">Sign In</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
