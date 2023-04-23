import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export default function NewsPost() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemText primary="Here are 2023’s top companies to watch" secondary="Top news • 10, 397 readers" />
            </ListItem>
            <ListItem>
                <ListItemText primary="IT embraces generative AI" secondary="2d ago • 38, 556 readers" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Meta cuts core roles; workers react" secondary="2d ago • 408 readers" />
            </ListItem>
        </List>
    );
}