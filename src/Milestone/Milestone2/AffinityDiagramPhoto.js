import React, { useState } from 'react';
import useStyles from '../../constants/styles';
import affinityDiagramPhoto from '../../images/affinity diagram/Affinity diagram.jpg';
import affinityDiagramPhoto_1 from '../../images/affinity diagram/Affinity diagram 1.jpg';
import affinityDiagramPhoto_2 from '../../images/affinity diagram/Affinity diagram 2.jpg';
import affinityDiagramPhoto_3 from '../../images/affinity diagram/Affinity diagram 3.jpg';
import affinityDiagramPhoto_4 from '../../images/affinity diagram/Affinity diagram 4.jpg';
import affinityDiagramPhoto_5 from '../../images/affinity diagram/Affinity diagram 5.jpg';
import { Image } from 'antd';

const AffinityDiagramPhoto = () => {
  const classes = useStyles({
    bg: affinityDiagramPhoto,
    size: document.body.offsetWidth,
  });
  const [showImage, setShowImage] = useState([0, 0, 0, 0, 0]);

  return (
    <div className={classes.affinityDiagramPhoto}>
      <div
        className="highlight"
        onClick={() => {
          const state = [...showImage];
          state[0] = true;
          setShowImage(state);
        }}
        style={{width: '20%'}}
      />
      <div
        className="highlight"
        onClick={() => {
          const state = [...showImage];
          state[1] = true;
          setShowImage(state);
        }}
        style={{width: '14%'}}
      />
      <div
        className="highlight"
        onClick={() => {
          const state = [...showImage];
          state[2] = true;
          setShowImage(state);
        }}
        style={{width: '25%'}}
      />
      <div
        className="highlight"
        onClick={() => {
          const state = [...showImage];
          state[3] = true;
          setShowImage(state);
        }}
        style={{width: '15%'}}
        />
      <div
        className="highlight"
        onClick={() => {
          const state = [...showImage];
          state[4] = true;
          setShowImage(state);
        }}
        style={{width: '26%'}}
      />
      <Image
        width={0}
        src={affinityDiagramPhoto_5}
        preview={{
          visible: showImage[0],
          onVisibleChange: (visible, prevVisible) => {
            const state = [...showImage];
            state[0] = visible;
            setShowImage(state);
          }
        }}
      />
      <Image
        width={0}
        src={affinityDiagramPhoto_4}
        preview={{
          visible: showImage[1],
          onVisibleChange: (visible, prevVisible) => {
            const state = [...showImage];
            state[1] = visible;
            setShowImage(state);
          }
        }}
      />
      <Image
        width={0}
        src={affinityDiagramPhoto_3}
        preview={{
          visible: showImage[2],
          onVisibleChange: (visible, prevVisible) => {
            const state = [...showImage];
            state[2] = visible;
            setShowImage(state);
          }
        }}
      />
      <Image
        width={0}
        src={affinityDiagramPhoto_1}
        preview={{
          visible: showImage[3],
          onVisibleChange: (visible, prevVisible) => {
            const state = [...showImage];
            state[3] = visible;
            setShowImage(state);
          }
        }}
      />
      <Image
        width={0}
            src={affinityDiagramPhoto_2}
        preview={{
          visible: showImage[4],
          onVisibleChange: (visible, prevVisible) => {
            const state = [...showImage];
            state[4] = visible;
            setShowImage(state);
          }
        }}
      />
    </div>
  )

}

export default AffinityDiagramPhoto;
