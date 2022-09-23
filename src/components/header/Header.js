import React, {useState} from "react";
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
    },
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
}));

export const Header = () => {

    const classes = useStyles();
    const [state, setState] = useState(false);

    const toggleDrawer = (anchor, open) => {

    }

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
                        <Link href={'https://docs.google.com/document/d/e/2PACX-1vTUu7GY24T7l-Iy713yHCjLLvB0mOUbUYVcjNUNFzEbblJvLvR1pXsWBmTlcPnZdnXOhJGJ0Bz8qCbQ/pub'} target={'_blank'} className={classes.links}>Resume</Link>
                        <Link href={'https://www.github.com/robertddobyns'} target={'_blank'} className={classes.links}>Git Hub</Link>
                        <Link href={'https://www.codefornebraska.org'} target={'_blank'} className={classes.links} style={{color: 'red'}}>Code For Nebraska</Link>
                        <Link href={'/#/tutorials'} className={classes.links}>Tutorials</Link>
                        <Link href={'/#/models'} className={classes.links}>3D Models</Link>
                        <Link href={'/#/jokes'} className={classes.links}>Dad Jokes</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}