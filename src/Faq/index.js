import React from 'react';
import {
  Grid,
  Paper,
  Container,
} from '@material-ui/core';
import useStyles from '../constant/styles';
import Header from '../Components/Header';

const Faq = () => {
  const classes = useStyles();

  return (
    <>
      <Header title="FAQ"/>
      <Container>
        <Grid container spacing={3} justify="center" alignItems="stretch">
          <Grid item xs={12}>
            <Paper className={classes.paper}>

            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Faq;
