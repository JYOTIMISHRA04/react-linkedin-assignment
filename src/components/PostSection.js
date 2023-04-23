import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

import { ArticleTwoTone, OndemandVideoTwoTone, PhotoSizeSelectActualTwoTone, WorkTwoTone } from "@mui/icons-material";
import { Box, Divider, InputBase } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const SearchBox = styled(InputBase)({
    marginLeft: '1rem',
    flexGrow: 1,
    border: "1px solid #ededed",
    paddingLeft: "10px",
    borderRadius: "20px",
    height: "40px"
});

const CustomCardHeader = () => {
    return (
        <CardHeader
            sx={{ py: 1 }}
            title={
                <HeaderContainer>
                    <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C5603AQHrFYmzWjyqRA/profile-displayphoto-shrink_800_800/0/1617636722447?e=1687996800&v=beta&t=ebe-6OXJORuydlHe0GAXnRHUs4RfzUehPs6547Svw_g" />
                    <SearchBox placeholder="Start a post" />
                </HeaderContainer>
            }
        />
    );
};

export default function PostSection() {
    const classes = useStyles()

    return (
        <Card sx={{ position: "relative", p: 2 }}>

            <CustomCardHeader />
            <Divider orientation='horizontal' />
            <CardActions disableSpacing >
                <Typography variant="body2" color="text.secondary" style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingLeft: "20px", paddingRight: "20px" }}>
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <PhotoSizeSelectActualTwoTone color='info' />
                        </IconButton>Photo
                    </Box>
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <OndemandVideoTwoTone color='success' />
                        </IconButton>Video
                    </Box>
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <WorkTwoTone color="secondary" />
                        </IconButton>Job
                    </Box>
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <ArticleTwoTone color="warning" />
                        </IconButton>Article
                    </Box>
                </Typography>
            </CardActions>

        </Card>
    );
}

const useStyles = makeStyles({
    flex: {
        "display": "flex",
        "justifyContent": "space-between",
        alignItems: "center"
    },
});