import React, {useState} from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";

import {jokeArray} from "./jokeArray";

// const jokeArray = [
//     "I farted into my wallet. Now I have gas money.",
//     "German sausage jokes are the wurst"
// ]

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 20px'
    },
    title: {
        textAlign: 'center',
        marginTop: 30
    },
    body: {
        marginTop: 50
    },
    jokeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 50
    },
    joke: {
        textAlign: 'center',
        border: '1px solid black',
        boxShadow: '5px 5px 7px',
        marginTop: 30,
        padding: 10
    },
    copyButton: {
        width: 200,
        margin: '10px auto'
    },
    jokeNumber: {
        textAlign: 'center',
        color: 'blue',
        paddingBottom: 10
    }
}));

export const Jokes = () => {

    const classes = useStyles();
    const [joke, setJoke] = useState('');

    const getJoke = () => {
        const jokeNumber = Math.floor(Math.random() * (jokeArray.length));
        setJoke(jokeArray[jokeNumber]);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(joke);
    }

    return (
        <div className={classes.root}>
            <div style={{position: 'relative'}}>
                <Typography variant={'h3'} className={classes.title}>Dad Jokes</Typography>

            </div>
            <Typography variant={'body1'} className={classes.body}>I believe happy people are productive people. To that
                end, I try to ensure that I have a terrible, groan producing dad joke ready every day for people to enjoy. To
                help others, here is a random dad joke generator of as many jokes as I can find or care to put into a
                list. Please use them all. Claim them as your own. Be the office comedian.
            </Typography>
            <div className={classes.jokeContainer}>
                <Typography variant={'h6'} className={classes.jokeNumber}>Now with {jokeArray.length} jokes!</Typography>
                <Button variant={'contained'} color={'primary'} onClick={getJoke}>{!!joke ? 'That was terrible. Again!' :`Generate Me A Good Joke`}</Button>
                {!!joke ? <div className={classes.joke}>{joke}</div>: ''}
                {!!joke ? <Button variant={'contained'} color={'secondary'} onClick={copyToClipboard} className={classes.copyButton}>Copy to Clipboard</Button>: ''}
            </div>
        </div>
    )

}