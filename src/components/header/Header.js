import React from "react";
import {makeStyles, Toolbar, AppBar, IconButton, Typography, Link} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        backgroundColor: 'black'
    },
    links: {
        color: 'white',
        paddingLeft: '20px'
    }
}));

export const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        RobDobyns.com
                    </Typography>
                    <div>
                        <Link href={'#'} target={'_blank'} className={classes.links}>Resume</Link>
                        <Link href={'#'} target={'_blank'} className={classes.links}>Git Hub</Link>
                        <Link href={'#'} target={'_blank'} className={classes.links}>Tutorials</Link>
                        <Link href={'#'} target={'_blank'} className={classes.links}>Code For Nebraska</Link>
                        <Link href={'#'} target={'_blank'} className={classes.links}>3D Models</Link>
                        <Link href={'#'} target={'_blank'} className={classes.links}>Dad Jokes</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}