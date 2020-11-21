import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: 0,
    borderRadius: 3,
    padding: '30px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const Milestone2 = props => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
          <Paper className={classes.paper}>

          </Paper>
      </Grid>
    </Grid>
  );
};

export default Milestone2;
