import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {

    }
}))

export const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            This is the home page
        </div>
    )
}