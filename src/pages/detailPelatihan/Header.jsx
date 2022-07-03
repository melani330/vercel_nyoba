import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import logo from "../../images/logo.png";
import "../../components/navbar/navbar.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#4fc3f7" }}>
        <Toolbar>
        <Button color="inherit" sx={{ marginRight: "auto", color: "black" }}>
          <Link className="white" to="/pelatihan"><i class="fa fa-long-arrow-left" aria-hidden="true"></i>
               Kembali
            </Link>
          </Button>
          <Button color="inherit" sx={{ marginLeft: "auto", color: "black" }}>
          <Link Link className="white" to="/after">
            Home
            </Link>
          </Button>
          <Typography sx={{ color: "white" }}> | </Typography>
          <Button color="inherit"  disabled sx={{ color: "black" }}>
           Detail Pelatihan
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
