import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Chip,
  Stepper,
  Step,
  StepLabel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Hidden,
  Divider,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import useStyles from '../../constant/styles';
import { circumstances, table, feedbacks } from './data';

const Milestone5 = () => {
  const classes = useStyles();
  const [activeCircumstance, setActiveCircumstance] = useState(parseInt(circumstances.length * Math.random()));
  const [activeFeedback, setActiveFeedback] = useState(parseInt(feedbacks.length * Math.random()));

  return (
    <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`}>
          <h2>測試任務</h2>
          <div>
            {
              circumstances.map((c, i) => (
                <Chip
                  icon={<></>}
                  label={`${c.index} ${c.title}`}
                  clickable
                  color="primary"
                  variant={activeCircumstance === i ? "default" : "outlined"}
                  onClick={() => setActiveCircumstance(i)}
                />
              ))
            }
          </div>
          <div className={classes.quote}>
            <h3>情境</h3>
            { circumstances[activeCircumstance].description }
          </div>
          <h3>流程</h3>
          <Stepper alternativeLabel className={classes.stepper} disabled>
            {circumstances[activeCircumstance].step.map((label, index) => (
              <Step key={label} completed={false}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>Lo-Fi Prototype 測試及回饋</h2>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <h3>測試員基本資料</h3>
          <TableContainer>
            <Table className={classes.table} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>參與者</TableCell>
                  <TableCell align="right">年齡</TableCell>
                  <TableCell align="right">性別</TableCell>
                  <TableCell align="right">職業</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.ocp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          上方每位測試員完成測試後，我們會進行一小段訪談，針對測試過程中觀察到不順暢與操作失誤的部分詢問他們的想法，整理了3位測試員的回饋後，
          得到<Hidden mdUp>下</Hidden><Hidden smDown>右</Hidden>方 {feedbacks.length} 個可以改進的面向。
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <h3>改進面向</h3>
          {
            feedbacks.map((feedback, i) => (
              <Alert severity="warning" variant={i === activeFeedback ? "filled" : "outlined"} className={classes.highlight} icon={feedback.icon}>
                  <AlertTitle>{feedback.title}</AlertTitle>
              </Alert>
            ))
          }
        </Paper>
      </Grid>

    </Grid>
  );
}

export default Milestone5;
