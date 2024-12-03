import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login'
import Signup from './pages/signup';
import Landing from './pages/landing'

import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';



function App(){

  const[users,setusers] = useState(
    [
      {
        username:"nisha",
        password:"123"
      }
    ]
  )


  return(
  <BrowserRouter>
    
  <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}>

    </Route>

    <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}>

    </Route>
    <Route path='/landing' element={<Landing/>}>

    </Route>
    </Routes>
    </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   
   
   
  <App></App>

   </div>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

