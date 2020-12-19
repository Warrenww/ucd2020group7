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

import SearchIcon from '@material-ui/icons/Search';
import CategoryIcon from '@material-ui/icons/Category';
import PeopleIcon from '@material-ui/icons/People';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WidgetsIcon from '@material-ui/icons/Widgets';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LockIcon from '@material-ui/icons/Lock';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import HistoryIcon from '@material-ui/icons/History';
import NfcIcon from '@material-ui/icons/Nfc';
import NoteIcon from '@material-ui/icons/Note';
import StorageIcon from '@material-ui/icons/Storage';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';
import ScreenLockPortraitIcon from '@material-ui/icons/ScreenLockPortrait';
import PaymentIcon from '@material-ui/icons/Payment';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import Photo001 from '../../images/001.jpg';
import Photo002 from '../../images/002.jpg';
import Photo003 from '../../images/003.jpg';
import Photo004 from '../../images/004.jpg';
import Photo005 from '../../images/005.jpg';
import { sketch, situation, videoList } from './data';
import useStyles from '../../constant/styles';

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
        <Paper className={`${classes.paper} ${classes.widgetsPaper}`}>
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
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <h2>Concept that remain</h2>
          <h3>Requirement 1</h3>
          <Alert severity="success" variant="outlined" className={classes.highlight} icon={<ShareIcon />}>
              <AlertTitle><b>使用APP創建虛擬共享空間</b></AlertTitle>
              APP創建帳號相對容易，且手機已被大眾廣泛使用。用APP創建虛擬共享空間，使用及紀錄都很便利。
          </Alert>
          <Alert severity="success" variant="outlined" className={classes.highlight} icon={<VisibilityIcon />}>
              <AlertTitle><b>可以自訂義2D平面空間規劃，讓成員以視覺化方式管理空間</b></AlertTitle>
              使用者可以針對自己的需求建立空間，以視覺化的方式呈現更加直觀。
          </Alert>
          <Alert severity="success" variant="outlined" className={classes.highlight} icon={<LockIcon />}>
              <AlertTitle><b>透過APP紀錄物品/個人物品</b></AlertTitle>
              透過權限設定，讓共享空間的成員可以擁有不同的隱私層級
          </Alert>
          <Divider />
          <h3>Requirement 2</h3>
          <Alert severity="success" variant="outlined" className={classes.highlight} icon={<EditIcon />}>
            <AlertTitle><b>透過APP紀錄物品</b></AlertTitle>
            良好的紀錄及整理有利於搜尋
          </Alert>
          <Alert severity="success" variant="outlined" className={classes.highlight} icon={<SearchIcon />}>
            <AlertTitle><b>建立APP搜尋功能</b></AlertTitle>
            可以快速查找資料，短時間找到目標物品
          </Alert>
          <Alert severity="success" variant="outlined" className={classes.highlight} icon={<LocalOfferIcon />}>
            <AlertTitle><b>以標籤的形式分類物品</b></AlertTitle>
            使用者對單一物品可能只有模糊的記憶，給予物品賦予標籤可以增加搜尋到目標物品的可能性
          </Alert>
          <Alert severity="success" variant="outlined" className={classes.highlight} icon={<PhotoCameraIcon />}>
            <AlertTitle><b>紀錄物品的相片</b></AlertTitle>
            搜尋物品時看到相片，可以更直觀地選擇相對應的物品以及回憶物品位置。
          </Alert>
          <Divider />
          <h3>Requirement 3</h3>
          <Alert severity="success" variant="outlined" className={classes.highlight} icon={<HistoryIcon />}>
            <AlertTitle><b>透過APP記錄物品使用的狀態(是否在原位、上次使用者是誰)</b></AlertTitle>
            養成良好的紀錄習慣進而養成物品歸位的習慣
          </Alert>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <h2>Concept that fade out</h2>
          <h3>Requirement 1</h3>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<NfcIcon />}>
              <AlertTitle><b>使用NFC 標籤記錄物品到共用的資料庫</b></AlertTitle>
              需要其他硬體的支援，每件物品上標籤過程較為繁瑣
          </Alert>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<NoteIcon />}>
              <AlertTitle><b>紙本工具，例如:共同筆記本、大白板</b></AlertTitle>

          </Alert>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<LockIcon />}>
              <AlertTitle><b>暫時提供權限給家人朋友編輯</b></AlertTitle>
              權限控制較為繁瑣
          </Alert>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<StorageIcon />}>
              <AlertTitle><b>使用資料庫存放所有物品的紀錄，共用物品的所有人會從資料庫更新物品紀錄</b></AlertTitle>
              資料庫設計與安全性考量
          </Alert>
          <Divider />
          <h3>Requirement 2</h3>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<SearchIcon />}>
            <AlertTitle><b>使用智慧眼鏡紀錄物品位置，透過智慧眼鏡搜尋物品</b></AlertTitle>
            需要額外的硬體配置，智慧眼鏡技術尚未成熟
          </Alert>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<LocationOnIcon />}>
            <AlertTitle><b>使用小型定位器，透過定位方式知道物品的位置</b></AlertTitle>
            需要額外硬體配置，每個物品都加上定位器較為麻煩
          </Alert>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<HistoryIcon />}>
            <AlertTitle><b>系統利用AI幫忙回憶可能出現的地點，或提供替代方案</b></AlertTitle>
            良好的AI model可能較難設計及訓練，需要考慮各種因素
          </Alert>
          <Divider />
          <h3>Requirement 3</h3>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<PermDeviceInformationIcon />}>
            <AlertTitle><b>使用家電、家具上的小型定位器或是掃描器，透過偵測物品是否在該在的位置上，進一步發出提醒</b></AlertTitle>
            使用家電、家具上的小型定位器或是掃描器，透過偵測物品是否在該在的位置上，進一步發出提醒
            硬體設備要放在每一個物品上面較無法普及，可能會有性能上或是價錢上的考量。
          </Alert>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<ScreenLockPortraitIcon />}>
            <AlertTitle><b>懲罰機制，手機鎖屏一段時間</b></AlertTitle>
            方法太過激進，使用者可能會考慮直接不使用此方法
          </Alert>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<PaymentIcon />}>
            <AlertTitle><b>懲罰機制，透過微電擊或是扣款等等，讓使用者對於亂丟物品這個壞習慣有更深的印象。</b></AlertTitle>
            方法太過激進，使用者可能會考慮直接不使用此方法
          </Alert>
          <Alert severity="error" variant="outlined" className={classes.highlight} icon={<SportsEsportsIcon />}>
            <AlertTitle><b>在手機APP裡面設計遊戲，透過遊戲機制，請使用者養成紀錄物品及檢查物品的好習慣。</b></AlertTitle>
            遊戲機制可能缺乏使用的動力，無法維持長時間習慣性的使用。
          </Alert>
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
