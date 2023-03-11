import {Routes, Route, useParams} from 'react-router-dom'
import { Container, Text } from '@mantine/core'
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

function Layout({children}) {
  const {id} = useParams()

  return (
    <div className='layout'>
        {/* <Demo />
        <MainHeader /> */}
        <Container size="md" p="sm" pt="xl">
          <Text mb="lg" pl="md" color="darkblue">Project Name</Text>
          <NavTabs id={id} />
          {/* {children} */}
          {/* <h2>content</h2> */}
          <Routes>
            {/* for quick sidebar navigation */}
            {/* <Route path="/summary" element={<Summary />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<SingleProject />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<SingleTask />} />
            {/* actual project routes */}
            <Route path="/projects/:id/summary" element={<Summary />} />
            <Route path="/projects/:id/board" element={<Board />} />
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