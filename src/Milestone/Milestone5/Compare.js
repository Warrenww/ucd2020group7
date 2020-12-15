import React from 'react';
import useStyles from '../../constant/styles';

const Compare = ({
  data: {
    title,
    before,
    after,
    idea,
  },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.compare}>
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
  );
}

export default Compare;
