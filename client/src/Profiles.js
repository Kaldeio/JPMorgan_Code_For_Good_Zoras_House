import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from "@mui/material";
import IconButton from '@mui/material/IconButton';

function Profiles(props) {
    const profiles = props.accountData.map((profile) => {
        return (
            {
                id: profile.id,
                name: profile.firstLastName,
                bio: profile.bio,
                profileUrl: profile.picture_div
            }
        )
    });

    return (
        <div className="Profiles">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}
            >
                <Paper
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '85vh',
                        width: '95vh'
                    }}
                >
                    <Box sx={{display: 'flex', p: 1, alignItems: 'center', width: '100%', justifyContent: 'space-between', backgroundColor:'pink' }}>
                        <IconButton onClick={() => {
                            props.setPage("home");
                        }}>
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h4"> Meet the Members! </Typography>
                        <Box sx={{ width: '40px' }} />
                    </Box>
                    <List sx={{ height: '100%', width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', overflowY: 'scroll' }}>
                        {profiles.map((profile) => (
                            <Box key={profile.id}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={profile.name} src={profile.profileUrl} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={profile.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                </Typography>
                                                {profile.bio}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </Box>
                        ))}

                    </List>
                </Paper>
            </div>
        </div>
    );
}

export default Profiles;