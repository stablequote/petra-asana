import React, {useState} from 'react'
import {Autocomplete, Burger, Group, Header, Navbar} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
// import Navbar from '../Navbar/Navbar'
import './Header.css'

function MainHeader() {
    // const {opened, setOpened} = useState(false)
    const [opened, { toggle }] = useDisclosure(false);

    // const handleOpened = () => {
    //     setOpened(!opened)
    // }
  return (
    <div className="headerWrapper">
        <Header className='header'>
            <div>
                <Group>
                    <Burger size="sm" opened={opened} onClick={toggle} />
                </Group>
            </div>
            <div>
                <Group>
                    <Navbar className='navbar'>
                        <a href="#">Projects</a>
                        <a href="#">Issues</a>
                        <a href="#">Summary</a>
                        <a href="#">Statistics</a>
                    </Navbar>
                </Group>
            </div>
            <Autocomplete 
                placeholder="Search"
                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            />
        </Header>
    </div>
  )
}

export default MainHeader