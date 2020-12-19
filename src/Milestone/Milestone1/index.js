import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {data, properties} from './data';
import useStyles from '../../constant/styles';

const ImagePaper = ({
  title,
  short_intro,
  image,
  active,
}) => {
  const classes = useStyles({image});

  return (
    <Paper className={classes.backgroundPaper} elevation={active ? 20 : 3} style={{transform: `scale(${active ? 1 : 0.9})`}}>
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
        <Paper className={classes.paper}>
          <h2>{data[active].title}</h2>
          <h4>{data[active].long_intro}</h4>
        </Paper>
      </Grid>
      {
        properties.map((p, i) => (
          <Grid item xs={12} sm={6} key={p.title}>
            <Paper className={classes.paper}>
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
