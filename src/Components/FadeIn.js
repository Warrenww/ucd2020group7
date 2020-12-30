import React from 'react';
import { Tween, Reveal } from 'react-gsap';

const FadeIn = ({
  children,
  direction,
}) => {
  const directionConfig = {};
  console.log(direction);
  switch (direction) {
    case 'up':
      directionConfig.y = -50;
      break;
    case 'down':
      directionConfig.y = 50;
      break;
    case 'left':
      directionConfig.x = -50;
      break;
    case 'right':
      directionConfig.x = 50;
      break;
    default:
      directionConfig.y = 50;
      break;
  }

  return (
    <Reveal>
      <Tween from={{...directionConfig, opacity: 0}} stagger={0.2}>
        {children}
      </Tween>
    </Reveal>
  )
}

export default FadeIn;
