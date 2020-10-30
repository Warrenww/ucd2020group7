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
  avatar: {
    width: 24,
    height: 24,
    fontSize: 12,
  },
};

const ListItemGenerator = ({
  link,
  icon,
  text,
}) => (
  <Link style={styles.link} to={link}>
    <ListItem button>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  </Link>
);

const DrawerContent = ({handleDrawerClose}) => (
    <div
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
      style={styles.Menu}
    >
      <List>
        <ListItemGenerator
          link='/'
          icon={<HomeIcon />}
          text="Home Page"
        />
        <ListItemGenerator
          link='/milestone/1'
          icon={<Avatar style={styles.avatar}>M1</Avatar>}
          text="Milestone 1"
        />
        <ListItemGenerator
          link='/milestone/2'
          icon={<Avatar style={styles.avatar}>M2</Avatar>}
          text="Milestone 2"
        />
        <ListItemGenerator
          link='/milestone/3'
          icon={<Avatar style={styles.avatar}>M3</Avatar>}
          text="Milestone 3"
        />
      </List>
      <Divider />
      <List>
        <ListItemGenerator
          link='/about'
          icon={<InfoIcon />}
          text="About"
        />
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
