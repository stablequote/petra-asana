import { Avatar, Box, Button, Navbar, NavLink, Flex, Text } from '@mantine/core';
import {Link} from 'react-router-dom';

function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section>{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow mt="md">
        <Box>
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