import { Avatar, Box, Button, Navbar, NavLink, Flex, Text } from '@mantine/core';

function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section>{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow mt="md">
        <Box>
            <NavLink
                label="Summary"
            />
            <NavLink
                label="Projects"
            />
            <NavLink
                label="Issues"
            />
            <NavLink
                label="Reports"
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