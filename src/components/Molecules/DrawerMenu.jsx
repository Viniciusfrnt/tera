import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/users">Home</Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link to="/users/1">Usuários</Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link to="/users">Criar Post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
