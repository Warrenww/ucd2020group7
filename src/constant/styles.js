import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
  App: {
    backgroundColor: "#ccc",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1em",
    color: "white",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    '&::-webkit-scrollbar': {
      width: 0,
    },
  },
  AppBar: {
    backgroundColor: "#33333388",
    backdropFilter: "blur(5px)",
    userSelect: "none",
    "& a": {
      color: 'inherit',
      textDecoration: 'none',
    },
    "& .links": {
      flex: 1,
      padding: '0 2em',
      display: 'flex',
      justifyContent: 'flex-end',
      '& a': {
        color: 'white',
        textTransform: 'none',
      }
    },
    "& .logo": {
      height: 60,
      paddingRight: 10,
      filter: 'invert(1)',
    }
  },
  paper: {
    border: 0,
    borderRadius: 3,
    padding: '30px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& h2, & h3': {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    "& .MuiDivider-root": {
      width: '90%',
      margin: '1em 0',
    },
  },
  highlight: {
    width: '100%',
    maxWidth: 600,
    marginBottom: 20,
  },
  tabContent: {
    width: '100%',
    textAlign: 'justify',
    padding: '3em',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backdropFilter: 'blur(5px)',
    "& img": {
      maxWidth: '90%',
      maxHeight: '90%',
    }
  },
// Milestone 1
  backgroundPaper: {
    backgroundColor: '#333333aa',
    border: 0,
    borderRadius: 3,
    color: 'white',
    textAlign: 'center',
    padding: '30px',
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: 'cover',
    position: 'relative',
    backgroundBlendMode: 'multiply',
    height: 120,
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    transition: '.3s ease-in-out',
    justifyContent: 'center',
    '& *': {
      position: 'absolute',
      zIndex: 2,
      transition: '.3s ease-in-out',
      height: 120,
      margin: 30,
      display: 'flex',
      alignItems: 'center',
    },
    '& div': {
      bottom: -120,
      margin: 0,
    },
    '&:hover div': {
      bottom: 0,
    },
    '& h2': {
      top: 0,
      margin: 0,
      color: 'white',
    },
    '&:hover h2': {
      top: -120,
    },
    '& .BG': {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 1,
      margin: 0,
    },
    '&:hover .BG': {
      backdropFilter: 'blur(5px)',
    }
  },
// Milestone 2
  table: {
    width: 'auto',
    margin: 'auto',
    marginTop: 20,
  },
  pagination: {
    marginTop: 20,
  },
  affinityDiagramContainer: {
    display: 'flex',
    width: 'max-content',
    '& .holder': {
      cursor: 'pointer',
      padding: '2em',
      borderRadius: '3em',
      margin: '2em',
    },
    '& .holder:hover, & .active': {
      background: '#ddd6',
    }
  },
  statistic: {
    width: '100%',
    margin: '2em',
    textAlign: 'center',
  },
  list: {
    '& .MuiListItemText-root': {
      alignItems: 'center',
      display: 'flex',
      '& span': {fontSize: '1em'}
    }
  },
// Milestone 3
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
    paddingBottom: 0,
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
// Milestone 4
  widgetsPaper: {
    "& .MuiChip-root": {
      margin: 10,
    },
    "& .AvatarContainer": {
      display: 'flex',
      marginBottom: 20,
      "& .MuiAvatar-root": {
        margin: 10,
        width: 40,
        height: 40,
        cursor: 'pointer',
        boxShadow: '2px 2px 10px #333',
        transition: '.3s ease-in-out',
      },
      "& .MuiAvatar-root:hover": {
        transform: 'scale(1.2)',
      },
      "& .active": {
        boxShadow: '2px 2px 10px #7a654d',
        transform: 'scale(1.2)',
        border: '3px solid #e4988a',
      }
    },
    "& .sketchHolder": {
      "& h3": {
        margin: 0,
        width: '100%',
        textAlign: 'center',
      },
      "& img": {
        width: '100%',
      }
    },
  },
  conceptDescription: {
    padding: '1em',
    borderTop: '1px solid #ccc',
  },
  videoDescription: {
    width: '80%',
    marginBottom: 20,
  },
// MilMilestone 5
  quote: {
    maxWidth: 400,
    lineHeight: 2,
    position: 'relative',
    padding: '1.5em',
    marginTop: '1em',
    '&:before, &:after': {
      content: '""',
      width: '2em',
      height: '2em',
      borderBottom: '5px solid #555',
      borderRight: '5px solid #555',
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    '&:before': {
      top: 0,
      left: 0,
      border: 0,
      borderTop: '5px solid #555',
      borderLeft: '5px solid #555',
    }
  },
}));
