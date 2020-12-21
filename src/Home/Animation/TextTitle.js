import React from 'react';
import { Tween, SplitChars } from 'react-gsap';
import useStyles from '../../constants/styles';

const CircleLogo = ({width, duration, position, height}) => {
  const classes = useStyles({width, height});

  return (
    <div className={classes.textTitleContainer}>
      <Tween
        from={{ y: -200, opacity: 0, }}
        ease="bounce.out"
        stagger={{from: 'random', amount: .2}}
        duration={duration}
        position={position}
      >
        <SplitChars
          wrapper={<div />}
        >
          User Centered Design
        </SplitChars>
      </Tween>
    </div>
  )
};

export default CircleLogo;
