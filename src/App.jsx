import { useState } from 'react'
import './App.css'
import './index.css';
import Button1 from './Buttons/Button1'
import Form from './forms/Form'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header';
import Tables from './tables/Tables';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
    <div className='flex'>
     <Sidebar />
     <Outlet />
    </div>
    </>
  )
}

export default App
