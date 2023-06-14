import React, { useState } from "react";
import './Home.css'
import styles from "./Home.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function Profile(props) {
    const user = props.user;
    return (
        <div className="Profile">
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
                    <Box sx={{ display: 'flex', p: 1, alignItems: 'center', width: '100%', justifyContent: 'space-between', backgroundColor: 'pink' }}>
                        <IconButton onClick={() => {
                            props.setPage("home");
                        }}>
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h4"> {user.firstLastName} </Typography>
                        <Box sx={{ width: '40px' }} />
                    </Box>
                    <div>
                        <img style={{ width: 200, height: 200, borderRadius: "100px" }} src={user.picture_div}></img>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField size="small" id="outlined-basic" label="Name" variant="outlined" defaultValue={ user.firstLastName }/>
                        <br></br>
                        <TextField size="small" id="outlined-basic" label="Bio" variant="outlined" defaultValue={ user.bio }/>
                        <br></br>
                        <TextField size="small" id="outlined-basic" label="Age" variant="outlined" defaultValue={ user.age }/>
                        <br></br>
                        <TextField size="small" id="outlined-basic" label="Occupation" variant="outlined" defaultValue={ user.occupation } />
                        <br></br>
                        <TextField size="small" id="outlined-basic" label="Email" variant="outlined" defaultValue={ user.emailAddress }/>
                    </Box>
                    <button className="inline-block px-20 py-6 bg-emerald-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md" type="Button"
                        onClick={() => {
                            props.setPage('home');
                        }}>Submit</button>
                </Paper>
            </div>


        </div>


    )
}
export default Profile;

