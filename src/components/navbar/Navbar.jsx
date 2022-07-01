import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import logo from "./logo.png";
import Drawercompbefore from "../Drawercompbefore";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ background: "#4fc3f7" }}>
        <Toolbar>
          <img src={logo} alt="Logo" width={75} height={75} />
          {isMatch ? (
            <>
              <Typography
                sx={{ fontSize: "1.5rem", paddingLeft: "30%", color: "black" }}
              >
                UsahaKuy.ID
              </Typography>
              <Drawercompbefore />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto", color: "black" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {/* {Pages.map((page, index) => (
                  <Tab key={index} label={page} />
                ))} */}
              </Tabs>
              <Link to="/login" className="btn btn-navbar">
                Sign In
              </Link>
              <Link to="/regis" className="btn btn-navbar">
                Sign Up
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
