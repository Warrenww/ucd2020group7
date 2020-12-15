import React from 'react';
import StyleIcon from '@material-ui/icons/Style';
import BusinessIcon from '@material-ui/icons/Business';
import LockIcon from '@material-ui/icons/Lock';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const circumstances = [
  {
    index: '情境一',
    title: '建立虛擬空間並分享',
    description: '今天你公司所在的部門有數個公用的櫃子，存放了一些共用的物品。由於部門同事眾多，常常會有其他同事拿走了物品而造成另一人找不到的情況發生。你上網查到iRemember這個APP能夠協助個人與團體管理物品，並可幫助人們快速找到找不到的東西，於是你想透過iRemember建立一個虛擬空間，模擬部門內存放物品的情形，並且邀請部門的王大明加入這個虛擬空間共同管理，並同意王大明可以加入此空間。',
    step: [
      '新增地點-公司',
      '邀請王大明',
      '同意王大明加入(任務complete)',
    ],
  },
  {
    index: '情境二',
    title: '新增物品紀錄',
    description: '在加入同事們之後，你開始想要將一些常用卻經常找不到的東西記錄到iRemeber當中，（於是再繼續建立公司中的區域及櫃子），第一個想到最常找不到的就是放在部門公用櫃當中的投影設備-chromecast。',
    step: [
      '新增一個叫做公用區域的房間',
      '在公用區中新增櫃子–文具櫃',
      '新增chromecast',
    ],
  },
  {
    index: '情境三',
    title: '尋找不見的東西',
    description: '因為它時常被拿去小房間做投影（注意：此小房間非會議室，裡面沒有投影設備，且會議室經常被booked滿了），使用後卻沒放回公用櫃中，大家經常會找不到。如果可以透過iRemember檢視，只要被拿走，紀錄就會被手動更新成不在原位，而大家也可以搜尋該產品後，清楚知道是被誰拿走。假設今天你的部門臨時需要進行討論，而大家約在小房間討論。因此，在開會前你需要先找出並裝好chromecast。',
    step: [
      '搜尋chromecast',
      '取出chromecast',
      '並記錄已取出物品',
    ],
  },
  {
    index: '情境四',
    title: '更改物品權限',
    description: '今天你今天是李張三，你買了一把新的剪刀，所以你想要把原本私人的舊剪刀公開到公用區域給大家使用。',
    step: [
      '將你原本放在你辦公區的書桌抽屜A的剪刀更改位置到公用區的文具櫃',
      '將剪刀的權限設置為公開',
    ],
  },
];

const table = [
  {
    id: 'U01',
    age: '22',
    gender: '女',
    ocp: '學生',
  },
  {
    id: 'U02',
    age: '22',
    gender: '女',
    ocp: '學生',
  },
  {
    id: 'U03',
    age: '24',
    gender: '男',
    ocp: '學生',
  },
];

const feedbacks = [
  {
    title: '物品資訊卡片',
    icon: <StyleIcon />,
  },
  {
    title: '空間層級概念',
    icon: <BusinessIcon />,
  },
  {
    title: '權限疊加問題',
    icon: <LockIcon />,
  },
  {
    title: '其他',
    icon: <ErrorOutlineIcon />,
  }
];

export {
  circumstances,
  table,
  feedbacks,
};
