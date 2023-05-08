import {Routes, Route, useParams, redirect} from 'react-router-dom'
import { Container, Flex, Text } from '@mantine/core'
import Demo from '../test'
import MainHeader from '../Header/Header'

import Projects from '../Projects/Projects'
import SingleProject from '../../pages/Project/Project'
import Tasks from '../../pages/Tasks/Tasks'
import SingleTask from '../../pages/Task/Task'
import Summary from '../../pages/Summary/Summary'
import Board from '../../pages/Board/Board'
import Calender from '../../pages/Calender/Calender'
import Timeline from '../../pages/Timeline/Timeline'
import CustomTimeline from '../../components/Timeline/Timeline'
import Reports from '../../pages/Reports/Reports'
import ProjectSettings from '../../pages/ProjectSettings/ProjectSettings'
import './Layout.css'
import NavTabs from '../NavTabs/NavTabs'
import DataGrid from '../DataGrid/DataGrid'
import DrageAndDrop from '../../pages/Board/DrageAndDrop'
// import {BsWrenchAdjustableCircleFill} from 'react-icons/bs'
import {GiWrench} from 'react-icons/gi'
import ProjectsList from '../../pages/ProjectsList/ProjectsList'

function Layout({children}) {
  const {id} = useParams()

  function handleLogin(e) {
    e.preventDefault()
    
    fetch("http://localhost:5000/dashboard", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': 'admin2@desv.com',
        'password': 'dev'
    } )
    }).then((res) => {
      console.log(res)
      if(res.status === 200) {
        console.log("redirecting client")
        redirect("http://localhost:5176/projects/535/tasks")
        // window.location.replace("/dashboard")
      }
    })
  }

  return (
    <div className='layout'>
        {/* <Demo />
        <MainHeader /> */}
        <Container size="md" p="sm" pt="xl">
        {/* <form>
          <input type="email" name='email' />
          <input type="password" name='password' />
          <button onClick={handleLogin} type="submit">login</button>
        </form> */}
          <Flex>
            <GiWrench size={25} color="darkblue" />
            <Text mb="lg" pl="md" color="darkblue">Project Name</Text>
          </Flex>
          <NavTabs id={id} />
          {/* {children} */}
          {/* <h2>content</h2> */}
          <Routes>
            {/* for quick sidebar navigation */}
            <Route path="/" element={<Summary />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/projects/:id" element={<SingleProject />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<SingleTask />} />
            {/* actual project routes */}
            <Route path="/projects/:id/summary" element={<Summary />} />
            <Route path="/projects/:id/board" element={<DrageAndDrop />} />
            {/* <Route path="/projects/:id/tasks" element={<Tasks />} /> */}
            <Route path="/projects/:id/tasks" element={<DataGrid />} />
            <Route path="/projects/:id/calender" element={<Calender />} />
            <Route path="/projects/:id/timeline" element={<CustomTimeline />} />
            <Route path="/projects/:id/reports" element={<Reports />} />
            <Route path="/projects/:id/settings" element={<ProjectSettings />} />
          </Routes>
          {/* {children} */}
        </Container>
    </div>
  )
}

export default Layout