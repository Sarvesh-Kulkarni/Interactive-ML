import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

export const MiniNavBar = _ => {

  let history = useHistory();
  const pushLink = link => {
    history.push(link);
  }
  
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} md={3} xl={3} lg={3} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Button
              variant="contained"
              color="primary"
              onClick={()=>{pushLink('/k-means')}}
          >
              About
          </Button>
        </Grid>
        <Grid item xs={3} md={3} xl={3} lg={3} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
          <Button
              variant="contained"
              color="primary"
              onClick={()=>{pushLink('/k-means/train')}}
              >
              Train
          </Button>
        </Grid>
        <Grid item xs={3} md={3} xl={3} lg={3} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
          <Button
              variant="contained"
              color="primary"
              onClick={()=>{pushLink('/k-means/test')}}
              >
              Test
          </Button>
        </Grid>
        <Grid item xs={3} md={3} xl={3} lg={3} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
          <Button
              variant="contained"
              color="primary"
              onClick={()=>{pushLink('/k-means/result')}}
              >
              Result
          </Button>
        </Grid>
      </Grid> 
    </div>      
  );
}