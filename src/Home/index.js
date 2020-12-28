import React, { useState, useEffect } from 'react';
import {
  Grid,
} from '@material-ui/core';
import useStyles from '../constants/styles';
import Animation from './Animation';
import Introduction from './Introduction';
import MyTimeLine from './Timeline';


const Home = () => {
  const classes = useStyles();
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const docWidth = document.body.offsetWidth;
    const fraction = docWidth / 1960;
    setZoom(fraction);
  }, []);

  return (
    <Grid container classNmae={classes.homeContainer}>
      <Animation isDev={false} zoom={zoom}/>
      <MyTimeLine />
      <Introduction />
    </Grid>
  );
}

export default Home;
