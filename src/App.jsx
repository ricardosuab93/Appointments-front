import React from 'react'
import FORM from './components/FORM/FORM.jsx'
import DASHBOARD from './components/DASHBOARD/DASHBOARD.jsx'
import NAVBAR from './components/NAV/NAVBAR.jsx'
import { Route, Routes } from "react-router-dom";
import HOME from './components/HOME/HOME.jsx';
import DETAIL from './components/DETAIL/DETAIL.jsx';

const App = () => {
  return (
    <>
      <NAVBAR />
      <Routes>
        <Route path='/' element={ <HOME /> } />      
        <Route path='dashboard' element={ <DASHBOARD /> } />      
        <Route path='dashboard/:id' element={ <DETAIL /> } />      
        <Route path='reservar' element={ <FORM /> } />    
      </Routes>
    </>
  )
}

export default App
