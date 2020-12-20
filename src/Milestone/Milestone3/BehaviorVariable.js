import React, { useRef, useState, useEffect } from 'react';
import {
  Tooltip,
  Chip,
} from '@material-ui/core';
import { PlayState, Tween } from 'react-gsap';
import useOnScreen from '../../constant/useOnScreen';

import PersonIcon from '@material-ui/icons/Person';
import useStyles from '../../constant/styles';

const BehaviorVariable = ({data, style = {}}) => {
  const classes = useStyles();
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [playState, setPlayState] = useState(PlayState.stop);

  useEffect(() => {
    setPlayState(isVisible ? PlayState.play : PlayState.pause);
  }, [isVisible]);

  return (
    <div className={classes.behaviorVariableContainer} style={style} ref={ref}>
        <div className={classes.behaviorVariableText}>{data.left}</div>
        <div className={classes.behaviorVariableTrack}></div>
        <div className={classes.behaviorVariableText}>{data.right}</div>
        <Tween from={{left: '50%'}} stagger={0.2} ease="power2.inOut" playState={playState}>
        {
          data.data.map(user => {
            const color = ['U01','U03','U07'].includes(user.user) ? "#ed6a5a" : (['U02','U04','U05','U09'].includes(user.user) ? "#36c9c6": "#f4f1bb")
            return (
              <Tooltip title={`${user.position}%`} placement='top' arrow key={user.user} >
                <span className={classes.behaviorVariableUser} style={{ left: `calc(10% + ${user.position}% * 0.8)`}}>
                  <PersonIcon style={{
                    color: color,
                    width: 40,
                    height: 40,
                  }}/>
                  <Chip label={user.user} size="small" style={{backgroundColor: color, fontWeight: 'bold'}}/>
                </span>
              </Tooltip>
          )})
        }
        </Tween>
    </div>
  );
};

export default BehaviorVariable;
