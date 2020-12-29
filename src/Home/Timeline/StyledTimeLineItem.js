import React from 'react';
import useStyles from '../../constants/styles';
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';
import { Tween, Reveal } from 'react-gsap';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

const StyledTimeLineItem = ({
  icon,
  title,
  content,
  background,
  href,
  isLast,
  onClick,
}) => {
  const classes = useStyles({background});
  return (
    <Reveal>
      <TimelineItem className={classes.timeLineItem} onClick={onClick}>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Tween from={{scale: 0}}>
            <TimelineDot>
              {icon}
            </TimelineDot>
          </Tween>
          {
            !isLast && (
              <Tween from={{scaleY: 0}}>
                <TimelineConnector />
              </Tween>
            )
          }
        </TimelineSeparator>
        <Tween from={{y: 50, opacity: 0}}>
          <TimelineContent>
            <Link to={href}>
              <Paper elevation={3} className={classes.timeLinePaper}>
                  <h2>{title}</h2>
                  {content}
              </Paper>
            </Link>
          </TimelineContent>
        </Tween>
      </TimelineItem>
    </Reveal>
  );
};

export default StyledTimeLineItem;
