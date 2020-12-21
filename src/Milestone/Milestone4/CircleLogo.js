import React from 'react';
import { Tween } from 'react-gsap';
import useStyles from '../../constants/styles';
import Logo from '../../images/logo.png';

const CircleLogo = ({color = '#ccc', radius, position}) => {
  const classes = useStyles({color, radius});

  return (
    <Tween from={{scale: 0}} ease="elastic.out(2, 0.5)" duration={2} stagger={.1} position={position}>
      <div className={classes.circleBackground} />
      <img
        src={Logo}
        className={classes.circleBackground}
        alt="logo"
        style={{
          transform: 'scale(.7)',
          filter: 'invert(1) drop-shadow(2px 4px 6px black)',
          background: 'transparent',
      }}/>
    </Tween>
  )
};

export default CircleLogo;
