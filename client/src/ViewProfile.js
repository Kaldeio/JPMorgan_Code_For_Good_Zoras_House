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


function ViewProfile(props) {
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
                <Box sx={{display: 'flex', p: 1, alignItems: 'center', width: '65vh', justifyContent: 'space-between', backgroundColor:'pink' }}>
                        <IconButton onClick={() => {
                            props.setPage("home");
                        }}>
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h4"> About Me </Typography>
                        <Box sx={{ width: '40px' }} />
                    </Box>
                <Paper
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '75vh',
                        width: '65vh'
                    }}
                >
                <div>
                    <img style={{ width: 200, height: 200 }} src="https://media-exp1.licdn.com/dms/image/C4E03AQEjQ36utJ80SA/profile-displayphoto-shrink_800_800/0/1631218531817?e=2147483647&v=beta&t=kQ1m-2S4pb91V3n6dLpuSy5wUI4BZbiE8tzoed-YO4s"></img>
                </div>
                <br></br>
                <br></br>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValida
                    autoComplete="off"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <p >Name: Kushi Malasani</p>
                        <p>Bio: Live Love Laugh</p>
                        <p>Interests: Swimming, Painting</p>
                        <p>Occupation: Student</p>
                        <p>Contact: 330-780-7700</p>
                    
                    </div>
                
                </Box>
                </Paper>
            </div>


        </div>


    )
}
export default ViewProfile;
