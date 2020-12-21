import React, { useState, useEffect } from 'react';
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
    <div style={{marginTop: 100}}>
      <Animation isDev zoom={zoom}/>
    </div>
  );
}

export default Home;
