import React from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home/Home';
const App = () => {
  return (
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
  )
}


export default App;




