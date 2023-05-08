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
// import Navbar from './components/Navbar/Navbar'
// import './App.css'

function AppWrapper() {
  const [opened, setOpened] = useState(true);

  return (

    <AppShell sx={{background: "rgb(234, 230, 255)"}}>
        {/* <Button onClick={() => setOpened(true)}>Open Drawer</Button>
        <Button onClick={() => setOpened(false)}>Close Drawer</Button> */}
        <Drawer opened={opened} onClose={() => setOpened(false)} withOverlay={false} size="xs"
        transition="slide-right"
        transitionDuration={50}
        transitionTimingFunction="ease"
        >
        <Demo  />
        </Drawer>
        <Layout />
    </AppShell>
  )
}

export default AppWrapper


{/* <div className="AppWrapper">
<Routes>
  <Route path="/test" element={<Demo />} />
</Routes> */}
{/* <Navbar /> */}
{/* <MainHeader /> */}
{/* <Sidebar /> */}
{/* <Demo />
<Main />
</div> */}