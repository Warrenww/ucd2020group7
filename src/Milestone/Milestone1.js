import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import usePhoneImage from '../images/phone_older.jpg';
import cabinetImage from '../images/cabinet.jpg';
import walkingImage from '../images/walking.jpg';

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#333333aa',
    border: 0,
    borderRadius: 3,
    color: 'white',
    textAlign: 'center',
    padding: '30px',
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: 'cover',
    position: 'relative',
    backgroundBlendMode: 'multiply',
    height: 120,
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    '& *': {
      position: 'absolute',
      zIndex: 2,
      transition: '.3s ease-in-out',
      height: 120,
      margin: 30,
      display: 'flex',
      alignItems: 'center',
    },
    '& div': {
      bottom: -120,
    },
    '&:hover div': {
      bottom: 0,
    },
    '& h2': {
      top: 0
    },
    '&:hover h2': {
      top: -120,
    },
    '& .BG': {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 1,
      margin: 0,
    },
    '&:hover .BG': {
      backdropFilter: 'blur(5px)',
    }
  },
  content: {
    padding: 30,
    '& h2,h4': {
      textAlign: 'center',
    }
  },
});

const data = [
  {
    title: '長輩對手機介面操作行為不熟悉',
    short_intro: '用什麼方式讓長輩學習並習慣，且能避免誤觸造成的損失？',
    image: usePhoneImage,
    long_intro: '現在生活免不了用到手機聯絡、找資訊、購物等等，長輩在不習慣操作方式的情況下常常誤觸功能或是無法完成需求而放棄操作，因此或許可以集結常見操作時機配合行為（滑動網頁查看、點擊按鈕、滑動接聽電話等等），以模擬的方式讓長輩學習並習慣之，也能避免誤觸的造成損失。',
    important: '在資訊發達的社會，應該要幫助長輩學習，讓他們更容易適應，方便他們與後輩連絡。',
    stakeholders: '需要學習手機的長輩，會跟他們聯絡的後輩',
    why: '減少數位落差，方便他們生活、減少操作失敗而放棄的情形',
    worthwhile: '幫助他們學新科技，讓長輩可以對科技主導的社會有更好的適應',
    solveables: '目前幫助長輩熟悉手機介面的工作多落在晚輩或銷售手機的專員身上，而隨著年齡增長記憶力衰退，長輩們通常需要更多次的操作與教導才能熟悉，但目前的教導者並沒有這麼多的時間重複地教導長輩使用，所以將這種重複的工作交由軟體來執行，既可以減少教導者所需花費的時間，也能讓長輩獲得大量重複的練習。',
  },
  {
    title: '遺忘收納物品的位置',
    short_intro: '在不同的環境下，如何有效記錄自己已收納的物品？',
    image: cabinetImage,
    long_intro: '東西太多或空間不足的情況下常常在需要時找不到東西，可以規劃與市面上此類APP不同的管理方式，減少找東西花費的時間也方便管理自己擁有的資源（軟硬體？）。',
    important: '找不到自己要找的東西是每個人都會有的煩惱，特別是在趕時間的時候，很常會有一些東西突然想帶但又忘記它放在哪裡。',
    stakeholders: '任何人，平常東西很亂的，會因為太亂而找不到，太整齊的，會因為那個東西「放很太好」而找不到。',
    why: '如果是貴重物品、重要文件找不到，會非常困擾，且需要花費很多時間去找。另外，現在的人接受太多訊息，需要記的事情太多，時常會忘記瑣碎小事，能將這種事情交給科技對人類是一大福音。',
    worthwhile: '便利生活，掌握資源使之更有系統。',
    solveables: '市面上雖存在協助物品收納的APP，但多以類似備忘錄的方式條列出所擁有的物品，分類與空間格局的吻合度較低，因此希望能夠讓管理與呈現的方式更貼近所在環境。',
  },
  {
    title: '徒步環島資訊零散、蒐集不易',
    short_intro: '用什麼樣的方式可以更方便取得完整的徒步環島資訊？',
    image: walkingImage,
    long_intro: (
      <div style={{textAlign: 'left'}}>
        <h2>徒步環島 — 用雙腳環台灣島</h2>
        徒步環島是一個需要大量資訊的活動。相較於腳踏車環島以及其他交通工具的環島，徒步環島的所遇到的問題較為多元，且資訊來源少又分散。
      </div>
    ),
    important: (
      <div>
        <div>1. 徒步環島的人數為少數，在各大論壇上找不到特定專區</div>
        <div>2. 貼文的方式很容易被洗版，且過一段時間就會出現重複性問題</div>
        <div>3. 問題多元，但並沒有標籤或是分類</div>
      </div>
    ),
    stakeholders: '準備出發、正在進行、已完成徒步環島的人',
    why: (
      <div>
        <div>1. 更快速方便取得特定問題的徒步環島完整資訊</div>
        <div>2. 提供更好的尋求協助、給予建議以及分享經驗的社群環境</div>
      </div>
    ),
    worthwhile: '',
    solveables: '',
  },
];

const ImagePaper = ({
  title,
  short_intro,
  image,
  active,
}) => {
  const classes = useStyles({image});

  return (
    <Paper className={classes.paper} elevation={active ? 20 : 3}>
      <h2>{title}</h2>
      <div>{short_intro}</div>
      <div className="BG"></div>
    </Paper>
  )
}

const Milestone1 = props => {
  const classes = useStyles();
  const [active, setActive] = useState(0);
  const properties = [
    {
      key: 'important',
      title: 'Is it important to solve?',
    },
    {
      key: 'stakeholders',
      title: 'Who are the stakeholders?',
    },
    {
      key: 'why',
      title: 'why is it important?',
    },
    {
      key: 'worthwhile',
      title: 'Is it worthwhile? (what’s the cost and benefit?)',
    },
    {
      key: 'solveables',
      title: 'Is it solveables? (why hasn’t it been solved?)',
    },
  ];

  return (
    <Grid container spacing={3} justify="center" alignItems="stretch">
      {
        data.map((x, i) => (
          <Grid item md={4} xs={12} key={x.title} onClick={() => setActive(i)}>
            <ImagePaper {...x} active={active === i}/>
          </Grid>
        ))
      }
      <Grid item xs={12}>
        <Paper className={classes.content}>
          <h2>{data[active].title}</h2>
          <h4>{data[active].long_intro}</h4>
        </Paper>
      </Grid>
      {
        properties.map(p => (
          <Grid item xs={6} >
            <Paper className={classes.content}>
              <h4>{p.title}</h4>
              <div>{data[active][p.key]}</div>
            </Paper>
          </Grid>
        ))
      }
    </Grid>
  )
}
export default Milestone1;
