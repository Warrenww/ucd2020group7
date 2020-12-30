import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {data, properties} from './data';
import useStyles from '../../constants/styles';
import FadeIn from '../../Components/FadeIn';
import ImagePaper from './ImagePaper';

const Milestone1 = props => {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  return (
    <Grid container spacing={3} justify="center" alignItems="stretch">
      {
        data.map((x, i) => (
          <FadeIn>
            <Grid item md={4} xs={12} key={x.title} onClick={() => setActive(i)}>
              <ImagePaper {...x} active={active === i}/>
            </Grid>
          </FadeIn>
        ))
      }
      <Grid item xs={12} >
        <FadeIn>
          <Paper className={classes.paper}>
            <h2>{data[active].title}</h2>
            <h4>{data[active].long_intro}</h4>
          </Paper>
        </FadeIn>
      </Grid>
      <FadeIn>
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
      </FadeIn>
    </Grid>
  )
}
export default Milestone1;
