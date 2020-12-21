import React from 'react';
import { Controls, PlayState, Tween, Timeline, SplitChars } from 'react-gsap';
import RetangleBackground from './RetangleBackground';
import useStyles from '../../constants/styles';


const Animation = ({isDev = false, zoom}) => {
  const classes = useStyles({isDev, zoom});
  const Wrapper = isDev ? Controls : React.Fragment;

  return (
    <div className={classes.videoCanvas}>
        <Wrapper playState={PlayState.stop}>
          <Timeline playState={PlayState.play}>
            <RetangleBackground color="#DA5748" width='60em' height='7em' duration={1.5} position={0}/>
            <RetangleBackground color="#F0EEB8" width='60em' height='7em' duration={1.5} position={0.2}/>
            <RetangleBackground color="#E1E7DC" width='60em' height='7em' duration={1.5} position={0.3}/>
            <RetangleBackground color="#93B7B4" width='60em' height='7em' duration={1.5} position={0.5}/>
          </Timeline>
        </Wrapper>
      </div>
  );
}

export default Animation;
