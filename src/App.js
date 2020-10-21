import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Components/Sidebar.js';

const styles = {
  App: {
    backgroundColor: "#ccc",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1em",
    color: "white",
    overflowY: "scroll",
  },
  AppBar: {
    backgroundColor: "#33333333",
    backdropFilter: "blur(5px)",
  },
};

function App(props) {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = _ => setOpen(true);
  const handleDrawerClose = _ => setOpen(false);

  const Milestone = props => {
    const {id} = useParams();
    return <h1>Milestone {id}</h1>;
  }
  useEffect(()=>{
    console.log(process.env.PUBLIC_URL);
  });


  return (
    <div style={styles.App}>
      <AppBar position="fixed" style={styles.AppBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon/>
          </IconButton>
          <div>
            UCD 2020 Group 7
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/about">
              <h1>about</h1>
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
