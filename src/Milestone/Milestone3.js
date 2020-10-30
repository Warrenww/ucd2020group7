import React, {useState} from 'react';
import {Link} from 'react-router-dom';
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
} from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';

import CustomTable from '../Components/CustomTable';

const useStyles = makeStyles({
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
    padding: '0 2em',
  },
  buttonGroup: {
    margin: 10,
    '& button': {
      margin: 10,
    }
  },
});

const behaviorVariables = [
  {
    left: '不常找不到東西',
    right: '常找不到東西',
    data: [
       {
          "position":"83",
          "user":"U05"
       },
       {
          "position":"10",
          "user":"U03"
       },
       {
          "position":"90",
          "user":"U04"
       },
       {
          "position":"70",
          "user":"U07"
       },
       {
          "position":"40",
          "user":"U08"
       },
       {
          "position":"60",
          "user":"U06"
       },
       {
          "position":"80",
          "user":"U09"
       },
       {
          "position":"30",
          "user":"U01"
       },
       {
          "position":"75",
          "user":"U02"
       }
    ]
  },
  {
    left: '不常整理東西',
    right: '常整理東西',
    data: [
       {
          "position":"43",
          "user":"U05"
       },
       {
          "position":"70",
          "user":"U03"
       },
       {
          "position":"20",
          "user":"U04"
       },
       {
          "position":"85",
          "user":"U07"
       },
       {
          "position":"30",
          "user":"U08"
       },
       {
          "position":"60",
          "user":"U06"
       },
       {
          "position":"40",
          "user":"U09"
       },
       {
          "position":"80",
          "user":"U01"
       },
       {
          "position":"35",
          "user":"U02"
       }
    ],
  },
  {
    left: '找不到的東西大多是不常用的',
    right: '找不到的東西大多是常用的',
    data: [
       {
          "position":"60",
          "user":"U05"
       },
       {
          "position":"5",
          "user":"U03"
       },
       {
          "position":"90",
          "user":"U04"
       },
       {
          "position":"35",
          "user":"U07"
       },
       {
          "position":"55",
          "user":"U08"
       },
       {
          "position":"70",
          "user":"U06"
       },
       {
          "position":"45",
          "user":"U09"
       },
       {
          "position":"10",
          "user":"U01"
       },
       {
          "position":"65",
          "user":"U02"
       }
    ],
  },
  {
    left: '不常把使用的東西歸位',
    right: '常把使用的東西歸位',
    data: [
       {
          "position":"35",
          "user":"U05"
       },
       {
          "position":"90",
          "user":"U03"
       },
       {
          "position":"5",
          "user":"U04"
       },
       {
          "position":"45",
          "user":"U08"
       },
       {
          "position":"80",
          "user":"U07"
       },
       {
          "position":"30",
          "user":"U06"
       },
       {
          "position":"20",
          "user":"U09"
       },
       {
          "position":"75",
          "user":"U01"
       },
       {
          "position":"25",
          "user":"U02"
       }
    ],
  },
  {
    left: '收納物品沒有邏輯',
    right: '收納物品有邏輯',
    data: [
       {
          "position":"90",
          "user":"U03"
       },
       {
          "position":"35",
          "user":"U04"
       },
       {
          "position":"55",
          "user":"U08"
       },
       {
          "position":"85",
          "user":"U07"
       },
       {
          "position":"80",
          "user":"U06"
       },
       {
          "position":"45",
          "user":"U09"
       },
       {
          "position":"75",
          "user":"U01"
       },
       {
          "position":"30",
          "user":"U02"
       },
       {
          "position":"40",
          "user":"U05"
       }
    ],
  },
  {
    left: '不會尋求他人協助',
    right: '會尋求他人協助',
    data: [
       {
          "position":"80",
          "user":"U03"
       },
       {
          "position":"70",
          "user":"U04"
       },
       {
          "position":"85",
          "user":"U07"
       },
       {
          "position":"60",
          "user":"U08"
       },
       {
          "position":"40",
          "user":"U05"
       },
       {
          "position":"20",
          "user":"U06"
       },
       {
          "position":"75",
          "user":"U09"
       },
       {
          "position":"25",
          "user":"U01"
       },
       {
          "position":"65",
          "user":"U02"
       }
    ],
  },
  {
    left: '容易想起東西放置的位置',
    right: '較不容易想起東西放置的位置',
    sub: true,
    data: [
       {
          "position":"50",
          "user":"U05"
       },
       {
          "position":"25",
          "user":"U03"
       },
       {
          "position":"45",
          "user":"U04"
       },
       {
          "position":"80",
          "user":"U07"
       },
       {
          "position":"55",
          "user":"U08"
       },
       {
          "position":"15",
          "user":"U06"
       },
       {
          "position":"90",
          "user":"U09"
       },
       {
          "position":"40",
          "user":"U01"
       },
       {
          "position":"70",
          "user":"U02"
       }
    ],
  },
  {
    left: '不想要改善找不到的情況',
    right: '想要改善找不到的情況',
    sub: true,
    data: [
       {
          "position":"75",
          "user":"U05"
       },
       {
          "position":"50",
          "user":"U03"
       },
       {
          "position":"30",
          "user":"U04"
       },
       {
          "position":"40",
          "user":"U08"
       },
       {
          "position":"20",
          "user":"U06"
       },
       {
          "position":"70",
          "user":"U07"
       },
       {
          "position":"60",
          "user":"U09"
       },
       {
          "position":"25",
          "user":"U01"
       },
       {
          "position":"85",
          "user":"U02"
       }
    ],
  },
];
const steps = ['定義行為變數', '製作Persona', '製作Scenario'];
const contents = [
  <div>
    透過<Link to="/milestone/2">Milestone 2</Link>找出的key finding，我們定義了6個主要行為變數:
    <ol>
      <li>找不到東西的頻率</li>
      <li>整理東西的頻率</li>
      <li>找不到的東西是屬於常用還是不常用的</li>
      <li>用完東西會把它放回原位的頻率</li>
      <li>收納物品的邏輯性</li>
      <li>尋求他人協助的習慣</li>
    </ol>
    與兩項次要行為變數，這兩項變數是我們無法藉由APP提供功能來影響使用者行為進而改善他們的困擾:
    <ol>
      <li>對於放置東西位置的記憶力</li>
      <li>想要改善的動機強度</li>
    </ol>
    並將9位受訪者分別對應到光譜上，找出行為相近的受訪者作為下一個步驟的參考原型
  </div>,
  <div>
    根據前一個步驟得到的分群，我們從本次訪談的受訪者得到兩種Persona:
    <h3>Persona 1</h3>

  </div>,
  <div>

  </div>,
];

const Milestone3 = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
              <span className={classes.behaviorVariableUser} style={{ left: `calc(10% + ${user.position}% * 0.8)`}}>
                  <PersonIcon style={{
                    color: color,
                    width: 40,
                    height: 40,
                  }}/>
                  <Chip label={user.user} size="small" style={{backgroundColor: color, fontWeight: 'bold'}}/>
              </span>
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
      <Grid item xs={12}>
        <Slide direction="left" in={activeStep === 0} mountOnEnter unmountOnExit>
          <Paper className={classes.paper}>
            <h2>主要行為變數</h2>
            {
              behaviorVariables.filter(x => !x.sub).map(x => <BehaviorVariable data={x}/>)
            }
          </Paper>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <Slide direction="left" in={activeStep === 0} mountOnEnter unmountOnExit>
          <Paper className={classes.paper}>
            <h2>次要行為變數</h2>
            {
              behaviorVariables.filter(x => x.sub).map(x => <BehaviorVariable data={x} />)
            }
          </Paper>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <Slide direction="left" in={activeStep === 1} mountOnEnter unmountOnExit>
          <Paper className={classes.paper}>
            <h2>Persona</h2>

          </Paper>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <Slide direction="left" in={activeStep === 2} mountOnEnter unmountOnExit>
          <Paper className={classes.paper}>
            <h2>Senario</h2>

          </Paper>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default Milestone3;