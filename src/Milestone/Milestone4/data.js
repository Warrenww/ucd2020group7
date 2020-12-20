import React from 'react';

import sketch001R1C1 from '../../images/sketch/001/R1C1.jpg';
import sketch001R1C2 from '../../images/sketch/001/R1C2.jpg';
import sketch001R1C3 from '../../images/sketch/001/R1C3.jpg';
import sketch001R2C1 from '../../images/sketch/001/R2C1.jpg';
import sketch001R2C2 from '../../images/sketch/001/R2C2.jpg';
import sketch001R2C3 from '../../images/sketch/001/R2C3.jpg';
import sketch001R3C1 from '../../images/sketch/001/R3C1.jpg';
import sketch001R3C2 from '../../images/sketch/001/R3C2.jpg';
import sketch001R3C3 from '../../images/sketch/001/R3C3.jpg';

import sketch002R1C1 from '../../images/sketch/002/R1C1.JPG';
import sketch002R1C2 from '../../images/sketch/002/R1C2.JPG';
import sketch002R1C3 from '../../images/sketch/002/R1C3.JPG';
import sketch002R2C1 from '../../images/sketch/002/R2C1.JPG';
import sketch002R2C2 from '../../images/sketch/002/R2C2.JPG';
import sketch002R2C3 from '../../images/sketch/002/R2C3.JPG';
import sketch002R3C1 from '../../images/sketch/002/R3C1.JPG';
import sketch002R3C2 from '../../images/sketch/002/R3C2.JPG';
import sketch002R3C3 from '../../images/sketch/002/R3C3.JPG';

import sketch003R1C1 from '../../images/sketch/003/R1C1.jpg';
import sketch003R1C2 from '../../images/sketch/003/R1C2.jpg';
import sketch003R1C3 from '../../images/sketch/003/R1C3.jpg';
import sketch003R2C1 from '../../images/sketch/003/R2C1.jpg';
import sketch003R2C2 from '../../images/sketch/003/R2C2.jpg';
import sketch003R2C3 from '../../images/sketch/003/R2C3.jpg';
import sketch003R3C1 from '../../images/sketch/003/R3C1.jpg';
import sketch003R3C2 from '../../images/sketch/003/R3C2.jpg';
import sketch003R3C3 from '../../images/sketch/003/R3C3.jpg';

import sketch004R1C1 from '../../images/sketch/004/R1C1.jpg';
import sketch004R1C2 from '../../images/sketch/004/R1C2.jpg';
import sketch004R1C3 from '../../images/sketch/004/R1C3.jpg';
import sketch004R2C1 from '../../images/sketch/004/R2C1.jpg';
import sketch004R2C2 from '../../images/sketch/004/R2C2.jpg';
import sketch004R2C3 from '../../images/sketch/004/R2C3.jpg';
import sketch004R3C1 from '../../images/sketch/004/R3C1.jpg';
import sketch004R3C2 from '../../images/sketch/004/R3C2.jpg';
import sketch004R3C3 from '../../images/sketch/004/R3C3.jpg';

import sketch005R1C1 from '../../images/sketch/005/R1C1.png';
import sketch005R1C2 from '../../images/sketch/005/R1C2.png';
import sketch005R1C3 from '../../images/sketch/005/R1C3.png';
import sketch005R2C1 from '../../images/sketch/005/R2C1.png';
import sketch005R2C2 from '../../images/sketch/005/R2C2.png';
import sketch005R2C3 from '../../images/sketch/005/R2C3.png';
import sketch005R3C1 from '../../images/sketch/005/R3C1.png';
import sketch005R3C2 from '../../images/sketch/005/R3C2.png';
import sketch005R3C3 from '../../images/sketch/005/R3C3.png';

import Icons from '../../constant/icons';

const sketch = [
  sketch001R1C1,
  sketch001R1C2,
  sketch001R1C3,
  sketch001R2C1,
  sketch001R2C2,
  sketch001R2C3,
  sketch001R3C1,
  sketch001R3C2,
  sketch001R3C3,
  sketch002R1C1,
  sketch002R1C2,
  sketch002R1C3,
  sketch002R2C1,
  sketch002R2C2,
  sketch002R2C3,
  sketch002R3C1,
  sketch002R3C2,
  sketch002R3C3,
  sketch003R1C1,
  sketch003R1C2,
  sketch003R1C3,
  sketch003R2C1,
  sketch003R2C2,
  sketch003R2C3,
  sketch003R3C1,
  sketch003R3C2,
  sketch003R3C3,
  sketch004R1C1,
  sketch004R1C2,
  sketch004R1C3,
  sketch004R2C1,
  sketch004R2C2,
  sketch004R2C3,
  sketch004R3C1,
  sketch004R3C2,
  sketch004R3C3,
  sketch005R1C1,
  sketch005R1C2,
  sketch005R1C3,
  sketch005R2C1,
  sketch005R2C2,
  sketch005R2C3,
  sketch005R3C1,
  sketch005R3C2,
  sketch005R3C3,
];

const situation = [
  <></>,
  <>
  <h3>新增地點及空間，並設定權限</h3>
  你覺得iRemeber實在太好用了，決定到公司與同事們分享這個App並說服大家辦帳號。於是，你新增了一個地點-公司，以及公司內的公用區與茶水間，並讓同事們使用輸入空間（或地點）的ID加入你所創建的辦公室空間。
  </>,
  <>
    <h3>記錄物品（首次用APP，新記錄物品）</h3>
    試想你今天幫公司買了兩罐洗手乳（是買一送一優惠的）但因為一兩個月才會需要使用到新的一罐，因此，你想要使用iRemember把還用不到的那罐收納至茶水間並記錄。
  </>,
  <>
    <h3>找物品、共編及提醒歸位</h3>
    今天買了一把新剪刀，所以就要把舊的換權限以及存放位置，所以一開始就用了iRemember來找它，然後更改它的資訊，並使用提醒功能。
  </>,
];

const videoList = [
  "",
  "https://www.youtube.com/embed/BATgs9OYJsM",
  "https://www.youtube.com/embed/75-CDEjfHOw",
  "https://www.youtube.com/embed/bYKvWjBG_zA",
];

const conceptRemaining = [
  {
    requirement: 1,
    icon: <Icons.Share />,
    title: '使用APP創建虛擬共享空間',
    content: 'APP創建帳號相對容易，且手機已被大眾廣泛使用。用APP創建虛擬共享空間，使用及紀錄都很便利。',
  },
  {
    requirement: 1,
    icon: <Icons.Visibility />,
    title: '可以自訂義2D平面空間規劃，讓成員以視覺化方式管理空間',
    content: '使用者可以針對自己的需求建立空間，以視覺化的方式呈現更加直觀。',
  },
  {
    requirement: 1,
    icon: <Icons.Lock />,
    title: '透過APP紀錄物品/個人物品',
    content: '透過權限設定，讓共享空間的成員可以擁有不同的隱私層級',
  },
  {
    requirement: 2,
    icon: <Icons.Edit />,
    title: '透過APP紀錄物品',
    content: '良好的紀錄及整理有利於搜尋',
  },
  {
    requirement: 2,
    icon: <Icons.Search />,
    title: '建立APP搜尋功能',
    content: '可以快速查找資料，短時間找到目標物品',
  },
  {
    requirement: 2,
    icon: <Icons.LocalOffer />,
    title: '以標籤的形式分類物品',
    content: '使用者對單一物品可能只有模糊的記憶，給予物品賦予標籤可以增加搜尋到目標物品的可能性',
  },
  {
    requirement: 2,
    icon: <Icons.PhotoCamera />,
    title: '紀錄物品的相片',
    content: '搜尋物品時看到相片，可以更直觀地選擇相對應的物品以及回憶物品位置。',
  },
  {
    requirement: 3,
    icon: <Icons.History />,
    title: '透過APP記錄物品使用的狀態(是否在原位、上次使用者是誰)',
    content: '養成良好的紀錄習慣進而養成物品歸位的習慣',
  },
];

const conceptFadeOut = [
  {
    requirement: 1,
    icon: <Icons.Nfc />,
    title: '使用NFC 標籤記錄物品到共用的資料庫',
    content: '需要其他硬體的支援，每件物品上標籤過程較為繁瑣',
  },
  {
    requirement: 1,
    icon: <Icons.Note />,
    title: '紙本工具，例如:共同筆記本、大白板',
    content: '',
  },
  {
    requirement: 1,
    icon: <Icons.Lock />,
    title: '暫時提供權限給家人朋友編輯',
    content: '權限控制較為繁瑣',
  },
  {
    requirement: 1,
    icon: <Icons.Lock />,
    title: '使用資料庫存放所有物品的紀錄，共用物品的所有人會從資料庫更新物品紀錄',
    content: '資料庫設計與安全性考量',
  },
  {
    requirement: 2,
    icon: <Icons.Search />,
    title: '使用智慧眼鏡紀錄物品位置，透過智慧眼鏡搜尋物品',
    content: '需要額外的硬體配置，智慧眼鏡技術尚未成熟',
  },
  {
    requirement: 2,
    icon: <Icons.LocationOn />,
    title: '使用小型定位器，透過定位方式知道物品的位置',
    content: '需要額外硬體配置，每個物品都加上定位器較為麻煩',
  },
  {
    requirement: 2,
    icon: <Icons.History />,
    title: '系統利用AI幫忙回憶可能出現的地點，或提供替代方案',
    content: '良好的AI model可能較難設計及訓練，需要考慮各種因素',
  },
  {
    requirement: 3,
    icon: <Icons.PermDeviceInformation />,
    title: '使用家電、家具上的小型定位器或是掃描器，透過偵測物品是否在該在的位置上，進一步發出提醒',
    content: (
      <>
        <div>使用家電、家具上的小型定位器或是掃描器，透過偵測物品是否在該在的位置上，進一步發出提醒</div>
        <div>硬體設備要放在每一個物品上面較無法普及，可能會有性能上或是價錢上的考量。</div>
      </>
    ),
  },
  {
    requirement: 3,
    icon: <Icons.ScreenLockPortrait />,
    title: '懲罰機制，手機鎖屏一段時間',
    content: '方法太過激進，使用者可能會考慮直接不使用此方法',
  },
  {
    requirement: 3,
    icon: <Icons.Payment />,
    title: '懲罰機制，透過微電擊或是扣款等等，讓使用者對於亂丟物品這個壞習慣有更深的印象。',
    content: '方法太過激進，使用者可能會考慮直接不使用此方法',
  },
  {
    requirement: 3,
    icon: <Icons.SportsEsports />,
    title: '在手機APP裡面設計遊戲，透過遊戲機制，請使用者養成紀錄物品及檢查物品的好習慣。',
    content: '遊戲機制可能缺乏使用的動力，無法維持長時間習慣性的使用。',
  },
];

export {
  sketch,
  situation,
  videoList,
  conceptRemaining,
  conceptFadeOut,
};
