import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
//   Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import logo from "../images/logo.png";
import Drawercomp from "./Drawercomp";
import "../css/navbar.css";
import { Link } from 'react-router-dom';

const Pages = ["Tentang", "Pendaftaran", "Coach", "Kontak"];

function NavbarAfter() {
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
              <Drawercomp />
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
                {Pages.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
                <Link to="/" className='btn btn-navbar'>Sign Out</Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavbarAfter;
