import { Avatar, Box, Button, Navbar, NavLink, Flex, Text, Image } from '@mantine/core';
import {Link} from 'react-router-dom';
import logo from '.././assets/logo.png'

function Demo() {
  return (
    <Navbar p="xs" pt="lg" width={{ base: 250 }} style={{gridArea: "sidebar", background: "#000530", height: "100vh", float: "left"}}>
      <Navbar.Section>
        <div>
          <Image 
          src={logo}
          width={60}
          height={60}
          placeholder="main logo"
          radius="md"
          mt="md"
          ml="xs"
          />
          {/* <img src={logo} alt="" /> */}
        </div>
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <Box className='nav-container'>
            <NavLink
                label="Summary"
                component={Link}
                to="/summary"
            />
            <NavLink
                label="Projects"
                component={Link}
                to="/projects"
            />
            <NavLink
                label="Tasks"
                component={Link}
                to="/tasks"
            />
            <NavLink
                label="Reports"
                component={Link}
                to="/reports"
            />
        </Box>
      </Navbar.Section>
      <Navbar.Section>
        <Box>
            <Button>
                <Avatar />
                <Flex justify="center" align="center" direction="column">
                    <Text fz="sm">
                        Amy Horsefighter
                    </Text>
                    <Text fz="xs">
                        amyhorsefighter@gmail.com
                    </Text>
                </Flex>
            </Button>
        </Box>
      </Navbar.Section>
    </Navbar>
  );
}

export default Demo;