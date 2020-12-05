import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tree: {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    '& .Row': {
      display: 'flex',
      flexDirection: 'row',
    },
    '& .Column': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
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
  }
}));

const Note = ({content, depth, isLong}) => {
  const classes = useStyles({depth, isLong});

  return (
    <div className={classes.note}>
      {content}
    </div>
  );
};

const AffinityDiagram = ({data}) => {
  const classes = useStyles();

  return (
    <div className={classes.tree}>
      <div className="Column">
        <Note content={data.key} depth={0} isLong={data.key.length > 80}/>
        <div className="Row">
          {
            data.children ? (
              data.children.map(child =>
                <div className="Column">
                  <Note content={child.key} depth={1} isLong={child.key.length > 80}/>
                  <div className="Row">
                    {
                      child.children? (
                        child.children.map(grendchild =>
                          <Note content={grendchild.key} depth={2} isLong={grendchild.key.length > 80}/>
                        )
                      ) : <></>
                    }
                  </div>
                </div>
              )
            ) : <></>
          }
        </div>
      </div>
    </div>
  );
}

export default AffinityDiagram;
