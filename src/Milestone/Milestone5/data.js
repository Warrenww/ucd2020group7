import React from 'react';
import StyleIcon from '@material-ui/icons/Style';
import BusinessIcon from '@material-ui/icons/Business';
import LockIcon from '@material-ui/icons/Lock';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import Lofi_InfoCard from '../../images/LoFi prototype/infoCard.jpg';
import Hifi_InfoCard from '../../images/HiFi prototype/infoCard.png';
import Lofi_takePicture from '../../images/LoFi prototype/takePicture.jpg';
import Hifi_editItem from '../../images/HiFi prototype/editItem.png';
import Lofi_InfoCard_alt from '../../images/LoFi prototype/infoCard_alt.jpg';
import Hifi_InfoCard_alt from '../../images/HiFi prototype/infoCard_alt.png';
import Lofi_newPlace from '../../images/LoFi prototype/newPlace.jpg';
import Hifi_grid from '../../images/HiFi prototype/grid.png';
import Lofi_indoorDesign from '../../images/LoFi prototype/indoorDesign.jpg';
import Hifi_takePicture from '../../images/HiFi prototype/takePicture.png';
import Lofi_auth from '../../images/LoFi prototype/auth.jpg';
import Hifi_auth from '../../images/HiFi prototype/auth.png';
import Hifi_invite from '../../images/HiFi prototype/invite.png';
import Lofi_index from '../../images/LoFi prototype/index.jpg';

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
    nodeId: '249%3A1812',
    video: 'https://drive.google.com/file/d/1lzGpZXx5VI-wDiugTOXJ4oeniOJ3x-TZ/preview',
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
    nodeId: '278%3A2084',
    video: 'https://drive.google.com/file/d/1aOekWDDahB7biqTb61PP3FSRVyWvy6Lz/preview',
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
    nodeId: '410%3A0',
    video: 'https://drive.google.com/file/d/1PHy1RE7GhF4OSOHngOd2Kk_jZLK3gYB8/preview',
  },
  {
    index: '情境四',
    title: '更改物品權限',
    description: '今天你今天是李張三，你買了一把新的剪刀，所以你想要把原本私人的舊剪刀公開到公用區域給大家使用。',
    step: [
      '將你原本放在你辦公區的書桌抽屜A的剪刀更改位置到公用區的文具櫃',
      '將剪刀的權限設置為公開',
    ],
    nodeId: '670%3A13120',
    video: 'https://drive.google.com/file/d/1C-dmfEGVDZwmp6OG5FCxFSrtN9Tv_87r/preview',
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
    children: [
      {
        title: '檢視物品資訊卡時呈現太多資訊，使用者不易快速找到重要資訊',
        before: {
          description: '全部資訊呈現在一張卡片',
          image: Lofi_InfoCard,
        },
        after: {
          description: <>只留下<b>物品名稱</b> <b>物品位置</b> <b>物品狀態</b> 及 <b>更多</b></>,
          image: Hifi_InfoCard,
        },
        idea: '簡化檢視物品的介面，只呈現最重要的資訊，其他資訊預設為隱藏,詳細內容須點擊更多才可以展開查看。',
      },
      {
        title: '紀錄物品的拍照功能，會讓使用者覺得不知所措。',
        before: {
          description: '新增物品的第一個動作為拍照，會打開相機鏡頭請使用者拍照。使用者也可以選擇跳過',
          image: Lofi_takePicture,
        },
        after: {
          description: '使用者直接進入物品資訊卡，拍照可以依使用者習慣選擇要不要替物品拍照。',
          image: Hifi_editItem,
        },
        idea: '紀錄物品的拍照不是必須，點選新增物品後，直接打開鏡頭請使用者拍照有點過於強迫。於是我們保留這個功能，但點選新增物品後，會直接進入編輯物品資訊頁面，而不是打開鏡頭。',
      },
      {
        title: '改變物品狀態的按鈕會讓人混淆，不知道現在顯示的是狀態，還是使用者要做的行為。',
        before: {
          description: '物品狀態為不在原位時，icon為一個箱子打開的樣子，此點擊此按鈕表示將物品放回，icon會變成一個關閉的箱子。反之亦然。',
          image: Lofi_InfoCard_alt,
        },
        after: {
          description: <>加入文字去提示使用者，當icon為一個箱子打開時，加上 <b>放回</b> 的文字，提示使用者這個狀態按下按鈕表示要將物品放回。反之，關著的箱子加上<b>取出</b> 文字。</>,
          image: Hifi_InfoCard,
        },
        idea: '讓物品的icon同時呈現狀態，又可以清楚提示使用者按下按鈕的動作表達的意義。',
      },
      {
        title: <>物品若為 <b>不在原位</b> 的狀態，若能直接顯示上一位使用者，這樣尋找物品時較方便。</>,
        before: {
          description: '物品資訊卡只會顯示現在物品在不在原本放置位置的資訊',
          image: Lofi_InfoCard_alt,
        },
        after: {
          description: '當物品不在原位時，直接顯示上一位使用者e.g. 20:38 被王大明取走',
          image: Hifi_InfoCard_alt,
        },
        idea: '查看物品是否在原位的狀態，通常就是要使用物品，若是不在原位，可以直接找上一位使用者詢問。',
      },
    ],
  },
  {
    title: '空間層級概念',
    icon: <BusinessIcon />,
    children: [
      {
        title: <>使用<b>地點</b> <b>房間</b> <b>櫃子</b>等字詞讓使用者對於空間層級概念很混淆</>,
        before: {
          description: '由外至內，空間層級分別為地點 > 空間 > 櫃子',
          image: Lofi_newPlace,
        },
        after: {
          description: '新增空間用來佈局，新增置物處可在內部放置物品。使用者可以在任意空間或置物處創造新的內層空間或置物處。新增物品位置不再受限於櫃子內。',
          image: Hifi_grid,
        },
        idea: '使用者對於自己的空間安排有較大的彈性。',
      },
      {
        title: '若只是要知道物品放置的位置，2D圖並沒有增加視覺化的好處。',
        before: {
          description: (
            <ul>
              <li>可以設計自己空間的2D平面圖，包含空間的格局。</li>
              <li>物品位置只有用文字顯示</li>
            </ul>
          ),
          image: Lofi_indoorDesign,
        },
        after: {
          description: (
            <ul>
              <li>將2D空間格局圖用簡易的方框取代</li>
              <li>可以拍攝物品存放的位置附近的環境。</li>
            </ul>
          ),
          image: Hifi_takePicture,
        },
        idea: (
          <ul>
            <li>保留可視覺化的功能，但以更簡單易懂的介面呈現</li>
            <li>使用者對於地點的影像記憶會比文字記憶還要好，看到某個環境的照片，可以回想起那是什麼地方，有助於使用者快速查找及取得物品。</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: '權限疊加問題',
    icon: <LockIcon />,
    children: [
      {
        title: '各個空間層級及物品都擁有各自的權限設定，疊加結果的權限關係不明確。',
        before: {
          description: '各空間層級以及物品都可以設定權限',
          image: Lofi_auth,
        },
        after: {
          description: '只有物品可以設定權限',
          image: Hifi_auth,
        },
        idea: '為了簡化操作過程，我們把權限的部份直接放到物品才能設定。',
      },
    ],
  },
  {
    title: '其他',
      icon: <ErrorOutlineIcon />,
    children: [
      {
        title: '地點的分享鍵，讓使用者無法聯想到是邀請其他人共同編輯',
        before: {
          description: '在每一個地點的名稱右邊有一個分享的icon，使用者可以透過按下此鍵邀請別人加入此空間，一起共同編輯。',
          image: Lofi_indoorDesign,
        },
        after: {
          description: <>將<b>分享</b>改成<b>邀請</b></>,
          image: Hifi_invite,
        },
        idea: '分享鍵在現今的軟體裡面，通常表達分享一種狀態，例如分享自己的遊戲分數、截圖、網頁等等，使用者無法將此按鈕聯想到邀請別人共同編輯。因此將按鈕改成邀請可能會更加值觀。',
      },
      {
        title: <><b>釘選項目</b> <b>我的最愛</b> <b>不在原位</b> 這三個特殊資料夾，在一開始顯示的時候會是空的，使用者會不知道那個欄位要呈現的是什麼樣的資訊</>,
        before: {
          description: '在首頁有三個已劃分好的區塊，分別用來呈現釘選項目 我的最愛 不在原位 三種擁有特別標籤的物品。',
          image: Lofi_index,
        },
        after: {
          description: '釘選項目 我的最愛 不在原位 成為三個固定大小的方塊(預設的資料夾)，固定在首頁最上方，只有被點擊時才會被展開。',
          image: Hifi_invite,
        },
        idea: '利用捷徑的概念去呈現三種特殊資料夾。當我們要使用的時候再展開。',
      },
    ],
  }
];

export {
  circumstances,
  table,
  feedbacks,
};
