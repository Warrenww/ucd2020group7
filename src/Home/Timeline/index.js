import React from 'react';
import {
  Grid,
  Paper,
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
import useStyles from '../../constants/styles';
import header from '../../Milestone/headerConfig';

const StyledTimeLineItem = ({icon, title, content, background}) => {
  const classes = useStyles({background});

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        9:30 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.timeLinePaper}>
            <h2>{title}</h2>
            {content}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

const MyTimeLine = () => {
  const classes = useStyles({color: '#fff'});

  return (
    <Grid item xs={12} className={`${classes.homePageBlock} ${classes.firstBlock}`}>
      <Timeline align="alternate">
      {
        header.map((item, index) => (
          <StyledTimeLineItem
            title={item.title}
            content={item.intro}
            background={item.image}
          />
        ))
      }
      </Timeline>
    </Grid>
  );
}

export default MyTimeLine;
