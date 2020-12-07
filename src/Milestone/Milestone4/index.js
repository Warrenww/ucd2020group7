import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Grid,
  Paper,
  Button,
  Chip,
  Avatar,
  Backdrop,
  Zoom,
  Tooltip,
  Hidden,
} from '@material-ui/core';
import { Alert, AlertTitle, Skeleton } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import CategoryIcon from '@material-ui/icons/Category';
import PeopleIcon from '@material-ui/icons/People';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WidgetsIcon from '@material-ui/icons/Widgets';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import EditIcon from '@material-ui/icons/Edit';
import Photo001 from '../../images/001.jpg';
import Photo002 from '../../images/002.jpg';
import Photo003 from '../../images/003.jpg';
import Photo004 from '../../images/004.jpg';
import Photo005 from '../../images/005.jpg';
import { sketch, situation, videoList } from './data';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: 0,
    borderRadius: 3,
    padding: '30px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    "& .MuiChip-root": {
      margin: 10,
    },
    "& .AvatarContainer": {
      display: 'flex',
      marginBottom: 20,
      "& .MuiAvatar-root": {
        margin: 10,
        width: 40,
        height: 40,
        cursor: 'pointer',
        boxShadow: '2px 2px 10px #333',
        transition: '.3s ease-in-out',
      },
      "& .MuiAvatar-root:hover": {
        transform: 'scale(1.2)',
      },
      "& .active": {
        boxShadow: '2px 2px 10px #7a654d',
        transform: 'scale(1.2)',
        border: '3px solid #e4988a',
      }
    },
    "& .sketchHolder": {
      "& h3": {
        margin: 0,
        marginBottom: 10,
        paddingBottom: 10,
        width: '100%',
        borderBottom: '1px solid #333',
        textAlign: 'center',
      },
      "& img": {
        width: '100%',
      }
    }
  },
  conceptDescription: {
    padding: '1em',
    borderTop: '1px solid #ccc',
  },
  highlight: {
    width: '100%',
    maxWidth: 600,
    marginBottom: 20,
  },
  videoDescription: {
    width: '80%',
    marginBottom: 20,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backdropFilter: 'blur(5px)',
    "& img": {
      maxWidth: '90%',
      maxHeight: '90%',
    }
  },
}));

const Milestone4 = props => {
  const classes = useStyles();
  const [activeRequirement, setActiveRequirement] = useState(parseInt(Math.random() * 3) + 1);
  const [activeAvatar, setActiveAvatar] = useState(parseInt(Math.random() * 5) + 1);
  const [showSketch, setShowSketch] = useState(false);
  const [activeSketch, setActiveSketch] = useState(null);
  const [activeVideo, setActiveVideo] = useState(1);

  const handleBackDrop = (image, open) => {
    setActiveSketch(image);
    setShowSketch(open);
  };

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
            <Alert severity="warning" variant={activeRequirement === 1 ? "filled" : "outlined"} className={classes.highlight} icon={<PeopleIcon />}>
                <AlertTitle>Requirement 1</AlertTitle>
                如何讓家人/同事共同管理空間內的東西
            </Alert>
            <Alert severity="warning" variant={activeRequirement === 2 ? "filled" : "outlined"} className={classes.highlight} icon={<SearchIcon />}>
                <AlertTitle>Requirement 2</AlertTitle>
                快速找到找不到的東西
            </Alert>
            <Alert severity="warning" variant={activeRequirement === 3 ? "filled" : "outlined"} className={classes.highlight} icon={<WidgetsIcon />}>
                <AlertTitle>Requirement 3</AlertTitle>
                改善東西亂丟(隨手放)的行為
            </Alert>
          </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>Sketch</h2>
          <p>
            以下是組員們對於每個Design Requirement畫出來的3個發想<br/>
            請選擇一個requirement與一位組員查看他的sketch
          </p>
          <div>
            <Chip
              icon={<PeopleIcon />}
              label="Requirement 1"
              clickable
              color="primary"
              variant={activeRequirement === 1 ? "default" : "outlined"}
              onClick={activeRequirement === 1 ? () => setActiveRequirement(0) : () => setActiveRequirement(1)}
            />
            <Chip
              icon={<SearchIcon />}
              label="Requirement 2"
              clickable
              color="primary"
              variant={activeRequirement === 2 ? "default" : "outlined"}
              onClick={activeRequirement === 2 ? () => setActiveRequirement(0) : () => setActiveRequirement(2)}
            />
            <Chip
              icon={<WidgetsIcon />}
              label="Requirement 3"
              clickable
              color="primary"
              variant={activeRequirement === 3 ? "default" : "outlined"}
              onClick={activeRequirement === 3 ? () => setActiveRequirement(0) : () => setActiveRequirement(3)}
            />
          </div>
          <div className="AvatarContainer">
            <Tooltip title="邱筠絜">
              <Avatar onClick={()=>setActiveAvatar(1)} className={activeAvatar === 1 ? "active" : ""} alt="邱筠絜" src={Photo001} />
            </Tooltip>
            <Tooltip title="嚴銘浩">
              <Avatar onClick={()=>setActiveAvatar(2)} className={activeAvatar === 2 ? "active" : ""} alt="嚴銘浩" src={Photo002} />
            </Tooltip>
            <Tooltip title="黃元廷">
              <Avatar onClick={()=>setActiveAvatar(3)} className={activeAvatar === 3 ? "active" : ""} alt="黃元廷" src={Photo003} />
            </Tooltip>
            <Tooltip title="郭佩璇">
              <Avatar onClick={()=>setActiveAvatar(4)} className={activeAvatar === 4 ? "active" : ""} alt="郭佩璇" src={Photo004} />
            </Tooltip>
            <Tooltip title="方偉綸">
              <Avatar onClick={()=>setActiveAvatar(5)} className={activeAvatar === 5 ? "active" : ""} alt="方偉綸" src={Photo005} />
            </Tooltip>
          </div>
          <Grid container justify="center" className="sketchHolder" spacing={3}>
            <Hidden mdDown>
              <Grid item container justify="center" xs={12} md={4}> <h3>Concept 1</h3> </Grid>
              <Grid item container justify="center" xs={12} md={4}> <h3>Concept 2</h3> </Grid>
              <Grid item container justify="center" xs={12} md={4}> <h3>Concept 3</h3> </Grid>
            </Hidden>
            <Grid item container justify="center" xs={12} md={4}>
            {
              activeAvatar && activeRequirement ?
              <Paper onClick={() => handleBackDrop(sketch[(activeAvatar - 1) * 9 + (activeRequirement - 1) * 3 + 0], true)}>
                <Hidden mdUp> <h3>Concept 1</h3> </Hidden>
                <img src={sketch[(activeAvatar - 1) * 9 + (activeRequirement - 1) * 3 + 0]} alt={`00${activeAvatar}R${activeRequirement}C1`}/>
              </Paper>
              : <Skeleton variant="rect" width="90%" height={200} />
            }
            </Grid>
            <Grid item container justify="center" xs={12} md={4}>
            {
              activeAvatar && activeRequirement ?
              <Paper onClick={() => handleBackDrop(sketch[(activeAvatar - 1) * 9 + (activeRequirement - 1) * 3 + 1], true)}>
                <Hidden mdUp> <h3>Concept 2</h3> </Hidden>
                <img src={sketch[(activeAvatar - 1) * 9 + (activeRequirement - 1) * 3 + 1]} alt={`00${activeAvatar}R${activeRequirement}C2`}/>
              </Paper>
              : <Skeleton variant="rect" width="90%" height={200} />
            }
              </Grid>
            <Grid item container justify="center" xs={12} md={4}>
            {
              activeAvatar && activeRequirement ?
              <Paper onClick={() => handleBackDrop(sketch[(activeAvatar - 1) * 9 + (activeRequirement - 1) * 3 + 2], true)}>
                <Hidden mdUp> <h3>Concept 3</h3> </Hidden>
                <img src={sketch[(activeAvatar - 1) * 9 + (activeRequirement - 1) * 3 + 2]} alt={`00${activeAvatar}R${activeRequirement}C3`}/>
              </Paper>
              : <Skeleton variant="rect" width="90%" height={200} />
            }
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>Before & After</h2>

        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>LoFi Prototype</h2>
          <p>
          最後決定使用APP來達成我們的 Design Requirements，以下是3個使用情境與對應的操作影片
          </p>
          <div>
            <Chip
              icon={<AddLocationIcon />}
              label="情境 1 新增地點及空間，並設定權限"
              clickable
              color="primary"
              variant={activeVideo === 1 ? "default" : "outlined"}
              onClick={activeVideo === 1 ? () => setActiveVideo(0) : () => setActiveVideo(1)}
            />
            <Chip
              icon={<EditIcon />}
              label="情境 2 記錄物品"
              clickable
              color="primary"
              variant={activeVideo === 2 ? "default" : "outlined"}
              onClick={activeVideo === 2 ? () => setActiveVideo(0) : () => setActiveVideo(2)}
            />
            <Chip
              icon={<SearchIcon />}
              label="情境 3 找物品、共編及提醒歸位"
              clickable
              color="primary"
              variant={activeVideo === 3 ? "default" : "outlined"}
              onClick={activeVideo === 3 ? () => setActiveVideo(0) : () => setActiveVideo(3)}
            />
          </div>
          <div className={classes.videoDescription}>
            {situation[activeVideo]}
          </div>
          {
            activeVideo ?
              <iframe width="560" height="315" title="video" src={videoList[activeVideo]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            : <Skeleton variant="rect" width={560} height={315} />
          }

        </Paper>
      </Grid>

      <Backdrop className={classes.backdrop} open={showSketch} onClick={() => handleBackDrop(null, false)}>
        <Zoom in={showSketch}>
          <img src={activeSketch} alt="sketch big"/>
        </Zoom>
      </Backdrop>
    </Grid>
  );
};

export default Milestone4;
