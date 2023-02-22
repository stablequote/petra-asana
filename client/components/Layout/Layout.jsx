import { Container } from '@mantine/core';
import Demo from '../test'
import MainHeader from '../Header/Header';
import './Layout.css'

function Layout({children}) {
  return (
    <div className='layout'>
        <Demo />
        <MainHeader />
        <Container size="md" p="sm">
          {children}
        </Container>
    </div>
  )
}

export default Layout