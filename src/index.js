import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login'
import Signup from './pages/signup';
import Landing from './pages/landing'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(){
  const [users, setusers] = useState([
    { username: "nisha", password: "123" }
  ])

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>} />
        <Route path='/signup' element={<Signup users={users} setusers={setusers}/>} />
        <Route path='/landing' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);
