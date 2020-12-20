import React from 'react';
import { Grow } from '@material-ui/core';
import useStyles from '../../constant/styles';

const Compare = ({
  data: {
    title,
    before,
    after,
    idea,
  },
  show
}) => {
  const classes = useStyles();
  return (
    <Grow in={show} className={classes.compare} mountOnEnter unmountOnExit>
      <div>
        <h3>{title}</h3>
        <div className={classes.quote}>{idea}</div>
        <div className="row">
          <div className="column">
            <h3>Before</h3>
            <p>{before.description}</p>
            <img src={before.image} alt="Before"/>
          </div>
          <div className="column">
            <h3>After</h3>
            <p>{after.description}</p>
            <img src={after.image} alt="After"/>
          </div>
        </div>
      </div>
    </Grow>
  );
}

export default Compare;
