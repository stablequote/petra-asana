import { useState } from 'react'
import MainHeader from '../components/Header/Header'
import Sidebar  from '../components/Sidebar/Sidebar'
import Demo from '../components/test'
// import Navbar from '../components/Navbar/Navbar'
// import './App.css'

function App() {

  return (
    <div className="App">
      {/* <h1>Petra Port</h1> */}
      {/* <Navbar /> */}
      <MainHeader />
      {/* <Sidebar /> */}
      <Demo />
    </div>
  )
}

export default App
