import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: 900,
        margin: '0 auto'
    },
    title: {
        textAlign: 'center',
        marginTop: 30
    },
    body: {
        marginTop: 50
    }
}))

export const TutorialsMain = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h3'} className={classes.title}>Tutorials</Typography>
            <Typography variant={'body1'} className={classes.body}>I was recently asked to start putting tutorials out for some of the things
                I have learned. I really enjoy teaching and this might be an obvious next step towards that. As I get
                the time, I will start putting videos out. I firmly believe in passing on my knowledge for free because
                it makes us all better in the end. I might have had to pay for school, but if I can teach people enough
                to not have student loans, then that would be an amazing accomplishment.
            </Typography>
        </div>
    )
}