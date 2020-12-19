import React, { useState, useEffect } from 'react';
import useStyles from '../../constant/styles';
import {
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  Divider,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CachedIcon from '@material-ui/icons/Cached';
import AppleIcon from '@material-ui/icons/Apple';
import { circumstances } from './data';

const FigmaDemo = ({activeCircumstance}) => {
  const classes = useStyles();
  const [figmaURL, setFigmaURL] = useState('');
  const [nodeId, setNodeId] = useState(circumstances[activeCircumstance].nodeId || '');
  const [embedURL, setEmbedURL] = useState('');
  const [showTip, setShowTip] = useState(true);
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFigmaURL(`https://www.figma.com/proto/uMxc0ySbI9ZfKIFe81qfiy/i-Remember_HiFi_1?node-id=${nodeId}&scaling=scale-down&hotspot-hints=${Number(showTip)}&hide-ui=1`)
  }, [nodeId, showTip]);

  useEffect(() => {
    const url = `https://www.figma.com/embed?embed_host=share&url=${window.encodeURIComponent(figmaURL)}`;
    setEmbedURL(url);
    setIsLoading(true);
  }, [figmaURL]);

  useEffect(() => {
    setNodeId(circumstances[activeCircumstance].nodeId || '');
  }, [activeCircumstance]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} container justify="center" alignItems="center" direction="column">
        <div className={classes.figmaContainer}>
          <iframe onLoad={() => setIsLoading(false)} className={`FigmaIframe ${isLoading ? '' : 'loaded'}`} title="Figma demo" src={embedURL} key={key} allowFullScreen> </iframe>
          <div className="loading">
            <AppleIcon />
          </div>
        </div>
        <Button>
          <a href={figmaURL} target="_blank" rel="noopener noreferrer" style={{display: 'flex'}}>
            <ExitToAppIcon /> 在新分頁開啟
          </a>
        </Button>
      </Grid>
      <Grid item container justify="center" alignItems="center" xs={12} md={6} direction="column">
        <div>
          <h3>{ circumstances[activeCircumstance].index }</h3>
          <h3>{ circumstances[activeCircumstance].title }</h3>
        </div>
        <div className={classes.quote}>
          <h3>情境</h3>
          { circumstances[activeCircumstance].description }
        </div>

        <Divider />

        <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
          <Button onClick={() => setKey(key + 1) || setIsLoading(true)} color="primary" variant="contained">
            <CachedIcon /> 重新整理Figma
          </Button>

          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={showTip}
                  onChange={(e) => setShowTip(e.target.checked)}
                  name="showTip"
                  color="primary"
                />
              }
              label="顯示可按區域提示"
            />
          </FormGroup>
        </div>

      </Grid>
    </Grid>
  );
}

export default FigmaDemo;

//https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FuMxc0ySbI9ZfKIFe81qfiy%2Fi-Remember_HiFi_1%3Fnode-id%3D250%253A1012%26scaling%3Dscale-down
//https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/uMxc0ySbI9ZfKIFe81qfiy/i-Remember_HiFi_1?node-id=249%253A1812&scaling=scale-down&hide-ui=1
