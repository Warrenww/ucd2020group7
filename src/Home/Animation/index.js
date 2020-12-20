import React from 'react';
import { Controls, PlayState, Tween, Timeline, SplitChars } from 'react-gsap';
import RetangleBackground from './RetangleBackground';
import useStyles from '../../constants/styles';


const Animation = () => {
  const classes = useStyles();

  return (
    <div className={classes.videoCanvas}>
        <Controls playState={PlayState.stop}>
          <Timeline>
            <RetangleBackground color="#DA5748" width='60em' height='7em' duration={1.5} position={0}/>
            <RetangleBackground color="#F0EEB8" width='60em' height='7em' duration={1.5} position={0.2}/>
            <RetangleBackground color="#E1E7DC" width='60em' height='7em' duration={1.5} position={0.3}/>
            <RetangleBackground color="#93B7B4" width='60em' height='7em' duration={1.5} position={0.5}/>
          </Timeline>
        </Controls>
      </div>
  );
}

export default Animation;
