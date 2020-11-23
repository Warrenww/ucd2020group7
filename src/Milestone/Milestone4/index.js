import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Grid,
  Paper,
  Button,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import CategoryIcon from '@material-ui/icons/Category';
import PeopleIcon from '@material-ui/icons/People';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WidgetsIcon from '@material-ui/icons/Widgets';

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
  highlight: {
    width: '100%',
    maxWidth: 600,
    marginBottom: 20,
  }
}));

const Milestone4 = props => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
      <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>Key Finding</h2>
            <Alert severity="info" variant="outlined" className={classes.highlight} icon={<SearchIcon />}>
                <AlertTitle>Finding 1</AlertTitle>
                常因隨手放、沒歸位及或使用頻率低會造成不知道東西放哪，從而找不到東西
            </Alert>
            <Alert severity="info" variant="outlined" className={classes.highlight} icon={<CategoryIcon />}>
                <AlertTitle>Finding 2</AlertTitle>
                妥善分類可以方便未來尋找，但若是收到收太隱密的地方，時間一久，也有可能忘記自己當初把東西收在哪裡。
            </Alert>
            <Alert severity="info" variant="outlined" className={classes.highlight} icon={<PeopleIcon />}>
                <AlertTitle>Finding 3</AlertTitle>
                找不到東西時，會先請親友幫忙找，若非重要物品且有其他替代品，就會先以其他物品替代，因為某天可能該物品就會不經意出現。
            </Alert>
            <Alert severity="info" variant="outlined" className={classes.highlight} icon={<PhoneIphoneIcon />}>
                <AlertTitle>Finding 3</AlertTitle>
                希望有一款APP，可以用拍照和語音的方式輸入或存檔，用視覺化的方式呈現，並可以製作個人的虛擬空間，有分類規劃、共同編輯、提醒功能，還可以用標籤分類及搜尋。希望APP簡易操作不耗時。
            </Alert>
            <Link to="/milestone/2">
              <Button>前往 Milestone 2</Button>
            </Link>
          </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h2>Design Requirement</h2>
            <Alert severity="warning" variant="outlined" className={classes.highlight} icon={<PeopleIcon />}>
                <AlertTitle>Requirement 1</AlertTitle>
                如何讓家人/同事共同管理空間內的東西
            </Alert>
            <Alert severity="warning" variant="outlined" className={classes.highlight} icon={<SearchIcon />}>
                <AlertTitle>Requirement 2</AlertTitle>
                快速找到找不到的東西
            </Alert>
            <Alert severity="warning" variant="outlined" className={classes.highlight} icon={<WidgetsIcon />}>
                <AlertTitle>Requirement 3</AlertTitle>
                改善東西亂丟(隨手放)的行為
            </Alert>
          </Paper>
      </Grid>


    </Grid>
  );
};

export default Milestone4;
