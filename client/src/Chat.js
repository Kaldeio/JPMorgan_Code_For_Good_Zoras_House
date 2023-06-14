import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import { Icon } from "@mui/material";

function seededRandom(username) {
    // Generate seed from username
    let seed = 0;
    for (let i = 0; i < username.length; i++) {
        seed += username.charCodeAt(i);
    }

    // Generate random number between 0 and 1
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getRandomBackground(seed) {
    const hue = Math.floor(seededRandom(seed) * 360);

    return {
        backgroundColor: `hsl(${hue}, 75%, 60%)`,
    };
};

function ChatMessages(props) {
    return (
        <Box sx={{ height: '100%', overflowY: 'scroll', paddingX: 2 }}>
            {props.messages.map((message) => {
                if (message.space === props.currentSpace) {
                    return (
                        <Card key={message.id} sx={{ marginY: 2 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={getRandomBackground(message.user)}>
                                        {message.user[0]}
                                    </Avatar>
                                }
                                title={message.user}
                                subheader={message.date}
                            />
                            <CardContent>
                                {message.message}
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button>
                                    <FavoriteIcon color="error" style={{ marginRight: 4 }} />
                                    <Typography color="error"> {Math.floor(seededRandom(message.message) * 300)} </Typography>
                                </Button>
                            </CardActions>
                        </Card>
                    );
                }
            })
            }
        </Box>
    );
}

function ChatField(props) {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        props.sendMessage(message);
        setMessage("");
    };

    return (
        <Paper sx={{ p: 2 }}>
            <TextField
                id="outlined-textarea"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => { setMessage(e.target.value) }}
                multiline
                fullWidth
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton edge="end" onClick={handleSendMessage}>
                                <SendIcon className="text-emerald-600" />
                            </IconButton>
                        </InputAdornment>
                }}
            />
        </Paper>
    );
}

function randomDate(username) {
    // Generate random date in Month DD, YYYY format
    const date = new Date(Math.floor(seededRandom(username) * 1000000000000));
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

function Chat(props) {
    const spaces = props.channelData;
    const users = props.accountData;

    const [currentSpace, setCurrentSpace] = useState(spaces[0]);

    const [messages, setMessages] = useState(
        props.messageData.map((message) => {
            let space = spaces.find((channel) => channel.id === message.channel_id).channelName
            let user = users.find((account) => account.id === message.account_id).firstLastName
            return {
                id: message.id,
                space: space,
                user: user,
                message: message.message,
                date: randomDate(user)
            }
        })
    );

    const sendMessage = (message) => {
        // Add message to local state
        setMessages([...messages, {
            id: messages.length + 100,
            space: currentSpace.channelName,
            user: props.user.firstLastName,
            message: message,
            date: new Date().toLocaleDateString()
        }]);
        // Post message to server
        axios.post('http://localhost:8080/post', {
            message: message,
            channel_id: currentSpace.id,
            account_id: props.user.id
        });
    };

    return (
        <Box sx={{ height: '100vh', width: '100%', p: 2 }} >
            <Grid container columnSpacing={2} sx={{ height: '100%' }}>
                <Grid item xs={4} sx={{ height: '100%' }} >
                    <Paper sx={{ height: '100%', p: 0 }}>
                        <Box sx={{ backgroundColor: 'pink', paddingX: 1, paddingY: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <IconButton onClick={() => {
                                props.setPage("home");
                            }}>
                                <HomeIcon  />
                            </IconButton>
                            <Typography> Spaces </Typography>
                            <Box sx={{ width: '40px' }} />
                        </Box>
                        <List>
                            {spaces.map((space) => (
                                <ListItem key={space.id} disablePadding>
                                    <ListItemButton onClick={() => { setCurrentSpace(space) }}>
                                        {space.channelName}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={8} sx={{ height: '100%', paddingRight: 2 }}>
                    <Paper sx={{ height: '100%', p: 0, display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ backgroundColor: 'pink', p: 2 }}>
                            {currentSpace.channelName}
                        </Typography>
                        <ChatMessages currentSpace={currentSpace.channelName} messages={messages} />
                        <ChatField sendMessage={sendMessage} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Chat;