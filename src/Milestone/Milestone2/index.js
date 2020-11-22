import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ExploreIcon from '@material-ui/icons/Explore';
import { steps, contents, table } from './data';

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
  content: {
    width: '100%',
    textAlign: 'justify',
    padding: '3em',
  },
  table: {
    width: 'auto',
    margin: 'auto',
    marginTop: 20,
  },
  highlight: {
    width: '100%',
    maxWidth: 600,
    marginBottom: 20,
  }
}));

const Milestone2 = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <Grid container spacing={3} justify="center" alignItems="stretch">
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
           {
             steps.map(step =>
               <Tab label={step} key={step}/>
             )
           }
          </Tabs>
          <div className={classes.content}>
            {contents[value]}
          </div>
        </Paper>
      </Grid>

      <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>設計問題</h2>
              解決找不到東西的困擾
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>目標群眾</h2>
              找不到東西的人
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>研究參與者</h2>
              在9位深度訪談的受訪者中，年齡介於21~55歲、性別都為女性
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>參與者</TableCell>
                      <TableCell align="right">年齡</TableCell>
                      <TableCell align="right">性別</TableCell>
                      <TableCell align="right">居住地點(環境)</TableCell>
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
                        <TableCell align="right">{row.env}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>訪談主軸</h2>
              <Alert severity="info" className={classes.highlight} icon={<SearchIcon />}>
                <AlertTitle>找東西的情況</AlertTitle>
                描述找到/找不到東西的情況，物品的性質(使用頻率、重要性等等)。為什麼會找不到?用什麼方式找東西?
              </Alert>
              <Alert severity="info" className={classes.highlight} icon={<EmojiPeopleIcon />}>
                <AlertTitle>個人習慣</AlertTitle>
                收納、整理、歸位物品的習慣，對於尋找物品的影響。
              </Alert>
              <Alert severity="info" className={classes.highlight}>
                <AlertTitle>使用其他協助方式的情況</AlertTitle>
                <ul>
                  <li>使用其他管理物品方式的情況?</li>
                  <li>使用其他尋找物品方式的情況?</li>
                </ul>
              </Alert>
              <Alert severity="info" className={classes.highlight} icon={<ExploreIcon />}>
                <AlertTitle>對於協助管理及找尋物品之系統的需求與期望</AlertTitle>
                介面、功能、使用意願
              </Alert>
            </Paper>
        </Grid>
      </Slide>


    </Grid>
  );
};

export default Milestone2;
