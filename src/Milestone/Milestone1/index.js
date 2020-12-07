import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {data, properties} from './data';

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#333333aa',
    border: 0,
    borderRadius: 3,
    color: 'white',
    textAlign: 'center',
    padding: '30px',
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: 'cover',
    position: 'relative',
    backgroundBlendMode: 'multiply',
    height: 120,
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    transition: '.3s ease-in-out',
    justifyContent: 'center',
    '& *': {
      position: 'absolute',
      zIndex: 2,
      transition: '.3s ease-in-out',
      height: 120,
      margin: 30,
      display: 'flex',
      alignItems: 'center',
    },
    '& div': {
      bottom: -120,
      margin: 0,
    },
    '&:hover div': {
      bottom: 0,
    },
    '& h2': {
      top: 0,
      margin: 0,
      color: 'white',
    },
    '&:hover h2': {
      top: -120,
    },
    '& .BG': {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 1,
      margin: 0,
    },
    '&:hover .BG': {
      backdropFilter: 'blur(5px)',
    }
  },
  content: {
    padding: 30,
    '& h2,h4': {
      textAlign: 'center',
    }
  },
});

const ImagePaper = ({
  title,
  short_intro,
  image,
  active,
}) => {
  const classes = useStyles({image});

  return (
    <Paper className={classes.paper} elevation={active ? 20 : 3} style={{transform: `scale(${active ? 1 : 0.9})`}}>
      <h2>{title}</h2>
      <div>{short_intro}</div>
      <div className="BG"></div>
    </Paper>
  )
}

const Milestone1 = props => {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  return (
    <Grid container spacing={3} justify="center" alignItems="stretch">
      {
        data.map((x, i) => (
          <Grid item md={4} xs={12} key={x.title} onClick={() => setActive(i)}>
            <ImagePaper {...x} active={active === i}/>
          </Grid>
        ))
      }
      <Grid item xs={12} >
        <Paper className={classes.content}>
          <h2>{data[active].title}</h2>
          <h4>{data[active].long_intro}</h4>
        </Paper>
      </Grid>
      {
        properties.map((p, i) => (
          <Grid item xs={12} sm={6}>
            <Paper className={classes.content}>
              <h4>{p.title}</h4>
              <div>{data[active][p.key]}</div>
            </Paper>
          </Grid>
        ))
      }
    </Grid>
  )
}
export default Milestone1;
