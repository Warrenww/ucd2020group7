import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RootRef } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
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
  const domRef = useRef();
  const [width, setWidth] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const dom = domRef.current;
    const domWidth = dom.getBoundingClientRect().width;
    const parentNode = dom.parentNode;
    const parentNodeWidth = parentNode.getBoundingClientRect().width;

    setWidth(domWidth);
    setParentWidth(parentNodeWidth);
    if (domWidth > parentNodeWidth) {
      setShowArrow(true);
      parentNode.scrollTo({
        left: (domWidth/2 - parentNodeWidth/2),
        behavior: 'smooth',
      });
      parentNode.onwheel = (e) => {
        if (e.deltaX !== 0) {
          e.preventDefault();
          parentNode.scrollLeft += e.deltaX;
        }
      };
      parentNode.onpointermove = e => {
        if (e.pointerType === 'touch' && e.movementX !== 0) {
          e.stopPropagation();
          e.preventDefault();
          parentNode.scrollLeft -= e.movementX;
        }
      };
    }
  },[]);

  const handleScroll = (dir = 0) => {
    const parentNode = domRef.current.parentNode;
    const scrollLeft = parentNode.scrollLeft;

    parentNode.scrollTo({
      left: scrollLeft + 300 * dir,
      behavior: 'smooth',
    });
  };

  return (
    <div className={classes.tree} style={{touchAction: showArrow ? 'none' : 'auto'}}>
      <RootRef rootRef={domRef}>
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
      </RootRef>
      {
        showArrow ?
        <>
          <ArrowForwardIosIcon className="arrow right" onClick={() => handleScroll(1)}/>
          <ArrowBackIosIcon className="arrow left" onClick={() => handleScroll(-1)}/>
        </>
        : <></>
      }
    </div>
  );
}

export default AffinityDiagram;
