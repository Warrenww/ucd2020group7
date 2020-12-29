import React,{ useState } from 'react';
import {
  Grid,
  Hidden,
  Avatar,
} from '@material-ui/core';
import { Timeline } from '@material-ui/lab';
import { Image } from 'antd';

import StyledTimeLineItem from './StyledTimeLineItem';
import useStyles from '../../constants/styles';
import header from '../../Milestone/headerConfig';
import posterImage from '../../images/poster.jpg';
import posterIconImage from '../../images/posterIcon.png';
import posterLargeImage from '../../images/poster (Large).jpg';

const MyTimeLine = () => {
  const classes = useStyles({color: '#ffd'});
  const [showPoster, setShowPoster] = useState(false);

  const TimelineItems = () => header.map((item, index) => (
    <StyledTimeLineItem
      title={item.title}
      content={item.intro}
      background={item.image}
      icon={item.icon}
      href={item.href}
      key={item.title}
    />
  )).concat([
    (
      <StyledTimeLineItem
        title="poster"
        content=""
        background={posterImage}
        icon={<Avatar alt="" src={posterIconImage} />}
        href=''
        onClick={() => setShowPoster(true)}
        key="poster"
        isLast
      />
    ),
  ]);

  return (
    <Grid item xs={12} className={`${classes.homePageBlock} ${classes.firstBlock}`} id="timeline">
      <Hidden mdUp>
        <Timeline>
          <TimelineItems />
        </Timeline>
      </Hidden>
      <Hidden smDown>
      <Timeline align="alternate">
        <TimelineItems />
      </Timeline>
      </Hidden>
      <Image
        width={0}
        src={posterLargeImage}
        preview={{
          visible: showPoster,
          onVisibleChange: (visible, prevVisible) => setShowPoster(visible),
        }}
      />
    </Grid>
  );
}

export default MyTimeLine;
