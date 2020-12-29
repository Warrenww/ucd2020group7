import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from '../../constants/styles';

const ImagePaper = ({
  title,
  short_intro,
  image,
  active,
}) => {
  const classes = useStyles({image});

  return (
    <Paper className={classes.backgroundPaper} elevation={active ? 20 : 3} style={{transform: `scale(${active ? 1 : 0.9})`}}>
      <h2>{title}</h2>
      <div>{short_intro}</div>
      <div className="BG"></div>
    </Paper>
  )
}

export default ImagePaper;
