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
import Milestone6 from './Milestone6';
import Header from '../Components/Header';
import header from './headerConfig';

const Milestone = (props) => {
  const {id} = useParams();
  const children = [
    <Milestone1 />,
    <Milestone2 />,
    <Milestone3 />,
    <Milestone4 />,
    <Milestone5 />,
    <Milestone6 />,
  ];

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
