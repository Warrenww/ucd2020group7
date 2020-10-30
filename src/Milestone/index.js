import React from 'react';
import {useParams} from 'react-router-dom';
import {
  Container,
 } from '@material-ui/core';
import Milestone1 from './Milestone1';
import Milestone2 from './Milestone2';
import Milestone3 from './Milestone3';
import Header from '../Components/Header';
import discussionImage from '../images/discussion.jpg';
import discussionImage2 from '../images/discussion-2.jpg';

const header= [
  {
    image: discussionImage,
    title: 'Milestone 1',
    intro: '透過一番brainstorm，最後我們選出了以下三個主題',
  },
  {
    image: discussionImage2,
    title: 'Milestone 2',
    intro: '',
  },
  {
    image: discussionImage2,
    title: 'Persona & Scenario',
    intro:(
`根據Milestone 2從Affinity diagram中找出的key finding，我們定義了6項重要的行為變數，與2項次要行為變數，並將9位受訪者放到每一項行為變數光譜上。
再依據他們的分布，定義出2種Persona與Senario。`
    ),
  },
]

const Milestone = (props) => {
  const {id} = useParams();
  const children = [<Milestone1 />, <Milestone2 />, <Milestone3 />];

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
