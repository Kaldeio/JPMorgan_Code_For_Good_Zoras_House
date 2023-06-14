import React, { useState } from "react";
import './Home.css'
import Paper from '@mui/material/Paper';


function Home(props) {
    return (
        <div className="home">
             <Paper
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '95vh',
                        width: '65vh'
                    }}
                >
                <img style={{width:400, height:100}}src="https://zorashouse.com/wp-content/uploads/2022/03/logo.png"></img>
                <br></br>
                <h2 style={{ textAlign: "center" }}>What would you like to do?</h2>
                <br></br>
                <br></br>
                <button style={{width:400, height:75,textAlign: "center",display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}} className="inline-block px-20 py-8 bg-emerald-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md"
                    onClick={() => {
                        props.setPage('chat');
                    }}>
                        Let's chat!
                </button>
                <br></br>
                <br></br>
                <button style={{width:400, 
                        height:75,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}className="inline-block px-20 py-8 bg-emerald-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md"
                    onClick={() => {
                        props.setPage('profiles');
                    }}>
                        Meet the people!
                </button>
                <br></br>
                <br></br>
                <button style={{width:400, height:75,textAlign: "center",display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}className="inline-block px-20 py-8 bg-emerald-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md"
                    onClick={() => {
                        props.setPage('profile');
                    }}>
                       Introduce yourself!
                </button>
                <br></br>
                <br></br>
                <button style={{width:400, height:75,textAlign: "center",display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}className="inline-block px-20 py-8 bg-emerald-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md"
                    onClick={() => {
                        /*window.location.href = "https://zorashouse.com/events/";*/
                        props.setPage('event');
                    }}>
                        Checkout what's happening! 
                </button>
                </Paper>
        </div>
    )
}

export default Home;
