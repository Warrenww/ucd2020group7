import React, { useState, useEffect } from 'react';
import {
  Grid,
} from '@material-ui/core';
import useStyles from '../constants/styles';
import Animation from './Animation';


const Home = () => {
  const classes = useStyles();
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const docWidth = document.body.offsetWidth;
    const fraction = docWidth / 1960;
    setZoom(fraction);
  }, []);

  return (
    <Grid container className={classes.videoCanvasHolder}>
    <Animation isDev={false} zoom={zoom}/>
      <Grid item xs={12} className={classes.timeLine}>

      </Grid>
    </Grid>
  );
}

export default Home;
