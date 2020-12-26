import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import NavigationBar from './Components/NavigationBar';
import Milestone from './Milestone';
import Home from './Home';
import AboutUs from './AboutUs';
import Faq from './Faq';

import useStyles from './constants/styles';
import 'antd/dist/antd.css';

function App(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(()=>{
    const params = (new URL(document.location)).searchParams;
    const path = params.get('path');
    if (path){
      params.delete('path');
      const search = params.toString();
      const hash = (new URL(document.location)).hash;
      setRedirect(path + (search ? '?' + search : '') + (hash ? hash : ''));
    }
  },[]);

  return (
    <div className={classes.App} id="App">
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar
          handleDrawerOpen={() => setOpen(true)}
        />
        <Sidebar
          open={open}
          handleDrawerOpen={() => setOpen(true)}
          handleDrawerClose={() => setOpen(false)}
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
