import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import routerConfig from '../constants/router';

const styles = {
  Menu: {
    width: 250,
  },
  link: {
    color: "#000",
    textDecoration: "none",
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
        {
          routerConfig.map((x, i) => (
            <ListItemGenerator
              link={x.link}
              icon={x.icon}
              text={x.text}
              key={x.text}
            />
          ))
        }
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
