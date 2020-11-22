import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Chip,
  Slide,
  Stepper,
  Step,
  StepLabel,
  Button,
  Tooltip,
  Backdrop,
  Zoom,
} from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import { steps, contents, behaviorVariables } from './data';
import personaImage1 from '../../images/persona 1.png';
import personaImage2 from '../../images/persona 2.png';
import senarioImage1 from '../../images/senario 1.png';
import senarioImage2 from '../../images/senario 2.png';


const useStyles = makeStyles((theme) => ({
  paper: {
    border: 0,
    borderRadius: 3,
    padding: '30px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  behaviorVariableContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
    margin: '1em 0',
    marginTop: '3em',
  },
  behaviorVariableText: {
    width: '10%',
    textAlign: 'center',
    fontSize: '.8em',
    fontWeight: 'bold',
  },
  behaviorVariableTrack: {
    width: '80%',
    height: '4px',
    background: '#ccc',
    borderRadius: '5px',
    marginTop: 'calc(.5em + 2px)',
  },
  behaviorVariableUser: {
    position: 'absolute',
    top: '-2.5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepper: {
    width: '100%',
  },
  content: {
    width: '100%',
    textAlign: 'justify',
    padding: '0 3em',
  },
  buttonGroup: {
    margin: 10,
    alignSelf: 'flex-end',
    '& button': {
      margin: 10,
    }
  },
  personaImage: {
    borderRadius: 10,
    overflow: 'hidden',
    cursor: 'pointer',
    '& img': {
      width: '100%',
    }
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backdropFilter: 'blur(5px)',
  },
}));

const Milestone3 = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [showPersona, setShowPersona] = useState(false);
  const [activePersona, setActivePersona] = useState(null);

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

  const BehaviorVariable = ({data, style = {}}) => (
    <div className={classes.behaviorVariableContainer} style={style}>
        <div className={classes.behaviorVariableText}>{data.left}</div>
        <div className={classes.behaviorVariableTrack}></div>
        <div className={classes.behaviorVariableText}>{data.right}</div>
        {
          data.data.map(user => {
            const color = ['U01','U03','U07'].includes(user.user) ? "#ed6a5a" : (['U02','U04','U05','U09'].includes(user.user) ? "#36c9c6": "#f4f1bb")
            return (
              <Tooltip title={`${user.position}%`} placement='top' arrow>
                <span className={classes.behaviorVariableUser} style={{ left: `calc(10% + ${user.position}% * 0.8)`}}>
                  <PersonIcon style={{
                    color: color,
                    width: 40,
                    height: 40,
                  }}/>
                  <Chip label={user.user} size="small" style={{backgroundColor: color, fontWeight: 'bold'}}/>
                </span>
              </Tooltip>
          )})
        }
    </div>
  );

  return (
    <Grid container spacing={3} justify="center" alignItems="stretch">
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
          {steps.map((label, index) => (
            <Step key={label} onClick={() => setActiveStep(index)} completed={false}>
              <StepLabel><h3>{label}</h3></StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className={classes.content}>
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
                behaviorVariables.filter(x => !x.sub).map(x => <BehaviorVariable data={x}/>)
              }
            </Paper>
        </Grid>
      </Slide>
      <Slide direction="left" in={activeStep === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>次要行為變數</h2>
              {
                behaviorVariables.filter(x => x.sub).map(x => <BehaviorVariable data={x} />)
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
