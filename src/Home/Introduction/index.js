import React, { forwardRef } from 'react';
import {
  Grid,
  Avatar,
  Paper,
} from '@material-ui/core';
import { Tween, Reveal } from 'react-gsap';

import useStyles from '../../constants/styles';

import Photo001 from '../../images/001.jpg';
import Photo002 from '../../images/002.jpg';
import Photo003 from '../../images/003.jpg';
import Photo004 from '../../images/004.jpg';
import Photo005 from '../../images/005.jpg';

const MemberCard = forwardRef(({photo, name, department}, ref) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} lg={2} ref={ref}>
      <Paper className={`${classes.paper} ${classes.memberCard}`}>
        <Avatar  src={photo} alt={name} />
        <h3>{name}</h3>
        <h3>{department}</h3>
      </Paper>
    </Grid>
  )
});

const Introduction = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.homePageBlock}>
      <h2>組員介紹</h2>
      <Grid container spacing={3} alignItems="flex-start" justify="center">
        <Reveal>
          <Tween from={{y: 10, opacity: 0}} stagger={0.2} ease="power2.inOut">
            <MemberCard name="邱筠絜" photo={Photo001} department="交通大學 資訊工程學系"/>
            <MemberCard name="嚴銘浩" photo={Photo002} department="交通大學 傳科所"/>
            <MemberCard name="黃元廷" photo={Photo003} department="交通大學 管理科學所"/>
            <MemberCard name="郭佩璇" photo={Photo004} department="清華大學 學科所"/>
            <MemberCard name="方偉綸" photo={Photo005} department="交通大學 資科工所"/>
          </Tween>
        </Reveal>
      </Grid>
    </Grid>
  )
}

export default Introduction;
