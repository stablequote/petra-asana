import { useState } from 'react'
import MainHeader from './components/Header/Header'
import {Routes, Route} from 'react-router-dom';
import Sidebar  from './components/Sidebar/Sidebar'
import Main  from './components/Main/Main'
import Demo from './components/test'
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import { AppShell, Button, Drawer } from '@mantine/core';
// import Navbar from './components/Navbar/Navbar'
// import './App.css'

function App() {
  const [opened, setOpened] = useState(true);

  return (
    <div className="App">
      <div className="wrapper">
        {/* <MainHeader /> */}
        <AppShell>
          <Button onClick={() => setOpened(true)}>Open Drawer</Button>
          <Button onClick={() => setOpened(false)}>Close Drawer</Button>
          <Drawer opened={opened} onClose={() => setOpened(false)} withOverlay={false} size="xs"
            transition="fade"
            transitionDuration={50}
            transitionTimingFunction="ease"
          >
            <Demo  />
          </Drawer>
          <Layout />
        </AppShell>
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