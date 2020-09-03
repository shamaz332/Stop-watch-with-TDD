import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

type Props = {
    setTimeInSec: Function
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            display: "flex",
            justifyContent: "center"
        },

    }),
);



export const Controls = (props: Props) => {
    const classes = useStyles();
    const { setTimeInSec } = props;
    const [intervalId, setIntervalId] = useState<number>(0)


    const handlePlay = () => {
        let interval: any = setInterval(() => {
            setTimeInSec((previousState: number) =>

                previousState + 1);
        }, 1000)
        setIntervalId(interval)
    }
    const handleStop = () => {
        clearInterval(intervalId)
    }
    const handleReset = () => {
        clearInterval(intervalId)
        setTimeInSec(0)
    }


    return (
        <div className={classes.root} style={{ marginLeft: "40px" }} >
            <Grid container>


                <Grid item xs={12} md={4}>
                    <Button variant="outlined" color="primary" onClick={handlePlay}>
                        Play
                    </Button>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Button variant="outlined" color="primary" onClick={handleStop}>
                        Stop
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button variant="outlined" color="primary" onClick={handleReset}>
                        Reset
                    </Button>
                </Grid>

            </Grid>


        </div>
    )
}
