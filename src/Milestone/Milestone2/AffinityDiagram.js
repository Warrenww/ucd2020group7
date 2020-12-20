import React, { useState, useEffect, useRef } from 'react';
import { RootRef } from '@material-ui/core';
import Icons from '../../constant/icons';
import useStyles from '../../constant/styles';

const Note = ({content, depth, isLong, hide}) => {
  const classes = useStyles({depth, isLong, hide});

  return (
    <div className={classes.note}>
      {content}
    </div>
  );
};

const AffinityDiagram = ({data}) => {
  const classes = useStyles();
  const domRef = useRef();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const dom = domRef.current;
    const domWidth = dom.getBoundingClientRect().width;
    const parentNode = dom.parentNode;
    const parentNodeWidth = parentNode.getBoundingClientRect().width;

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
          <Note content={data.key} hide={data.key.length === 0} depth={0} isLong={data.key.length > 80}/>
          <div className="Row">
            {
              data.children ? (
                data.children.map(child =>
                  <div className="Column">
                    <Note content={child.key} depth={1} hide={child.key.length === 0} isLong={child.key.length > 80}/>
                    <div className="Row">
                      {
                        child.children? (
                          child.children.map(grendchild =>
                            <Note content={grendchild.key} depth={2} hide={grendchild.key.length === 0} isLong={grendchild.key.length > 80}/>
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
          <Icons.ArrowForwardIos className="arrow right" onClick={() => handleScroll(1)}/>
          <Icons.ArrowBackIos className="arrow left" onClick={() => handleScroll(-1)}/>
        </>
        : <></>
      }
    </div>
  );
}

export default AffinityDiagram;
