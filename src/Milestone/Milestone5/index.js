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
  Grow,
} from '@material-ui/core';
import { Alert, AlertTitle, Skeleton } from '@material-ui/lab';
import { Pagination } from 'antd';
import useStyles from '../../constant/styles';
import { circumstances, table, feedbacks } from './data';
import Compare from './Compare';
import FigmaDemo from './FigmaDemo';
import Chips from './Chips';

const Milestone5 = () => {
  const classes = useStyles();
  const [activeCircumstance, setActiveCircumstance] = useState(parseInt(circumstances.length * Math.random()));
  const [activeFeedback, setActiveFeedback] = useState(parseInt(feedbacks.length * Math.random()));
  const [page, setPage] = useState(1);

  return (
    <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`}>
          <h2>測試任務</h2>
          <Chips activeCircumstance={activeCircumstance} setActiveCircumstance={setActiveCircumstance} />
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
              <Alert
                severity="warning"
                variant={i === activeFeedback ? "filled" : "outlined"}
                className={classes.highlight} icon={feedback.icon}
                onClick={() => setActiveFeedback(i)}
              >
                  <AlertTitle>{feedback.title}</AlertTitle>
              </Alert>
            ))
          }
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`}>
          <h2>From Lo-Fi Prototype To Hi-Fi Prototype</h2>
          針對每一個回饋的面向，我們調整了數個Lo-fi prototype中的設計，以下詳述了我們如何從Lo-fi prototype演化到Hi-Fi prototype的過程。
          <div>
            {
              feedbacks.map((f, i) => (
                <Chip
                  icon={f.icon}
                  label={f.title}
                  clickable
                  color="primary"
                  variant={activeFeedback === i ? "default" : "outlined"}
                  onClick={() => setActiveFeedback(i) || setPage(1)}
                />
              ))
            }
          </div>
          {
            feedbacks[activeFeedback].children.map((x,i) => (
              <Grow in={page === i + 1} mountOnEnter unmountOnExit>
                <Compare data={x} />
              </Grow>
            ))
          }
          <Pagination
            className={classes.pagination}
            current={page}
            total={feedbacks[activeFeedback].children.length}
            pageSize={1}
            onChange={page => setPage(page)}
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`}>
          <h2>Hi-Fi Prototype 使用情境影片</h2>
          <p>
            最後我們使用Figma來完成我們的Hi-Fi prototype，以下是{circumstances.length}個使用情境與對應的操作影片與Figma操作連結
          </p>
          <Chips activeCircumstance={activeCircumstance} setActiveCircumstance={setActiveCircumstance} />
          {
            circumstances[activeCircumstance] ?
              <iframe width="640" height="360" title="video" src={circumstances[activeCircumstance].video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              : <Skeleton variant="rect" width={640} height={360} />
          }

        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`}>
          <h2>Hi-Fi Prototype Figma Demo</h2>
          <FigmaDemo activeCircumstance={activeCircumstance}/>
        </Paper>
      </Grid>

    </Grid>
  );
}

export default Milestone5;
