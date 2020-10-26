import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Sidebar from './Components/Sidebar';
import Milestone from './Milestone';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
  AppBar: {
    backgroundColor: "#33333388",
    backdropFilter: "blur(5px)",
  },
});

function App(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = _ => setOpen(true);
  const handleDrawerClose = _ => setOpen(false);

  const Home = props => (<h1>Home</h1>);
  const About = props => (<h1>About</h1>);
  useEffect(()=>{
    console.log(process.env.PUBLIC_URL);
  });


  return (
    <div className={classes.App}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon/>
          </IconButton>
          <div>
            UCD 2020 Group 7
          </div>
        </Toolbar>
      </AppBar>

      <Router basename={process.env.PUBLIC_URL}>
          <Sidebar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
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
