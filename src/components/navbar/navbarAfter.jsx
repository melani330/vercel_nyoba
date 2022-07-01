import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import logo from "./logo.png";
import Drawercomp from "../Drawercomp";
import "./navbar.css";
// import { Link } from "react-router-dom";
import { lightBlue } from "@mui/material/colors";
import LogoutModal from "../Modal/logoutModal.tsx"
const indicator = lightBlue[200];

function NavbarAfter() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const token = localStorage.getItem("token");

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
                indicatorColor={indicator}
              >
                <Tab label="Tentang" href="#tentang" className="page-scroll"/>
                <Tab label="Pendaftaran" href="#pendaftaran" className="page-scroll"/>
                <Tab label="Pelatihan" href="#pelatihanafter" className="page-scroll"/>
                <Tab label="Coach" href="#coach" className="page-scroll"/>
                <Tab label="Kontak" href="#footer" className="page-scroll"/>
              </Tabs>
              <LogoutModal/>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavbarAfter;
