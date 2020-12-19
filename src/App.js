import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Hidden,
} from '@material-ui/core';
import Sidebar from './Components/Sidebar';
import Milestone from './Milestone';
import Home from './Home';
import AboutUs from './AboutUs';
import Faq from './Faq';
import MenuIcon from '@material-ui/icons/Menu';

import routerConfig from './constant/router';
import useStyles from './constant/styles';
import logoImage from '../src/images/logo.png';

import 'antd/dist/antd.css';

function App(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const handleDrawerOpen = _ => setOpen(true);
  const handleDrawerClose = _ => setOpen(false);

  useEffect(()=>{
    const params = (new URL(document.location)).searchParams;
    const path = params.get('path');
    if (path){
      setRedirect(path);
    }
  },[])

  return (
    <div className={classes.App}>
    <Router basename={process.env.PUBLIC_URL}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon/>
          </IconButton>
          <Link to="/">
            <img src={logoImage} alt="logo" className="logo"/>
            UCD 2020 Group 7
          </Link>
          <Hidden smDown>
            <div className="links">
              {
                routerConfig.map(x => (
                  <Button key={x.text}>
                    <Link to={x.link}> {x.text} </Link>
                  </Button>
                ))
              }
            </div>
          </Hidden>

        </Toolbar>
      </AppBar>

          <Sidebar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
          {redirect ? <Redirect to={redirect} /> : null}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/milestone/:id">
              <Milestone />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
