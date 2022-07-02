import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Drawercompbefore() {
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
            <ListItemText>
              <Link to="/signIn">Sign In</Link>
            </ListItemText>
          </ListItemButton>
        </List>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/signUp">Sign Up</Link>
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

export default Drawercompbefore;
