import React from 'react';
import {
  Grid,
  Paper,
  Container,
} from '@material-ui/core';
import { Collapse } from 'antd';
import useStyles from '../constants/styles';
import Header from '../Components/Header';
import data from './data';

const { Panel } = Collapse;

const Faq = () => {
  const classes = useStyles();

  return (
    <>
      <Header title="FAQ"/>
      <Container>
        <Grid container spacing={3} justify="center" alignItems="stretch">
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Lofi prototype 他組回饋</h2>
              <Collapse defaultActiveKey={[]} className={classes.faq}>
                 {
                   data.map((x, i) => (
                     <Panel header={x.question} key={i}>
                       <p>{x.answer}</p>
                     </Panel>
                   ))
                 }
               </Collapse>
             </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Faq;
