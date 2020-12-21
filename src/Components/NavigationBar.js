import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button,
} from '@material-ui/core';
import useStyles from '../constants/styles';
import Icons from '../constants/icons';
import routerConfig from '../constants/router';
import logoImage from '../images/logo.png';


const NavigationBar = ({handleDrawerOpen}) => {
  const classes = useStyles();
  const [isTop, setIsTop] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
      const scrollElement = document.getElementById('App');
      scrollElement.onscroll = (e) => {
        if (e.target.scrollTop > 10) setIsTop(false);
        else setIsTop(true);
      };
  });

  return (
  <AppBar position="fixed" className={`${classes.AppBar} ${isTop ? classes.AppBarTop : ''}`}>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
        <Icons.Menu/>
      </IconButton>
      <Link to="/">
        <img src={logoImage} alt="logo" className="logo"/>
        UCD 2020 Group 7
      </Link>
      <Hidden smDown>
        <div className="links">
          {
            routerConfig.map(x => (
              <Button key={x.text} className={`${x.link === pathname ? 'active' : ''}`}>
                <Link to={x.link}> {x.text} </Link>
              </Button>
            ))
          }
        </div>
      </Hidden>
    </Toolbar>
  </AppBar>
  );
}

export default NavigationBar;
