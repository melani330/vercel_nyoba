import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Drawercomp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <Tab label="Tentang" href="#tentang" className="page-scroll" />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <Tab
              label="Pendaftaran"
              href="#pendaftaran"
              className="page-scroll"
            />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <Tab
              label="Pelatihan"
              href="#pelatihanafter"
              className="page-scroll"
            />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <Tab label="Coach" href="#coach" className="page-scroll" />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <Tab label="Kontak" href="#footer" className="page-scroll" />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Sign Out</Link>
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default Drawercomp;
