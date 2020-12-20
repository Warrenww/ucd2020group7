import React from 'react';
import useStyles from '../constants/styles';
import Animation from './Animation';


const Home = () => {
  const classes = useStyles();

  return (
    <div style={{marginTop: 100}}>
      <Animation />
    </div>
  );
}

export default Home;
