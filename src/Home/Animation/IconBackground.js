import React, { memo } from 'react';
import { Tween } from 'react-gsap';
import Box_1 from '../../images/box (1).png';
import Box from '../../images/box.png';
import Cabinet from '../../images/cabinet.png';
import Dossier from '../../images/dossier.png';
import FileCabinet from '../../images/file-cabinet.png';
import Store from '../../images/store.png';

const IconBackground = ({color = '#ccc', radius}) => {

  return (
    <Tween from={{scale: 0, y: 1000}} ease="elastic.out(1.2, 0.75)" duration={3} stagger={{from: 'random', amount: .5}}>
      <img
        src={Box_1}
        style={{
          position: 'absolute',
          width: 150 + parseInt(Math.random() * 50),
          top: parseInt(Math.random() * 540),
          left: 160,
        }}
        alt="Box_1"/>
      <img
        src={Box}
        style={{
          position: 'absolute',
          width: 150 + parseInt(Math.random() * 50),
          top: parseInt(Math.random() * 540),
          left: 700,
        }}
        alt="Box"/>
      <img
        src={Cabinet}
        style={{
          position: 'absolute',
          width: 150 + parseInt(Math.random() * 50),
          top: parseInt(Math.random() * 540),
          left: 1270,
        }}
        alt="Cabinet"/>
      <img
        src={Dossier}
        style={{
          position: 'absolute',
          width: 150 + parseInt(Math.random() * 50),
          top: parseInt(Math.random() * 540),
          left: 1520,
        }}
        alt="Dossier"/>
      <img
        src={FileCabinet}
        style={{
          position: 'absolute',
          width: 150 + parseInt(Math.random() * 50),
          top: parseInt(Math.random() * 540),
          left: 1700,
        }}
        alt="FileCabinet"/>
      <img
        src={Store}
        style={{
          position: 'absolute',
          width: 150 + parseInt(Math.random() * 50),
          top: parseInt(Math.random() * 540),
          left: 400,
        }}
        alt="Store"/>
    </Tween>
  )
};

export default memo(IconBackground);
