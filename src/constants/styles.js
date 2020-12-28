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
      },
      '& button': {
        position: 'relative',
      },
      '& button::after': {
        width: '90%',
        height: 0,
        transition: '.3s ease-in-out height',
        backgroundColor: '#fff8',
        position: 'absolute',
        bottom: 0,
        content: '""',
      },
      '& button:hover::after, & button.active::after': {
        height: 3,
      },
    },
    "& .logo": {
      height: 60,
      paddingRight: 10,
      filter: 'invert(1)',
    }
  },
  AppBarTop: {
    backgroundColor: "transparent",
    boxShadow: 'none',
    backdropFilter: 'none',
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
  tree: {
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    userSelect: 'none',
    '& .Row': {
      display: 'flex',
      flexDirection: 'row',
    },
    '& .Column': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 1em',
    },
    '& .arrow': {
      position: 'sticky',
      fontSize: '60px',
      color: '#aaa',
      top: 'calc(50% - 30px)',
      cursor: 'pointer',
    },
    '& .arrow.left': {right: 'calc(100% - 2em)'},
    '& .arrow.right': {right: '1em'},
  },
  note: {
    display: 'flex',
    width: prop => prop.isLong ? 300 : 200,
    height: 200,
    padding: 20,
    margin: 10,
    borderRadius: 5,
    boxShadow: '1px 1px 5px #555',
    lineHeight: '1.5em',
    textAlign: 'justify',
    background: prop => prop.depth === 0 ? '#7ab987' : (prop.depth === 1 ? '#dea9a9' : '#a3d4d7'),
    opacity: prop => prop.hide ? 0 : 1,
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
    textAlign: 'justify',
    '&:before, &:after': {
      content: '""',
      width: '2em',
      height: '3em',
      borderBottom: '5px solid #888',
      borderRight: '5px solid #888',
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    '&:before': {
      top: 0,
      left: 0,
      border: 0,
      borderTop: '5px solid #888',
      borderLeft: '5px solid #888',
    }
  },
  compare: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1em 0',
    '& .row': {
      display: 'flex',
    },
    '& .column': {
      display: 'flex',
      flexDirection: 'column',
      margin: '1em',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      '& img': {
        maxWidth: '90%',
        maxHeight: '50vh',
        border: '3px solid #888',
        borderRadius: 10,
      },
      '& p': {
        width: '90%',
        marginBottom: '1em',
        textAlign: 'center',
      },
    },
  },
  figmaContainer: {
    position: 'relative',
    overflow: 'hidden',
    background: '#333',
    margin: '1em',
    height: 650,
    width: 320,
    borderRadius: 50,
    border: '5px solid #FAEDE5',
    boxShadow: '3px 3px 15px 3px #888',

    '& .FigmaIframe': {
      width: 400,
      height: 800,
      position: 'relative',
      top: -80,
      left: -45,
    },
    '& .loading': {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backdropFilter: 'blur(5px)',
      '& svg': {
        fontSize: 60,
        color: '#ccc',
      },
      '&:after': {
        content: '""',
        width: 100,
        height: 5,
        backgroundColor: '#ccc',
        animation: "$loading 3000ms ",
        position: 'absolute',
        top: 'calc(50% + 40px)',
        borderRadius: 10,
        animationIterationCount: 'infinite',
        transformOrigin: 'left',
      },
    },
    '& .loaded': {
      '& ~ .loading': {
        zIndex: -1,
      }
    },
  },
// Home page
  videoCanvas: {
    position:'relative',
    width: 1920,
    height: 1080,
    zoom: props => props.zoom || 1,
    display: 'flex',
    margin: 'auto',
    border: props => props.isDev ? '1px solid' : 'none',
    '&>div': {
      flex: 1,
      alignSelf: 'flex-end',
    },
    overflow: 'hidden',
    userSelect: 'none',
  },
  retangleBackground: {
    backgroundColor: props => props.color,
    width: props => props.width,
    height: props => props.height,
    transformOrigin: props => `calc(${props.width}px * 0.8)`,
    position: 'absolute',
    top: 600,
    left: props =>`calc(50% - ${props.width / 2}px)`,
    zIndex: 2,
    boxShadow: '0 0 10px #555',
  },
  circleBackground: {
    backgroundColor: props => props.color,
    width: props => props.radius,
    height: props => props.radius,
    transformOrigin: 'center',
    borderRadius: '50%',
    position: 'absolute',
    top: 100,
    left: props => `calc(50% - ${props.radius / 2}px)`,
    zIndex: 3,
  },
  textTitleContainer: {
    width: props => props.width,
    position: 'absolute',
    top: 600,
    fontSize: '60px',
    lineHeight: props => props.height + 'px',
    display: 'flex',
    left: props =>`calc(50% - ${props.width / 2}px)`,
    padding: '0 5%',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    zIndex: 3,
    textShadow: '0 0 10px black',
  },
  textSubTitle: {
    position: 'absolute',
    fontSize: 50,
    top: 720,
    left: 'calc(50% - 100px)',
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '0 0 10px black',
    zIndex: 1,
  },
  firstBlock: {
    position: 'relative',
    minHeight: 200,
    '&::before, &::after': {
      // content: '""',
      width: '60vw',
      height: '20vw',
      position: 'absolute',
      top: '-10vw',
      borderRadius: '50%',
    },
    '&::before': {
      background: 'white',
      left: '-10vw',
    },
    '&::after': {
      background: 'rebeccapurple',
      right: '-10vw',
    },
  },
  homePageBlock: {
    padding: props => props.padding === undefined ? '2em' : props.padding,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: props => props.color || '#ccc',
    minHeight: '100vh',
    position: 'relative',
    '& h2, & h3': {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
  more: {
    position: 'absolute',
    bottom: '1em',
    cursor: 'pointer',
    '& svg': {
      fontSize: '3em',
    }
  },
  memberCard: {
    borderRadius: 20,
    overflow: 'hidden',
    '& h3': {
      zIndex: 2,
      width: '100%',
      background: '#fff9',
      marginBottom: 0,
    },
    '& .MuiAvatar-root': {
      width: 100,
      height: 100,
      boxShadow: '0 0 5px #555',
      marginBottom: 10,
      transition: '.3s ease-in-out',
    },
     '&:hover': {
       padding: 0,
       '& .MuiAvatar-root': {
         width: '100%',
         height: '100%',
         borderRadius: 0,
         marginBottom: -70,
       }
     },
  },
  timeLinePaper: {
    padding: '1em',
    backgroundImage: props => `url('${props.background}')`,
    backgroundColor: '#3338',
    backgroundBlendMode: 'multiply',
    color: 'white',
    backgroundAttachment: 'fixed',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '"前往頁面 >"',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: '#3335',
      top: 0,
      left: 0,
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'opacity .3s ease-in-out',
      opacity: 0,
      fontSize: '2em',
      fontWeight: 'bold',
    },
    '&:hover::after': {
      zIndex: 2,
      opacity: 1,
    },
    '& h2': {
      color: 'white',
    },
  },
  timeLineItem: {
    [theme.breakpoints.down('sm')]: {
      '& .MuiTimelineOppositeContent-root': {
        display: 'none',
      },
    },
    '& .MuiTimelineDot-root': {
      padding: 0,
    },
    '& .MuiAvatar-root': {
      width: 50,
      height: 50,
    },
  },
// animation
  "@keyframes loading": {
    "0%": {
      transform: 'scaleX(0)',
      transformOrigin: 'left',
    },
    "50%": {
      transform: 'scaleX(.4)',
      transformOrigin: 'right',
    },
    "100%": {
      transform: 'scaleX(0)',
      transformOrigin: 'right',
    }
  },
}));
