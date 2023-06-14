import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import Home from './Home';
import Profiles from './Profiles';
import Profile from './Profile';
import Chat from './Chat';
import Event from './Event';
import ViewProfile from './ViewProfile';
import HomePageBG from './Img/HomePageBG.png';
import axios from 'axios';

function App() {
  const [messageData, setMessageData] = useState("");
  const [accountData, setAccountData] = useState("");
  const [channelData, setChannelData] = useState("");

  const [user, setUser] = useState("login");

  useEffect(() => {
    axios.get('http://localhost:8080/messages').then(
      (response) => {
        setMessageData(response.data);
      }
    );
    axios.get('http://localhost:8080/accounts').then(
      (response) => {
        setAccountData(response.data);
      }
    );
    axios.get('http://localhost:8080/channels').then(
      (response) => {
        setChannelData(response.data);
      }
    );
  }, []);

  const [page, setPage] = useState('login');

  const selectUser = (user) => {
    // Find user in accountData
    let foundUser = accountData.find((account) => account.username === user);
    if (foundUser) {
      // Set user
      setUser(foundUser);
      // Set page to home
      setPage('home');
    }
  }

  const showPage = () => {
    switch (page) {
      case 'login':
        return <Login selectUser={selectUser}/>;
      case 'home':
        return <Home setPage={setPage}/>;
      case 'profiles':
        return <Profiles accountData={accountData} setPage={setPage}/>;
      case 'profile':
        return <Profile user={user} setPage={setPage}/>;
      case 'chat':
        return <Chat user={user} accountData={accountData} messageData={messageData} channelData={channelData} setPage={setPage}/>;
      case 'event':
        return <Event setPage={setPage}/>;
    }
  };

  return (
    <div className="App" style={{backgroundImage: `url(${HomePageBG})`, backgroundSize:'cover'}}>
      {showPage()}
    </div>
  );
}

export default App;
