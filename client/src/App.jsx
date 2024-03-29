import { useState } from 'react'
import MainHeader from './components/Header/Header'
import {Routes, Route} from 'react-router-dom';
import Sidebar  from './components/Sidebar/Sidebar'
import Main  from './components/Main/Main'
import Demo from './components/test'
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import { AppShell, Button, Drawer, Loader } from '@mantine/core';
import Login from './pages/Login/Login';
import AppWrapper from './AppWrapper';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Register from './pages/Register/Register';
// import Navbar from './components/Navbar/Navbar'
// import './App.css'

function App() {
  const [opened, setOpened] = useState(true);


  return (
    <div className="App">
      <div className="wrapper">
      {/* <Routes>
          <Route path='/dashboard/*' element={<AppWrapper />} />
          <Route path='/login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
      </Routes> */}
        <AppWrapper />
      </div>
    </div>
  )
}

export default App


{/* <div className="App">
<Routes>
  <Route path="/test" element={<Demo />} />
</Routes> */}
{/* <Navbar /> */}
{/* <MainHeader /> */}
{/* <Sidebar /> */}
{/* <Demo />
<Main />
</div> */}