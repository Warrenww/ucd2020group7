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
  Chip,
  Button,
} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Statistic, Row, Col } from 'antd';
import useStyles from '../../constants/styles';
import FadeIn from '../../Components/FadeIn';
import BlankSpace from '../../Components/BlankSpace';
import { circumstances } from '../Milestone5/data';
import { table, questionaire } from './data';

const Milestone6 = ({ width }) => {
  const classes = useStyles();
  const [activeGroup, setActiveGroup] = useState(parseInt(Math.random() * questionaire.length));

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
          <h2>後測問卷與回答狀況</h2>
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
          <Divider />
          <FadeIn>
            <TableContainer>
              <Table className={classes.table} size="medium" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">題目</TableCell>
                    {
                      questionaire[activeGroup].question[0].reply.map((x, i) => (
                        <TableCell key={`table-header-${i}`}>{i + 1}分</TableCell>
                      ))
                    }
                    <TableCell>平均</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {questionaire[activeGroup].question.map((row, i) => (
                    <TableRow key={`table-row-${i}`}>
                      <TableCell component="th" scope="row">
                        <b>{row.content}</b>
                      </TableCell>
                      {
                        row.reply.map(x => (
                          <TableCell key={`table-reply-${i}`}>{x || ''}</TableCell>
                        ))
                      }
                      <TableCell>
                        {
                          row.reply.reduce((acc, current, index) => acc + (index + 1) * current, 0) / 4
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </FadeIn>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`}>
          <h2>測試反思</h2>
          <Grid container spacing={6} direction="row" justify="center" alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Alert
                severity="error"
                variant="outlined"
                icon={<b>{circumstances[1].index}</b>}
                className={classes.highlight}
              >
                <AlertTitle><b>{circumstances[1].title}</b></AlertTitle>
                {circumstances[1].description}
              </Alert>
              當中，我們需要受測者在系統上記錄物品及其位置，主要分為兩部份，
              <div>
                <Chip label="在系統上建立存放的地點、位置" variant="outlined" />
                <Chip label="記錄物品的資訊" variant="outlined" />
              </div>
              因為系統的特色是可以利用區塊及階層的方式顯示物品的相對位置，所以他們需要在空白的虛擬空間中進行建構，這部份正是所有受測者覺得系統困難的點。 其原因如下：
              <ul>
                <li>figma 本身難以模擬「拉區塊」指令，原意是希望使用者可以自由調整區塊的大小</li>
                <li>受測者在第一次使用的時候，無法理解階層的概念，原意是想變得像檔案總管跟資料夾那樣，但因為同時加入了不一樣的條件（系統需要設定至少三階層才可以存入物品資訊），造成使用者難以上手</li>
                <li>Figma 所顯示的畫面比我們給受測者測試的裝置的螢幕大，因此受測者需要另外滑動才可以找到某些按鍵，讓受測者到了某一頁就無法進行操作。</li>
                <li>我們在系統的設計上也不盡完美，有些按鍵總是無法讓受測者一看就知道他的操作方式</li>
              </ul>
              第二部份的話經過改良後雖然有比較順利，但整體而言，可以看到受測者們都會覺得任務二難以完成。
            </Grid>

            <Grid item xs={12} md={6}>
              <Alert
                severity="warning"
                variant="outlined"
                icon={<b>{circumstances[2].index}</b>}
                className={classes.highlight}
              >
                <AlertTitle><b>{circumstances[2].title}</b></AlertTitle>
                {circumstances[2].description}
              </Alert>
              <div>
                任務三的部份為搜尋物品，這個結果跟我們所預期的不一樣的是，我們原本以為受測者都會直接使用放大鏡，結果大家都會用區塊顯示或列表顯示的頁面中進行物品的搜尋。
              </div>
              <div>
                原因可能是因為放大鏡大部份時間都因為Figma 所顯示的畫面比我們的手機螢幕大，所以被放在螢幕底部，所以一直沒被發現。
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>Future work</h2>
          因為用區塊及階層的方式顯示物品的相對位置是iRemember的其中一個特色，也是乎合一開始我們受訪者使用需求的設計，因此我們會希望把它改良得更乎合使用者的使用行為，習慣，除了介面上的更改，也會考慮「系統需要設定至少三階層才可以存入物品資訊」的條件的廢存。
        </Paper>
      </Grid>

    </Grid>
  );

}

export default withWidth()(Milestone6);
