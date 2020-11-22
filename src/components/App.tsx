import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
