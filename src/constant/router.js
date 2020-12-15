import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';

const styles = {
  avatar: {
    width: 24,
    height: 24,
    fontSize: 12,
  },
};

export default [
  {
    link: '/milestone/1',
    icon: <Avatar style={styles.avatar}>M1</Avatar>,
    text: "Milestone 1",
  },
  {
    link: '/milestone/2',
    icon: <Avatar style={styles.avatar}>M2</Avatar>,
    text: "Affinity Diagram",
  },
  {
    link: '/milestone/3',
    icon: <Avatar style={styles.avatar}>M3</Avatar>,
    text: "Persona & Scenario",
  },
  {
    link: '/milestone/4',
    icon: <Avatar style={styles.avatar}>M4</Avatar>,
    text: "Lo-Fi Propotype",
  },
  {
    link: '/milestone/5',
    icon: <Avatar style={styles.avatar}>M5</Avatar>,
    text: "Hi-Fi Propotype",
  },
  {
    link: '/aboutUs',
    icon: <InfoIcon />,
    text: "About us"  ,
  },
];
