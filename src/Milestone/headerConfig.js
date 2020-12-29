import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import discussionImage from '../images/discussion.jpg';
import discussionImage2 from '../images/discussion-2.jpg';
import prototypeImage from '../images/prototype.jpg';
import prototypeHiFiImage from '../images/design_on_computer.jpg';

import interviewImage from '../images/job-interview.png';
import womanImage from '../images/woman.png';
import lofiPrototypeImage from '../images/prototyping.png';
import hifiPrototypeImage from '../images/prototype.png';

const header= [
  {
    image: discussionImage,
    title: 'Milestone 1',
    href: '/milestone/1',
    icon: <Avatar alt="" src="">M1</Avatar>,
    isLast: false,
    intro: '透過一番brainstorm，最後我們選出了以下三個主題',
  },
  {
    image: discussionImage2,
    title: 'Affinity Diagram',
    href: '/milestone/2',
    icon: <Avatar alt="" src={interviewImage} />,
    isLast: false,
    intro:'透過設計好的半結構式訪談，收集潛在使用者的生活經驗，並藉由Affinity diagram分析資料，找出他們目前可能遇到的問題與痛點，作為之後產品設計的參考方向。',
  },
  {
    image: discussionImage2,
    title: 'Persona & Scenario',
    href: '/milestone/3',
    icon: <Avatar alt="" src={womanImage} />,
    isLast: false,
    intro:(
`根據Milestone 2從Affinity diagram中找出的key finding，我們定義了6項重要的行為變數，與2項次要行為變數，並將9位受訪者放到每一項行為變數光譜上。
再依據他們的分布，定義出2種Persona與Senario。`
    ),
  },
  {
    image: prototypeImage,
    title: 'Lo-Fi Propotype',
    href: '/milestone/4',
    icon: <Avatar alt="" src={lofiPrototypeImage} />,
    isLast: false,
    intro: '參考Affinity diagram中找出的key finding，我們定義了三個設計要求，每位組員在根據這些設計要求發想3個解決方案。經過討論、合併、刪減後，得到最基本的產品構想，並把這個構想用檢的的素描與剪紙呈現出來，以便下一步做使用者測試。',
  },
  {
    image: prototypeHiFiImage,
    title: 'Hi-Fi Propotype',
    href: '/milestone/5',
    icon: <Avatar alt="" src={hifiPrototypeImage} />,
    isLast: false,
    intro: (`考慮Milestone 3中做出來的2種Persona與Scenario，我們設計了4個任務來測試Lofi prototype的易用程度，並將受試者的測試回饋用於改進Hifi prototype，
並用Figma來實作Hifi prototype，準備進行最後一步的易用性測試。`),
  },
];

export default header;
