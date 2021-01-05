import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import header from '../Milestone/headerConfig';

const styles = {
  avatar: {
    width: 24,
    height: 24,
    fontSize: 12,
  },
};

export default [
  ...(header.map(x => ({
    link: x.href,
    icon: x.icon,
    text: x.title,
  }))),
  {
    link: '/faq',
    icon: <InfoIcon />,
    text: "FAQ"  ,
  },
];
