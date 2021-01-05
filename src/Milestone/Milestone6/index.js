import React, { useState } from 'react';
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  Button,
} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Statistic, Row, Col, Slider, Input  } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import useStyles from '../../constants/styles';
import FadeIn from '../../Components/FadeIn';
import BlankSpace from '../../Components/BlankSpace';
import { circumstances } from '../Milestone5/data';
import { table, questionaire } from './data';

const Milestone6 = ({ width }) => {
  const classes = useStyles();
  const [activeGroup, setActiveGroup] = useState(parseInt(Math.random() * questionaire.length));
  const sliderConfig = ({max}) => ({
    dots: true,
    max: max,
    min: 1,
    step: 1,
  });

  return (
    <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>Usability test 測試任務與受測者基本資料</h2>
          <BlankSpace />
          <Grid container spacing={6} direction="row" justify="center" alignItems="stretch">
            <Grid item xs={12} md={6}>
              <h2>測試任務</h2>
              易用性測試的測試任務同Hi-Fi Prototype的測試任務
              <BlankSpace />
              <FadeIn direction="left">
                {
                  circumstances.map((x, i) => (
                    <Alert
                      key={`circumstances-${i}`}
                      severity="info"
                      variant="outlined"
                      icon={<b>{x.index}</b>}
                      className={classes.highlight}
                    >
                      <AlertTitle>{x.title}</AlertTitle>
                    </Alert>
                  ))
                }
              </FadeIn>
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>測試員基本資料</h3>
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>參與者</TableCell>
                      <TableCell align="right">年齡</TableCell>
                      <TableCell align="right">性別</TableCell>
                      <TableCell align="right">最高學歷</TableCell>
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
              在整個易用性的測試中，我們共有四個任務需要受測者完成，所有受測者都可以完成第一跟第四個任務，
              特別是經過前兩名受測者的測試後，我們對系統作出微調，因此第三、四名受測者在此兩項任務的完成上也對對比較順暢。
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>後測問卷</h2>
          我們針對以下幾個類別總共設計了32道問題，除了測試過程為李克特五點量表外，其餘問題皆是李克特七點量表
          <Row className={classes.statistic}>
            <FadeIn>
            {
              questionaire.map((x, i) => (
                <Col span={width === 'xs' ? 8 : 4} key={x.title}>
                  <Button
                    variant={activeGroup === i ? "outlined" : "default"}
                    onClick={() => setActiveGroup(i)}
                  >
                    <Statistic
                      title={x.title}
                      suffix="題"
                      value={x.count}
                      valueStyle={activeGroup === i ? {color: '#ee9124', fontWeight: 'bold'} : {}}
                    />
                  </Button>
                </Col>
              ))
            }
            </FadeIn>
          </Row>
          <FadeIn>
          {
            questionaire[activeGroup].question.map((x, i) => (
                <Row key={x} className={classes.statistic}>
                  <Col span={2}>
                    <h3>{i + 1}</h3>
                  </Col>
                  <Col span={8}>
                    <h3>{x}</h3>
                  </Col>
                  <Col span={14}>
                  {
                    questionaire[activeGroup].config.type === 'other'
                      ? <Input />
                      : (
                        <div className={classes.slider}>
                          <FrownOutlined />
                          <Slider {...{
                            ...sliderConfig(questionaire[activeGroup].config),
                            defaultValue: parseInt(Math.random() * questionaire[activeGroup].config.max) + 1
                          }} />
                          <SmileOutlined />
                        </div>
                      )
                  }
                  </Col>
                </Row>
            ))
          }
          </FadeIn>
        </Paper>
      </Grid>

    </Grid>
  );

}

export default withWidth()(Milestone6);
