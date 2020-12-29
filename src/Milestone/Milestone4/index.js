import React, { useState } from 'react';
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
  Divider,
} from '@material-ui/core';
import { Alert, AlertTitle, Skeleton } from '@material-ui/lab';

import FloatIn from '../../Components/FloatIn';
import Icons from '../../constants/icons';
import BlankSpace from '../../Components/BlankSpace';
import Photo001 from '../../images/001.jpg';
import Photo002 from '../../images/002.jpg';
import Photo003 from '../../images/003.jpg';
import Photo004 from '../../images/004.jpg';
import Photo005 from '../../images/005.jpg';

import { sketch, situation, videoList, requirements } from './data';
import useStyles from '../../constants/styles';

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
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <h2>Key Finding</h2>
              <FloatIn direction="left">
                <Alert severity="info" variant="outlined" className={classes.highlight} icon={<Icons.Search />}>
                    <AlertTitle>Finding 1</AlertTitle>
                    常因隨手放、沒歸位及或使用頻率低會造成不知道東西放哪，從而找不到東西
                </Alert>
                <Alert severity="info" variant="outlined" className={classes.highlight} icon={<Icons.Category />}>
                    <AlertTitle>Finding 2</AlertTitle>
                    妥善分類可以方便未來尋找，但若是收到收太隱密的地方，時間一久，也有可能忘記自己當初把東西收在哪裡。
                </Alert>
                <Alert severity="info" variant="outlined" className={classes.highlight} icon={<Icons.People />}>
                    <AlertTitle>Finding 3</AlertTitle>
                    找不到東西時，會先請親友幫忙找，若非重要物品且有其他替代品，就會先以其他物品替代，因為某天可能該物品就會不經意出現。
                </Alert>
                <Alert severity="info" variant="outlined" className={classes.highlight} icon={<Icons.PhoneIphone />}>
                    <AlertTitle>Finding 3</AlertTitle>
                    希望有一款APP，可以用拍照和語音的方式輸入或存檔，用視覺化的方式呈現，並可以製作個人的虛擬空間，有分類規劃、共同編輯、提醒功能，還可以用標籤分類及搜尋。希望APP簡易操作不耗時。
                </Alert>
              </FloatIn>
              <Link to="/milestone/2">
                <Button>前往 Milestone 2</Button>
              </Link>
            </Grid>

            <Grid item xs={12} md={6}>
              <h2>Design Requirement</h2>
              <FloatIn direction="right">
              {
                requirements.map((x, i) => (
                  <Alert severity="warning" variant={activeRequirement === i + 1 ? "filled" : "outlined"} className={classes.highlight} icon={x.icon}>
                    <AlertTitle>Requirement {i + 1}</AlertTitle>
                    {x.content}
                  </Alert>
                ))
              }
              </FloatIn>
            </Grid>

          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`} id='sketch'>
          <h2>Sketch</h2>
          <p>
            以下是組員們對於每個Design Requirement畫出來的3個發想<br/>
            請選擇一個requirement與一位組員查看他的sketch
          </p>
          <div>
            <Chip
              icon={<Icons.People />}
              label="Requirement 1"
              clickable
              color="primary"
              variant={activeRequirement === 1 ? "default" : "outlined"}
              onClick={activeRequirement === 1 ? () => setActiveRequirement(0) : () => setActiveRequirement(1)}
            />
            <Chip
              icon={<Icons.Search />}
              label="Requirement 2"
              clickable
              color="primary"
              variant={activeRequirement === 2 ? "default" : "outlined"}
              onClick={activeRequirement === 2 ? () => setActiveRequirement(0) : () => setActiveRequirement(2)}
            />
            <Chip
              icon={<Icons.Widgets />}
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
              <Grid item container justify="center" xs={12} md={4}> <h3>Concept 1</h3> <Divider /> </Grid>
              <Grid item container justify="center" xs={12} md={4}> <h3>Concept 2</h3> <Divider /> </Grid>
              <Grid item container justify="center" xs={12} md={4}> <h3>Concept 3</h3> <Divider /> </Grid>
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
          從每位組員的Sketch到Lofi prototype，我們將每個concept取出，討論其可行性，將其中較可行的concept留下，
          作為Lofi prototype呈現的內容。
          <BlankSpace />
          <Grid container spacing={3} justify="center">
          {
            [1, 2, 3].map(i => (
              <>
                <Grid item xs={12}><h2>Requirement {i}</h2></Grid>
                <Grid item xs={12}><h3>{requirements[i - 1].content}</h3></Grid>
                <Grid item xs={12} md={6}>
                  <h3>Concept that remain</h3>
                  <FloatIn direction="left">
                  {
                      requirements[i - 1].concept.remain.map(x => (
                        <Alert key={x.title} severity="success" variant="outlined" className={classes.highlight} icon={x.icon}>
                          <AlertTitle><b>{x.title}</b></AlertTitle>
                          {x.content}
                        </Alert>
                      ))
                  }
                  </FloatIn>
                </Grid>
                <Grid item xs={12} md={6}>
                  <h3>Concept that dropped</h3>
                  <FloatIn direction="right">
                  {
                      requirements[i - 1].concept.drop.map(x => (
                        <Alert key={x.title} severity="error" variant="outlined" className={classes.highlight} icon={x.icon}>
                          <AlertTitle><b>{x.title}</b></AlertTitle>
                          {x.content}
                        </Alert>
                      ))
                  }
                  </FloatIn>
                </Grid>
                <Divider />
              </>
            ))
          }
          </Grid>
        </Paper>
      </Grid>


      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`}>
          <h2>LoFi Prototype</h2>
          <p>
          最後決定使用APP來達成我們的 Design Requirements，以下是3個使用情境與對應的操作影片
          </p>
          <div>
            <Chip
              icon={<Icons.AddLocation />}
              label="情境 1 新增地點及空間，並設定權限"
              clickable
              color="primary"
              variant={activeVideo === 1 ? "default" : "outlined"}
              onClick={activeVideo === 1 ? () => setActiveVideo(0) : () => setActiveVideo(1)}
            />
            <Chip
              icon={<Icons.Edit />}
              label="情境 2 記錄物品"
              clickable
              color="primary"
              variant={activeVideo === 2 ? "default" : "outlined"}
              onClick={activeVideo === 2 ? () => setActiveVideo(0) : () => setActiveVideo(2)}
            />
            <Chip
              icon={<Icons.Search />}
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
              <iframe width="560" height="315" title="video" src={videoList[activeVideo]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
