import { useState } from 'react'
import MainHeader from './components/Header/Header'
import {Routes, Route} from 'react-router-dom';
import Sidebar  from './components/Sidebar/Sidebar'
import Main  from './components/Main/Main'
import Demo from './components/test'
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
// import Navbar from './components/Navbar/Navbar'
// import './App.css'

function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/project" element={<Projects />} />
      </Routes>
      
     <Layout>
      <Projects />
     </Layout>
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