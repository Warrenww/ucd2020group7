import React, { useState, useEffect } from 'react';
import {
  Paper,
  Grid,
  Slide,
  Stepper,
  Step,
  StepLabel,
  Button,
  Backdrop,
  Zoom,
} from '@material-ui/core';
import BehaviorVariable from "./BehaviorVariable";
import { steps, contents, behaviorVariables } from './data';
import personaImage1 from '../../images/persona 1.png';
import personaImage2 from '../../images/persona 2.png';
import senarioImage1 from '../../images/senario 1.png';
import senarioImage2 from '../../images/senario 2.png';

import useStyles from '../../constants/styles';

const Milestone3 = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [showPersona, setShowPersona] = useState(false);
  const [activePersona, setActivePersona] = useState(null);

  useEffect(() => {
    const params = (new URL(document.location)).searchParams;
    const tab = params.get('tab');
    if (tab === 'persona') setActiveStep(1);
    if (tab === 'scenario') setActiveStep(2);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBackDrop = (image, open) => {
    setActivePersona(image);
    setShowPersona(open);
  };

  return (
    <Grid container spacing={3} justify="center" alignItems="stretch">
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
          {steps.map((label, index) => (
            <Step key={label} onClick={() => setActiveStep(index)} completed={false} >
              <StepLabel><h3>{label}</h3></StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className={classes.tabContent}>
          {contents[activeStep]}
        </div>
        <div className={classes.buttonGroup}>
          {activeStep > 0 && <Button onClick={handleBack} variant="contained" color="secondary">Back</Button>}
          {activeStep < steps.length - 1 && <Button onClick={handleNext} variant="contained" color="primary">Next</Button>}
        </div>
        </Paper>
      </Grid>

      <Slide direction="left" in={activeStep === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>主要行為變數</h2>
              {
                behaviorVariables.filter(x => !x.sub).map((x, i) => <BehaviorVariable key={`main-behavior-${i}`} data={x}/>)
              }
            </Paper>
        </Grid>
      </Slide>
      <Slide direction="left" in={activeStep === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>次要行為變數</h2>
              {
                behaviorVariables.filter(x => x.sub).map((x, i) => <BehaviorVariable key={`sub-behavior-${i}`} data={x} />)
              }
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="up" in={activeStep === 1} mountOnEnter unmountOnExit>
        <Grid item xs={12} md={6}>
            <Paper className={classes.personaImage} onClick={() => handleBackDrop(personaImage1, true)}>
              <img src={personaImage1} alt="persona 1"/>
            </Paper>
        </Grid>
      </Slide>
      <Slide direction="up" in={activeStep === 1} mountOnEnter unmountOnExit>
        <Grid item xs={12} md={6}>
            <Paper className={classes.personaImage} onClick={() => handleBackDrop(personaImage2, true)}>
              <img src={personaImage2} alt="persona 2"/>
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={activeStep === 2} mountOnEnter unmountOnExit>
        <Grid item xs={12} md={6}>
        <Paper className={classes.personaImage} onClick={() => handleBackDrop(senarioImage1, true)}>
          <img src={senarioImage1} alt="senario 1"/>
        </Paper>
        </Grid>
      </Slide>
      <Slide direction="left" in={activeStep === 2} mountOnEnter unmountOnExit>
        <Grid item xs={12} md={6}>
        <Paper className={classes.personaImage} onClick={() => handleBackDrop(senarioImage2, true)}>
          <img src={senarioImage2} alt="senario 2"/>
        </Paper>
        </Grid>
      </Slide>

      <Backdrop className={classes.backdrop} open={showPersona} onClick={() => handleBackDrop(null, false)}>
        <Zoom in={showPersona}>
          <img src={activePersona} alt="persona big" width="80%"/>
        </Zoom>
      </Backdrop>
    </Grid>
  );
};

export default Milestone3;
