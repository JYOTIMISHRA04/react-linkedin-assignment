import React from 'react'
import { Grid, Paper, Box, Card, Divider } from "@mui/material"
import { makeStyles } from '@mui/styles';
import ProfileDetails from '../components/ProfileDetails';
import PostSection from '../components/PostSection';
import Post from '../components/Post';
import SideNews from '../components/SideNews';

const Dashboard = () => {
    const classes = useStyles()
    return (
        <><Box p={2} marginX={20}>
            <Grid container spacing={2}>
                <Grid xs={3} item>
                    <ProfileDetails />
                </Grid>
                <Grid xs={6} item>
                    {/* <Paper className={classes.paperHeight}> */}
                    <PostSection />
                    <Divider />
                    <Post />
                    {/* </Paper> */}
                </Grid>
                <Grid xs={3} item>
                    <SideNews />
                </Grid>

            </Grid>
        </Box >


        </>
    )
}

const useStyles = makeStyles({
    paperHeight: {
        height: "100vh"
    },
});

export default Dashboard