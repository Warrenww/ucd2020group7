import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
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
import MenuIcon from '@material-ui/icons/Menu';

import routerConfig from './constant/router';
import logoImage from '../src/images/logo.png';


import 'antd/dist/antd.css';

const useStyles = makeStyles({
  App: {
    backgroundColor: "#ccc",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1em",
    color: "white",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
  AppBar: {
    backgroundColor: "#33333388",
    backdropFilter: "blur(5px)",
    userSelect: "none",
    "& a": {
      color: 'inherit',
      textDecoration: 'none',
    },
    "& .links": {
      flex: 1,
      padding: '0 2em',
      display: 'flex',
      justifyContent: 'flex-end',
      '& a': {
        color: 'white',
        textTransform: 'none',
      }
    },
    "& .logo": {
      height: 60,
      paddingRight: 10,
      filter: 'invert(1)',
    }
  },
});

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
                  <Button>
                    <Link to={x.link} key={x.text}> {x.text} </Link>
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
          </Switch>
      </Router>
    </div>
  );
}

export default App;
