import { MoreVert, ThumbUp, CommentOutlined, RepeatOutlined, Send } from '@mui/icons-material';
import { Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

export default function Post() {
    const classes = useStyles()
    return (
        <Card sx={{ mt: 2 }}>
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/36/df/0a/36df0abbd305ce828abfb78114e2af11.jpg" />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Paul Anderson"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://ctfassets.imgix.net/vh7r69kgcki3/HsR6nHqS3I8CxPIuT9EKD/92d775ed2747927686ec6a2f21d4864f/Web_150DPI-20221216_WeWork_Product_Shoot_Q4_8.jpg?auto=format%20compress&fit=crop&q=50&w=1096&h=617"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing >
                <Typography variant="body2" color="text.secondary" style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingLeft: "20px", paddingRight: "20px" }}>
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <ThumbUp color='default' />
                        </IconButton>Like
                    </Box>
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <CommentOutlined color='default' />
                        </IconButton>Comment
                    </Box>
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <RepeatOutlined color="default" />
                        </IconButton>Repost
                    </Box>
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <Send color="default" />
                        </IconButton>Send
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