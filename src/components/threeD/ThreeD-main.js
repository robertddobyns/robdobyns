import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: 900,
        margin: '0 auto',
    },
    title: {
        textAlign: 'center',
        marginTop: 30
    },
    body: {
        marginTop: 50
    }
}))

export const ThreeDMain = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h3'} className={classes.title}>3D Models</Typography>
            <Typography variant={'body1'} className={classes.body}>3D modelling and flash animation is really what got
                me started in my current career. The models have since evolved into 3D printing. As I finish up a model
                I will post it here along with the link on Thingiverse where you can print it yourself.
            </Typography>
        </div>
    )
}