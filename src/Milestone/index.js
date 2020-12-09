import React from 'react';
import {useParams} from 'react-router-dom';
import {
  Container,
 } from '@material-ui/core';
import Milestone1 from './Milestone1';
import Milestone2 from './Milestone2';
import Milestone3 from './Milestone3';
import Milestone4 from './Milestone4';
import Milestone5 from './Milestone5';
import Header from '../Components/Header';
import discussionImage from '../images/discussion.jpg';
import discussionImage2 from '../images/discussion-2.jpg';
import prototypeImage from '../images/prototype.jpg';
import prototypeHiFiImage from '../images/design_on_computer.jpg';

const header= [
  {
    image: discussionImage,
    title: 'Milestone 1',
    intro: '透過一番brainstorm，最後我們選出了以下三個主題',
  },
  {
    image: discussionImage2,
    title: 'Affinity Diagram',
    intro:'透過設計好的半結構式訪談，收集潛在使用者的生活經驗，並藉由Affinity diagram分析資料，找出他們目前可能遇到的問題與痛點，作為之後產品設計的參考方向。',
  },
  {
    image: discussionImage2,
    title: 'Persona & Scenario',
    intro:(
`根據Milestone 2從Affinity diagram中找出的key finding，我們定義了6項重要的行為變數，與2項次要行為變數，並將9位受訪者放到每一項行為變數光譜上。
再依據他們的分布，定義出2種Persona與Senario。`
    ),
  },
  {
    image: prototypeImage,
    title: 'Lo-Fi Propotype',
    intro: '參考Affinity diagram中找出的key finding，我們定義了三個設計要求，每位組員在根據這些設計要求發想3個解決方案。經過討論、合併、刪減後，得到最基本的產品構想，並把這個構想用檢的的素描與剪紙呈現出來，以便下一步做使用者測試。',
  },
  {
    image: prototypeHiFiImage,
    title: 'Hi-Fi Propotype',
    intro: (`考慮Milestone 3中做出來的2種Persona與Scenario，我們設計了4個任務來測試Lofi prototype的易用程度，並將受試者的測試回饋用於改進Hifi prototype，
並用Figma來實作Hifi prototype，準備進行最後一步的易用性測試。`),
  }
]

const Milestone = (props) => {
  const {id} = useParams();
  const children = [<Milestone1 />, <Milestone2 />, <Milestone3 />, <Milestone4 />, <Milestone5 />];

  return (
    <>
    <Header {...header[id - 1]}/>
    <Container>
      {children[id - 1] || <></>}
    </Container>
    </>
  );
};

export default Milestone;
