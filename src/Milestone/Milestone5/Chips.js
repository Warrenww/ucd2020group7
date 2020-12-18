import React from 'react';
import { Chip } from '@material-ui/core';
import { circumstances } from './data';

const Chips = ({activeCircumstance, setActiveCircumstance}) => (
  <div>
    {
      circumstances.map((c, i) => (
        <Chip
          icon={<></>}
          label={`${c.index} ${c.title}`}
          clickable
          color="primary"
          variant={activeCircumstance === i ? "default" : "outlined"}
          onClick={() => setActiveCircumstance(i)}
        />
      ))
    }
  </div>
);

export default Chips;
