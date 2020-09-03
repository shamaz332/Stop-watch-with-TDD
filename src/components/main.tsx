import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Calculation from './Calculation/calculations';
import { Controls } from "./controls/controls"
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.primary,
        },
    }),
);

export default function Main() {
    const classes = useStyles();
    const [timeInSec, setTimeInSec] = useState<number>(0)
    const [timeArray, setTimeArray] = useState<Array<number | string>>([])
    useEffect(() => {

        let timeArray: Array<number | string> = Calculation(timeInSec)
        setTimeArray(timeArray)
    }, [timeInSec])
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>


                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>{timeArray[0]}</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>{timeArray[1]}</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>{timeArray[2]}</Paper>
                </Grid>

                <Controls setTimeInSec={setTimeInSec}/>

            </Grid>

            
        </div>
    );
}
