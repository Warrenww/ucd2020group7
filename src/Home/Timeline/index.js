import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Paper,
  Hidden,
} from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';
import { Tween, Reveal } from 'react-gsap';

import useStyles from '../../constants/styles';
import header from '../../Milestone/headerConfig';

const StyledTimeLineItem = ({icon, title, content, background, href}) => {
  const classes = useStyles({background});

  return (
    <Reveal>
      <TimelineItem className={classes.timeLineItem}>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Tween from={{scale: 0}}>
            <TimelineDot>
              {icon}
            </TimelineDot>
          </Tween>
          <Tween from={{scaleY: 0}}>
            <TimelineConnector />
          </Tween>
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

const MyTimeLine = () => {
  const classes = useStyles({color: '#ffd'});

  return (
    <Grid item xs={12} className={`${classes.homePageBlock} ${classes.firstBlock}`} id="timeline">
      <Hidden mdUp>
        <Timeline>
        {
          header.map((item, index) => (
            <StyledTimeLineItem
              title={item.title}
              content={item.intro}
              background={item.image}
              icon={item.icon}
              href={item.href}
              key={item.title}
            />
          ))
        }
        </Timeline>
      </Hidden>
      <Hidden smDown>
      <Timeline align="alternate">
      {
        header.map((item, index) => (
          <StyledTimeLineItem
            title={item.title}
            content={item.intro}
            background={item.image}
            icon={item.icon}
            href={item.href}
            key={item.title}
          />
        ))
      }
      </Timeline>
      </Hidden>
    </Grid>
  );
}

export default MyTimeLine;
