import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import discussionImage from '../images/discussion.jpg';


const useStyles = makeStyles({
  header: {
    minHeight: 200,
    backgroundImage: props => `url(${props.image})`,
    width: '100vw',
    backgroundSize: 'cover',
    marginBottom: 20,
    position: 'relative',
    paddingTop: 64,
    boxShadow: '0px 0px 10px 0px #333',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    '& .BG': {
      width: '100%',
      height: '100%',
      background: '#333333aa',
      color: 'white',
      backdropFilter: 'blur(5px)',
      position: 'absolute',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      '& h1': {
        fontSize: '3em',
      }
    },
  },
});
const Header = ({
  image = discussionImage,
  title = 'Milestone 0',
  intro = '',
}) => {
  const classes = useStyles({image});

  return (
      <div className={classes.header}>
        <div className='BG'>
          <h1>{title}</h1>
          <Container maxWidth="sm">
            {intro}
          </Container>
        </div>
      </div>
  )
}

export default Header;
