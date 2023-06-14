import { Box } from "@mui/system";
import React, { useState } from "react";
import './Home.css'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

function Login(props) {
    const [username, setUsername] = useState("");

    return (
        <div className="Login">
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
                        justifyContent: 'center',
                        height: '80vh',
                        width: '70vh'
                    }}>
                    <img style={{ width: 400, height: 100 }} src="https://zorashouse.com/wp-content/uploads/2022/03/logo.png"></img>
                    <br></br>
                    <br></br>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        autoComplete="off">
                        <p style={{ textAlign: "center" }}>Username</p>
                        <TextField
                            style={{ width: "25ch", height: "5ch", borderColor: 'gray', borderWidth: 1 }}
                            label="Username"
                            variant="outlined"
                            placeholder="Username"
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }} />
                        <br></br>
                        <p style={{ textAlign: "center" }}>Password</p>
                        <TextField
                            style={{ width: "25ch", height: "5ch", borderColor: 'gray', borderWidth: 1, marginBottom: "5ch" }}
                            variant="outlined"
                            type="password"
                            placeholder="Password"
                            label = "Password"
                        />
                    </Box>
                    <button className="inline-block px-10 py-4 bg-emerald-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md" type="Button"
                        onClick={() => {
                            props.selectUser(username);
                        }}>Login</button>


                </Paper>
            </div>
        </div>
    )
}

export default Login;
