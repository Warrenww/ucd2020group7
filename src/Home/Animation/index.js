import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Controls, PlayState, Tween, Timeline } from 'react-gsap';
import RetangleBackground from './RetangleBackground';
import CircleLogo from './CircleLogo';
import TextTitle from './TextTitle';
import IconBackground from './IconBackground';
import useStyles from '../../constants/styles';


const Animation = ({isDev = false, zoom}) => {
  const classes = useStyles({isDev, zoom: zoom * .5});
  const titleWidth = 900;
  const titleHeight = 100;
  const titleDuration = 1.5;
  const Wrapper = isDev ? Controls : React.Fragment;
  const [playState, setPlayState] = useState(isDev ? PlayState.play : PlayState.stop);

  return (
    <Grid item xs={12}>
      <div className={classes.videoCanvas}>
        <Wrapper>
          <Timeline
            playState={playState}
            onComplete={() => !isDev && setTimeout(() => setPlayState(PlayState.reverse), 5000)}
            onReverseComplete={() => !isDev && setTimeout(() => setPlayState(PlayState.play), 1000)}
          >
            <IconBackground />
            <CircleLogo color="#21B4B0" radius={400} position={.2}/>
            <TextTitle width={titleWidth} height={titleHeight} position={.5} duration={2}/>
            <RetangleBackground color="#DA5748" width={titleWidth} height={titleHeight} duration={titleDuration} position={0}/>
            <RetangleBackground color="#F0EEB8" width={titleWidth - 40} height={titleHeight} duration={titleDuration} position={0.2}/>
            <RetangleBackground color="#E1E7DC" width={titleWidth - 80} height={titleHeight} duration={titleDuration} position={0.3}/>
            <RetangleBackground color="#93B7B4" width={titleWidth - 160} height={titleHeight} duration={titleDuration} position={0.5}/>
            <Tween from={{y: -100, opacity: 0}} ease="power3.inOut" duration={2} position="-=1">
              <div className={classes.textSubTitle}>Group 7</div>
            </Tween>
          </Timeline>
        </Wrapper>
      </div>
    </Grid>
  );
}

export default Animation;
