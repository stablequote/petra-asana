import {Routes, Route} from 'react-router-dom'
import { Container } from '@mantine/core';
import Demo from '../test'
import MainHeader from '../Header/Header';
import './Layout.css'
import Projects from '../Projects/Projects';

function Layout({children}) {
  return (
    <div className='layout'>
        {/* <Demo />
        <MainHeader /> */}
        <Container size="md" p="sm">
          {/* {children} */}
          {/* <h2>content</h2> */}
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<div>Tasks page supposedly</div>} />
          </Routes>
          {/* {children} */}
        </Container>
    </div>
  )
}

export default Layout