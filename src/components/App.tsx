import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../App.css';
import Main from './main';

// css  
const useStyles = makeStyles({
  root: {
    minWidth: 500,
    
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="app-container">
      <Card className={classes.root}>
        <CardContent style={{backgroundColor: "#fffd00"}}>
        <Main/>

        </CardContent>
      </Card>
    </div>
  );
}

export default App;
