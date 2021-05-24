import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: 900,
        margin: '0 auto',
        position: 'relative',
    },
    title: {
        marginTop: 20,
        textAlign: 'center'
    },
    paragraph: {
        marginTop: 20
    }
}))

export const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h3'} className={classes.title}>What is a Rob Dob?</Typography>
            <Typography variant={'body1'} className={classes.paragraph}>&emsp;For those busy professionals or someone wanting
                the hot take, I am a software developer. I've worked the full stack over the last few years specializing
                in Java, Spring, & React. I have worked extensively with Git, Jenkins, Atlassian products, Linux, Windows,
                Powershell, & Bash. I work well independently and within a team to accomplish the goals set forth by the
                business and stakeholders.
            </Typography>
            <Typography variant={'body1'} className={classes.paragraph}>&emsp;Now that the boring stuff is out of the way, I'll
                explain who I really am, staring with my past. I grew up in Washington State where I graduated from high
                school in 1996 with average grades. I immediately joined the Army, did Army stuff for five years, and
                then arrived in Iowa. In 2002 I became a police officer outside of Omaha, Ne where for the next 10 years
                I participated in everything I could, including: Patrol, Interstate Narcotics Interdiction, Gang
                Suppression, Traffic Accident Investigations and Motorcycle Patrol where I guarded 2 presidents.
            </Typography>
            <Typography variant={'body1'} className={classes.paragraph}>&emsp;I retired from law enforcement in 2011. For 6
                years I was a stay-at-home dad taking care of three kids. This was easily the most challenging and
                frustrating job of my life. Once my children were old enough to go to school the stay-at-home gig came
                to an end and I went back to college. I attended two years at Iowa Western Community College where I
                earned my degree in Software Development and Web Design. While a student, I was asked by the staff to
                tutor every software course offered at IWCC. For my hard work, I was awarded the Kirlin Gold Award,
                which is the highest award given to IT students at IWCC. My last year there I was also awarded with the
                Iowa All-Academic team for being the top student in the entire college. From there I was also nominated
                for the All-US Academic team for being one of the top students in the entire country.
            </Typography>
            <Typography variant={'body1'} className={classes.paragraph}>&emsp;In 2017 I was offered an internship at
                Proxibid in Omaha, Ne. I initially started as a QA Intern but after a few months, I was moved to the help desk
                within the Infrastructure team. After about a year, I was offered a full time position by the CTO and
                the opportunity to create and lead their Tier 2 / Tier 3 support team, which I named Operational Support
                Services. While on OSS I was able to build strong ties to every other department within the company.
                Although I didn't have the strongest development skills at the time, I used what I knew to automate many
                of my day-to-day tasks. I even created a mock website for our sales team for an upcoming demo to a
                potential new client. The sales team said that the client signed a $250k contract with Proxibid
                specifically because of the mock site I created. For this I received the quarterly Proxi Moxi award for
                the 'X-Factor'.
            </Typography>
            <Typography variant={'body1'} className={classes.paragraph}>&emsp;In late 2019 a position opened up within the
                development team and I requested the opportunity to really prove myself. I was given the chance and
                every single day since then I have pushed myself during and after work to better myself and improve my
                skills. I've created several personal sites in an attempt to better understand Spring, React, software
                architecture and more. I love learning and this is finally a career where I can never learn it all.
                Along with learning all I can, I have also developed a love for sharing that knowledge on to others. I
                have worked with our QA team to move them from mostly manual testing to understanding and developing the
                skills necessary to write automated testing using software like Selenium. This has not only developed a
                love and new-found passion for coding with the QA team but has also increased the companies overall
                stability and output. What used to take an entire team a week to test before every deployment can now
                be accomplished with a handful of people in only a matter of moments.
            </Typography>
            <Typography variant={'body1'} className={classes.paragraph}>&emsp;As you browse around my site, you will see that
                I have a lot of other passions as well. Slowly I will build out this site to show some of those hobbies
                including, my love of Dad Jokes, 3D modelling and printing, teaching, & using the skills I have been
                given to help others through a charity group called Code For Nebraska. Code For Nebraska is a group of
                like-minded tech and non-tech people around the Omaha metro area that come together to make life easier
                for those that just need some help in life. We aim to make data more accessible for everyone.
            </Typography>
            <Typography variant={'body1'} className={classes.paragraph}>Please look around. If you have any questions,
                please email me, send me a text, or message me on LinkedIn.
            </Typography>
        </div>
    )
}