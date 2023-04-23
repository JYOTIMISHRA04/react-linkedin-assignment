import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewsPost from './NewsPost';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function SideNews() {
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 700 }} color="text.secondary" gutterBottom>
                    Linkedin News
                </Typography>

                <NewsPost />

            </CardContent>
            <CardActions>
                <Button size="small">Show More</Button>
            </CardActions>
        </Card>
    );
}