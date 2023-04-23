import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

import { Bookmark } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProfileDetails() {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ position: "relative" }}>

            <CardMedia
                component="img"
                height="60"
                image="https://media.licdn.com/dms/image/D4D16AQHsr8SmH1oQbw/profile-displaybackgroundimage-shrink_350_1400/0/1675368552944?e=1687996800&v=beta&t=DTnHXBgmBZWETPsmDd-FjSyEU_ph_VhS8wb4poTGNWg"
                alt="Paella dish"
            />
            <CardHeader
                title="Jyoti Mishra"
                subheader="Web Developer | JS | React"
                style={{ textAlign: "center" }}
            />
            <Box style={{
                "position": "absolute",
                "top": "35px",
                "margin": "auto",
                "right": "0px",
                "left": "0px",
                "border": "4px solid white",
                "width": "max-content",
                "borderRadius": "24px"
            }}>
                <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C5603AQHrFYmzWjyqRA/profile-displayphoto-shrink_800_800/0/1617636722447?e=1687996800&v=beta&t=ebe-6OXJORuydlHe0GAXnRHUs4RfzUehPs6547Svw_g" />
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Box className={classes.flex}>
                        Who's viewed your profile
                        <span><b>146</b></span>
                    </Box>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Box mb={4} className={classes.flex}>
                        Impressions of your post
                        <span><b>346</b></span>
                    </Box>
                </Typography>
                <Divider orientation='horizontal' />
            </CardContent>
            <CardActions disableSpacing>
                <Typography variant="body2" color="text.secondary">
                    <Box className={classes.flex}>
                        <IconButton aria-label="add to favorites">
                            <Bookmark />
                        </IconButton>My Items
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