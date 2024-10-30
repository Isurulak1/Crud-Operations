import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import User from './Components/User/User';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mainhome" element={<Home/>}/>
          <Route path="/adduser" element={<User/>}/>
          <Route path="/userdetails" element={<UserDetails/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
