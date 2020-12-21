import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import useStyles from '../../constants/styles';

const RetangleBackground = ({color = '#ccc', position = 0, width, height, duration}) => {
  const classes = useStyles({color, width, height});

  return (
    <Timeline
      target={
        <div className={classes.retangleBackground} />
      }
      position={position}
    >
      <Tween from={{ scaleX: 0 }} duration={duration} ease="power3.inOut"/>
      <Tween from={{ x: '-20em' }} position="<" duration={duration / 2} ease="power3.inOut"/>
    </Timeline>
  )
};

export default RetangleBackground;
