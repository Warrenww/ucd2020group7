import React from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import useStyles from '../../constant/styles';

const Milestone5 = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
      <Grid item xs={12}>
        <Paper className={classes.paper} >
          <h2>測試任務</h2>

        </Paper>
      </Grid>
    </Grid>
  );
}

export default Milestone5;
