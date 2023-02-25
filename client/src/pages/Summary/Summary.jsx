import { Center, Container, Flex, Grid, Box, Group, Anchor, SimpleGrid, Stack, Text, Title, Paper } from '@mantine/core'
import NavTabs from '../../components/NavTabs/NavTabs';

function Summary() {
  return (
    <Container size="lg" px="md">
      
      <Group>
        <Grid>
          <Grid.Col span={3}>
            <Paper shadow="lg" p="sm" withBorder>
              <Center style={{ width: 250, height: 96}}>
                <Flex justify="space-evenly">
                  {/* icon */}
                  <h5>icon</h5>
                  <div>
                    <Text>3 done</Text>
                    <Text>in the last 7 days</Text>
                  </div>
                </Flex>
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3}>
            <Paper shadow="lg" p="sm" withBorder>
              <Center style={{ width: 250, height: 96}}>
                <Flex justify="space-evenly">
                  {/* icon */}
                  <h5>icon</h5>
                  <div>
                    <Text>3 done</Text>
                    <Text>in the last 7 days</Text>
                  </div>
                </Flex>
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3}>
            <Paper shadow="lg" p="sm" withBorder>
              <Center style={{ width: 250, height: 96}}>
                <Flex justify="space-evenly">
                  {/* icon */}
                  <h5>icon</h5>
                  <div>
                    <Text>3 done</Text>
                    <Text>in the last 7 days</Text>
                  </div>
                </Flex>
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3}>
            <Paper shadow="lg" p="sm" withBorder>
              <Center style={{ width: 250, height: 96}}>
                <Flex justify="space-evenly">
                  {/* icon */}
                  <h5>icon</h5>
                  <div>
                    <Text>3 done</Text>
                    <Text>in the last 7 days</Text>
                  </div>
                </Flex>
              </Center>
            </Paper>
          </Grid.Col>
        </Grid>
      </Group>
      <Box mt="xl">
        <SimpleGrid cols={2} spacing="lg">
          <Paper shadow="lg" px="lg" py="md" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title>Status overview</Title>
                <Text>
                  View the progress of your project based on the status of each item. 
                  <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
          <Paper shadow="lg" px="md" py="sm" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title>Status overview</Title>
                <Text>
                  View the progress of your project based on the status of each item. 
                  <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
        </SimpleGrid>
      </Box>
      <Box mt="xl">
        <SimpleGrid cols={2} spacing="lg">
          <Paper shadow="lg" px="lg" py="md" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title>Status overview</Title>
                <Text>
                  View the progress of your project based on the status of each item. 
                  <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
          <Paper shadow="lg" px="md" py="sm" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title>Status overview</Title>
                <Text>
                  View the progress of your project based on the status of each item. 
                  <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
        </SimpleGrid>
      </Box>
      <Box mt="xl">
        <SimpleGrid cols={2} spacing="lg">
          <Paper shadow="lg" px="lg" py="md" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title>Status overview</Title>
                <Text>
                  View the progress of your project based on the status of each item. 
                  <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
          <Paper shadow="lg" px="md" py="sm" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title>Status overview</Title>
                <Text>
                  View the progress of your project based on the status of each item. 
                  <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default Summary