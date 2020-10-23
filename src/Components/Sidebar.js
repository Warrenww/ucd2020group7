import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const styles = {
  Menu: {
    width: 250,
  },
  link: {
    color: "#000",
    textDecoration: "none",
  },
};

const DrawerContent = ({handleDrawerClose}) => (
    <div
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
      style={styles.Menu}
    >
      <List>
        <Link style={styles.link} to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home page" />
          </ListItem>
        </Link>
        <Link style={styles.link} to="/milestone/1">
          <ListItem button>
            <ListItemIcon>
              <Avatar>M1</Avatar>
            </ListItemIcon>
            <ListItemText primary="Milestone 1" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link style={styles.link} to="/about">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </div>
);

const Sidebar = ({
  open,
  handleDrawerClose,
  handleDrawerOpen,
}) => {
  return (
    <SwipeableDrawer
      open={open}
      onClose={handleDrawerClose}
      onOpen={handleDrawerOpen}
      anchor='left'
    >
      <DrawerContent handleDrawerClose={handleDrawerClose} />
    </SwipeableDrawer>
  );
};

export default Sidebar;
