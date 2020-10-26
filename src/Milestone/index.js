import React from 'react';
import {useParams} from 'react-router-dom';
import {
  Container,
 } from '@material-ui/core';
import Milestone1 from './Milestone1';
import Header from './Header';
import discussionImage from '../images/discussion.jpg';

const header= [
  {
    image: discussionImage,
    title: 'Milestone 1',
    intro: '透過一番brainstorm，最後我們選出了以下三個主題',
  }
]

const Milestone = (props) => {
  const {id} = useParams();
  const children = [<Milestone1 />];

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
